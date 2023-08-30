import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ServiceData } from './service-data';
import { ServiceDetails } from './service-details';
import { tap } from 'rxjs/operators';
import { ServiceEvent } from './service-event';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
 
  private serviceDataUrl = '/servicedata'; // URL to Spring Boot backend
  private serviceDataSubject = new BehaviorSubject<ServiceData[]>([]);
  public serviceData$ = this.serviceDataSubject.asObservable();
  private errorMessageSubject = new Subject<string>();
  public errorMessage$: Observable<string> = this.errorMessageSubject.asObservable();
  constructor(private zone: NgZone, private http: HttpClient) { 
    this.loadServiceData();
    this.subscribeToServiceEvents();
  }

  // private subscribeToServiceEvents() {
  //   console.log("subcribing service-event:");
  //   this.http.get<ServiceEvent[]>(`${this.serviceDataUrl}/service-events`).subscribe(
  //     (responses: ServiceEvent[]) => {
  //       console.log("responses:", responses);
  //       const updatedServices = responses.map(response => {
  //         console.log("response:", response);
  //         const existingService = this.serviceDataSubject.value.find(service => service.id === response.serviceId);
  //         if (existingService) {
  //           existingService.status = response.serviceResponse.status;
  //           // Update other properties as needed (uptime, downtime, etc.)
  //         }
  //         return existingService;
  //       });
  //       this.serviceDataSubject.next(updatedServices);
  //     },
  //     error => {
  //       console.error('Error getting service events:', error);
  //     }
  //   );
  // }

  private subscribeToServiceEvents() {
    console.log("subcribing service-event:");
    this.getMessages().subscribe({
      next: (data: any) => {
        console.log("response:", data);
        this.errorMessageSubject.next(null); // Clear any previous error message 
        const response = JSON.parse(data); // Assuming data is a JSON string
        const existingService = this.serviceDataSubject.value.find(service => service.id === response.id);
        if (existingService) {
          existingService.status = response.response.status;
          // Update other properties as needed (uptime, downtime, etc.)
        }
        this.serviceDataSubject.next([...this.serviceDataSubject.value]); // Update the subject with the modified data
      },
      error: error => {
        this.errorMessageSubject.next('Error fetching service events. Please refresh page.'); // Emit error message
        console.error('Error getting service events:', error);
      }
    });
  }
  
  private getMessages(): Observable<any> {
    return Observable.create(
      observer => {
        let source = new EventSource(`${this.serviceDataUrl}/service-events`);
        source.onmessage = event => {
          this.zone.run(() => {
            console.log("event:",event);
            this.errorMessageSubject.next(null); // Clear any previous error message 
            observer.next(event.data);
          });
        };
        source.onerror = event => {
          this.zone.run(() => {
           // console.log("event error:",event);
           this.errorMessageSubject.next('Error fetching service events. Please refresh page'); // Emit error message
            observer.error(event);
          });
        };
      }
    );
  }
  

  private loadServiceData() {
    this.http.get<ServiceData[]>(this.serviceDataUrl + '/load').subscribe(data => {
      
     // (responses: ServiceEvent[]) => {
              console.log("data:", data);
              const updatedServices = data.map(service => {
                console.log("service:", service);
                let existingService = this.serviceDataSubject.value.find(service => service.id === service.id);
                if (existingService) {
                  existingService = service;
                  // Update other properties as needed (uptime, downtime, etc.)
                
                return existingService;
              }else 
                 return service;
              });
              this.serviceDataSubject.next(updatedServices);
            },
            error => {
      this.serviceDataSubject.next(null);
      console.log("Error loading service data: " + error.message);
    });
  }

  public addServiceData(serviceData: ServiceData) {
    this.http.post<ServiceData>(this.serviceDataUrl + '/add', serviceData).subscribe(() => {
      this.loadServiceData();
    }, error => {
      console.log("Error adding service data: " + error.message);
    });
  }

  public updateServiceData(serviceData: ServiceData) {
    this.http.post<ServiceData>(this.serviceDataUrl + '/update', serviceData).subscribe(() => {
      this.loadServiceData();
    }, error => {
      console.log("Error updating service data: " + error.message);
    });
  }

  public getServiceDetails(serviceData: ServiceData) {
    return this.http.post<ServiceDetails>(this.serviceDataUrl + '/getdetails', serviceData);
    // .subscribe(data => {
    //   console.log(data);
    //   return data;
    // });
  }
  public removeServiceData(serviceData: ServiceData) {
    this.http.post(this.serviceDataUrl + '/remove', serviceData).subscribe(() => {
      console.log("removed:" + serviceData.id);
      this.loadServiceData();
    },
    error => {
      console.log("Error removing service: " + error.message);
    });
  }

  public sendEmail(serviceList: any[]) {
    const downServices = serviceList.filter(service => service.status === 'DOWN');
    
    if (downServices.length > 0) {
      const serviceDataList: ServiceData[] = downServices.map(service => {
        const serviceData:ServiceData = {
          id: service.id,
          name: service.name,
          status: service.status,
          url: service.url,
          startUrl: service.startUrl,
          stopUrl: service.stopUrl,
          startTime: service.startTime,
          stopTime: service.stopTime,
          upTime: service.upTime,
          downTime: service.downTime
        };
        return serviceData;
      });
      this.http.post<void>(`${this.serviceDataUrl}/sendEmail`, serviceDataList).subscribe(() => {
        console.log('Email sent successfully.');
      }, error => {
        console.log('Error sending email:', error);
      });
    }
  }

}

