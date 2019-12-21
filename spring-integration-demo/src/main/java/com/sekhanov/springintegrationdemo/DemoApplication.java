package com.sekhanov.springintegrationdemo;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.integration.annotation.IntegrationComponentScan;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.handler.annotation.Headers;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.support.MessageBuilder;

@SpringBootApplication
@IntegrationComponentScan
public class DemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =  SpringApplication.run(DemoApplication.class, args);
		Message<String> message = MessageBuilder
		.withPayload("hello world!!!!!!!!!!!!")
		.setHeader("header", "value")
		.build();

		MessageChannel channel = (DirectChannel) context.getBean("channer_no5");
		channel.send(message);
		System.out.println();
	}

	@ServiceActivator(inputChannel = "channer_no5")
	public void foo(@Payload String payload, @Headers Map<String, Object> headerMap) {
		headerMap.forEach((s, o) -> {
			System.out.printf("%s: %s", s, o);
			System.out.println();
	});
		System.out.println(payload);
	}

}
