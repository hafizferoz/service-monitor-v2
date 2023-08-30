package com.monitor.service.dto;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ServiceEvent implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer id;
	
	private ServiceResponse response;

	public ServiceEvent(Integer id, ServiceResponse response) {
		
		this.id=id;
		this.response=response;
		
	}

}
