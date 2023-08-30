package com.monitor.service.service;

import java.time.Duration;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.monitor.service.dto.ServiceEvent;
import com.monitor.service.dto.ServiceResponse;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ServiceEventService {

    private final Flux<ServiceEvent> serviceResponseFlux;
    private int duration=15;
    public ServiceEventService(ServiceDataService serviceDataService) {
    	this.serviceResponseFlux = Flux.interval(Duration.ofSeconds(duration))
                .flatMap(sequence -> fetchAndProcessServiceData(serviceDataService))
                .switchIfEmpty(Flux.defer(() -> Flux.just(new ServiceEvent(-1, new ServiceResponse()))))
                .share().log();
    }

    public Flux<ServiceEvent> getServiceResponseFlux() {
        return serviceResponseFlux;
    }


	private Flux<ServiceEvent> fetchAndProcessServiceData(ServiceDataService serviceDataService) {
		return Mono.fromCallable(() -> serviceDataService.getServiceData())
				.flatMapMany(serviceDataList -> Flux.fromIterable(serviceDataList)).flatMap(serviceData -> {
					ResponseEntity<ServiceResponse> responseEntity = serviceDataService.getServiceDetails(serviceData);
					Mono<ServiceResponse> responseMono = Mono.just(responseEntity.getBody());
					return responseMono.map(response -> new ServiceEvent(serviceData.getId(), response));
				});
	}
}