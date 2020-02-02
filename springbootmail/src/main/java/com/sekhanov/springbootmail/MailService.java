package com.sekhanov.springbootmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * MailService
 */
@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail() {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("sekhanov@yandex.ru");
        msg.setTo("sekhanov@gmail.com");
        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World \n Spring Boot Email");
        javaMailSender.send(msg);
        System.out.println("mail sended");
    }
}