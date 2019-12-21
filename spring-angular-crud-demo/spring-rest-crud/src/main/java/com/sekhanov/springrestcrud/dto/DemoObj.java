package com.sekhanov.springrestcrud.dto;

/**
 * DemoObj
 */
public class DemoObj {
    private String string;
    private int integer;

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }

    public int getInteger() {
        return integer;
    }

    public void setInteger(int integer) {
        this.integer = integer;
    }

    public DemoObj(String string, int integer) {
        this.string = string;
        this.integer = integer;
    }

    public DemoObj() {
    }
    

}