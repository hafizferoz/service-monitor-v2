package com.monitor.service.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monitor.service.dto.ServiceEvent;
import com.monitor.service.service.ServiceEventService;

import reactor.core.publisher.Flux;

@RestController	
@RequestMapping("/servicedata")
public class EventController {

    private final ServiceEventService serviceEventService;

    public EventController(ServiceEventService serviceEventService) {
        this.serviceEventService = serviceEventService;
    }

    @GetMapping(path = "/service-events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServiceEvent> getServiceEvents() {
        return serviceEventService.getServiceResponseFlux();
    }
}
