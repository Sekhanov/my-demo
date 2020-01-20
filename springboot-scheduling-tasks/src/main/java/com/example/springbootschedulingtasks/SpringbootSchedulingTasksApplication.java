package com.example.springbootschedulingtasks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Random;

@SpringBootApplication
@EnableScheduling
@EnableAsync
public class SpringbootSchedulingTasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootSchedulingTasksApplication.class, args);
	}

//	@Scheduled(fixedDelay = 1000, initialDelay = 5000)//fixedDelay время после завершения метода / initialDelay - первая задержка
	public void fixDelayScheduleTask() {
		System.out.println("fix delay in 1000ms schedule task");
	}

//	@Scheduled(fixedRate = 1000) // время между запуском одной задачи и следующей (будет запущен даже если не завершена предыдущая)
	public void scheduleFixedRateTask() throws InterruptedException {
		int i = new Random(100).nextInt();
		System.out.println("task " + i + " started");
		Thread.sleep(3000);
		System.out.println("task " + i + " ended");
	}

	@Async
//	@Scheduled(fixedRate = 1000)
	public void scheduleFixedRateTaskAsync() throws InterruptedException {
		int i = new Random(100).nextInt();
		System.out.println("task " + i + " started");
		Thread.sleep(3000);
		System.out.println("task " + i + " ended");
	}

	@Scheduled(cron = "0/5 * * * * *") // каждые 5 скунд
	public void sheduleChromeTask() {
		System.out.println("hello from crone");
	}


}
