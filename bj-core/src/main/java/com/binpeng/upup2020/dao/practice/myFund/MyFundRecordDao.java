package com.binpeng.upup2020.dao.practice.myFund;

import com.binpeng.upup.params.FundParams;
import com.binpeng.upup.vo.FundDetail;
import com.binpeng.upup.vo.FundRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

/**
 * 资金记录dao
 */
@Repository
public class MyFundRecordDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private String sql="select id,monthStr,arrAmount,nodeFlag from myFundRecord order by fundMonth";

    public List<FundRecord>  getRecords(FundParams  params){
        List<FundRecord>  list=new ArrayList<>();
        if(params==null||(params.getRecordEnd()==null&&params.getRecordFrom()==null)){
               return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(FundRecord.class));
        }
        return list;
    };

    /**
     * 按照月份获取资金详细信息
     * @param monthId
     * @return
     */
    public List<FundDetail> searchMonthDetail(String monthId) {
        String sql="select monthId,detailId,fundMoney,fundType,description  from myFundDetail where monthId=?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(FundDetail.class),monthId);
    }
}
