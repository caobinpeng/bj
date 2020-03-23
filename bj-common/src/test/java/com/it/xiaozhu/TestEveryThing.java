package com.it.xiaozhu;

/**
 * test方法
 */
public class TestEveryThing {
    public static void main(String[] args) {
        doTest01();
    }

    /**
     * 从20个数中找出 满足和为 150的所有可能
     */
    private static void doTest01() {
         int[]  array=new int[20];
         for(int i=0;i<20;i++){
             array[i]=i+10;
         }
         //思路一： 20个数挑1个，挑2个，挑3个的所有i情况
         //思路二：  每个数都有被选中和不被选中2种可能 带王朝 非常好
    }
}
