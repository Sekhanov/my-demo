package com.sekhanov.mywebsocketchatbasic.controller;


import com.sekhanov.mywebsocketchatbasic.model.ChatMessage;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

/**
 * ChatController
 */
@Controller
public class ChatController {

    @MessageMapping("/chat.sentMessage")
    @SendTo("/topic/public")
    public ChatMessage sentMessage(@Payload ChatMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor simpMessageHeaderAccessor) {
        simpMessageHeaderAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
}