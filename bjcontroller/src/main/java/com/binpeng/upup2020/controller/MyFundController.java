package com.binpeng.upup2020.controller;

import com.binpeng.upup.params.FundParams;
import com.binpeng.upup.vo.FundDetail;
import com.binpeng.upup.vo.FundRecord;
import com.binpeng.upup2020.service.practice.myFund.MyFundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 资金接口
 */
@Controller
@RequestMapping("/myFund")
public class MyFundController {
    @Autowired
    MyFundService myFundService;
    /**
     * 按照月份查询账户资金总览
     */
    @ResponseBody
    @RequestMapping(value = "/monthRecord",method = RequestMethod.GET)
    //@RequestMapping("/monthRecord")
    public List<FundRecord> searchMyFundRecord(){
        return myFundService.search(new FundParams());
    }
    /**
     * 根据月份获取该月份的资金详情
     */
    @ResponseBody
    @RequestMapping(value = "/monthDetail",method = RequestMethod.GET)
    //@RequestMapping("/monthRecord")
    public List<FundDetail> searchMonthDetail(String monthId){
        return myFundService.searchMonthDetail(monthId);
    }

}
