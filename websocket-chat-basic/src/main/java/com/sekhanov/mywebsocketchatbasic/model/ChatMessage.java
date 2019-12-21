package com.sekhanov.mywebsocketchatbasic.model;

/**
 * ChatMessage
 */
public class ChatMessage {

    private MessageType messageType;
    private String sender;
    private String content;

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }

    

    /**
     * @return MessageType return the messageType
     */
    public MessageType getMessageType() {
        return messageType;
    }

    /**
     * @param messageType the messageType to set
     */
    public void setMessageType(MessageType messageType) {
        this.messageType = messageType;
    }

    /**
     * @return String return the sender
     */
    public String getSender() {
        return sender;
    }

    /**
     * @param sender the sender to set
     */
    public void setSender(String sender) {
        this.sender = sender;
    }

    /**
     * @return String return the content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content the content to set
     */
    public void setContent(String content) {
        this.content = content;
    }

}