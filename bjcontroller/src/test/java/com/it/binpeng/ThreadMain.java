package com.it.binpeng;

import clojure.lang.Compiler;

public class ThreadMain {
    public static void main(String[] args) {
        CardThread  cardThread=new CardThread();
        Thread  thread01=new Thread(cardThread,"线程1");
        Thread  thread02=new Thread(cardThread,"线程2");
      //  for(int i=0;i<1000;i++){
            thread01.start();
      //  }
       // for(int i=0;i<1000;i++){
            thread02.start();
       // }

    }

}
