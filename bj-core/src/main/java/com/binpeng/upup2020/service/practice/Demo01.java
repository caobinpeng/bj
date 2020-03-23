package com.binpeng.upup2020.service.practice;

import com.binpeng.upup.vo.PoliceCar;
import com.binpeng.upup.vo.PortalTransOut;
import com.binpeng.upup2020.dao.practice.Dao01;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class Demo01 {
    @Autowired
    Dao01  dao01;
    public  void upup(){
        List<PortalTransOut>  portalTransOuts=new ArrayList<PortalTransOut>();
        Long before=System.currentTimeMillis();
        dao01.insertPortalData(portalTransOuts);
        System.out.println(System.currentTimeMillis()-before);
    }
    public List<PoliceCar>  search(){
       return dao01.search();
    }
}
