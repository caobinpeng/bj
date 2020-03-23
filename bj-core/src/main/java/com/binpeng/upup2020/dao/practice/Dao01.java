package com.binpeng.upup2020.dao.practice;


import com.binpeng.upup.vo.PoliceCar;
import com.binpeng.upup.vo.PortalTransOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Repository
public class Dao01 {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public void insert(){
        jdbcTemplate.update("insert into  ac_policecar_list(vehicleplate,vehiclecolor,doublecolumn)  values(?,?,?)","陕A1122",3,new Double(1.1222));
    }
    public List<PoliceCar> search(){
       return jdbcTemplate.query("select a.vehicleplate,a.doublecolumn from ac_policecar_list a ",BeanPropertyRowMapper.newInstance(PoliceCar.class));
    }
    /**
     * 向 消费主表插入数据
     */
    public void  insertPortalData(List<PortalTransOut>  transouts){
        jdbcTemplate.batchUpdate("insert into tr_portal_transout (transactionid,passid,fee,tollprovinceid,issuerid,messageid,transtime,createtime,type,obusign)  values(?,?,?,?,?,?,?,?,?,?) ",new BatchPreparedStatementSetter() {

            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                ps.setString(1, UUID.randomUUID().toString().replaceAll("-",""));
                ps.setString(2, UUID.randomUUID().toString().replaceAll("-",""));
                ps.setLong(3, 100);
                ps.setString(4, "610102");
                ps.setString(5, "6101");
                ps.setLong(6, 5523468999L);
                ps.setTimestamp(7,new Timestamp(new Date().getTime()));
                ps.setTimestamp(8,new Timestamp(new Date().getTime()));
                ps.setLong(9,2L);
                ps.setLong(10, 2L);
            }

            @Override
            public int getBatchSize() {
                return 1000000;
            }
        });
    }
}
