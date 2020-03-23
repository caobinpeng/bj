package com.binpeng.upup2020.controller;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.binpeng.upup.vo.PoliceCar;
import com.binpeng.upup2020.service.practice.Demo01;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class LoveJin {
    @Autowired
    Demo01 demo01;
    @RequestMapping("/lovexiaozhu")
    @ResponseBody
    public  String  aiJin(){
        return  "我爱小猪，深陷其中。";
    }
    @RequestMapping("/test01")
    @ResponseBody
    public  String  aiJin02(){
        demo01.upup();
        return "good";
    }
    @RequestMapping("/search")
    @ResponseBody
    public  String  search(){
        List<PoliceCar> list=demo01.search();
      return     JSONObject.toJSONString(list);

    }
}
