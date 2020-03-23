package com.it.binpeng;

public class CardThread implements Runnable{
    private int card=200000;
    @Override
    public void run() {
        while (card>0) {
            System.out.println(Thread.currentThread().getName() +"------"+ getCard());
        }
        System.out.println(Thread.currentThread().getName());
    }
    public synchronized  int getCard(){
        return card--;
    }
}
