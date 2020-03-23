package com.binpeng.upup2020.service.practice.myFund;

import com.binpeng.upup.params.FundParams;
import com.binpeng.upup.vo.FundDetail;
import com.binpeng.upup.vo.FundRecord;
import com.binpeng.upup.vo.PoliceCar;
import com.binpeng.upup.vo.PortalTransOut;
import com.binpeng.upup2020.dao.practice.Dao01;
import com.binpeng.upup2020.dao.practice.myFund.MyFundRecordDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyFundService {
    @Autowired
    MyFundRecordDao myFundRecordDao;
//    public  void upup(){
//        List<PortalTransOut>  portalTransOuts=new ArrayList<PortalTransOut>();
//        Long before=System.currentTimeMillis();
//        dao01.insertPortalData(portalTransOuts);
//        System.out.println(System.currentTimeMillis()-before);
//    }
    public List<FundRecord>  search(FundParams fundParams){
       return myFundRecordDao.getRecords(fundParams);
    }

    public List<FundDetail> searchMonthDetail(String monthId) {
        return myFundRecordDao.searchMonthDetail(monthId);
    }
}
