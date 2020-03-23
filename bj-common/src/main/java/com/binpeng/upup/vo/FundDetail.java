package com.binpeng.upup.vo;

import lombok.Data;

import java.util.Date;

@Data
public class FundDetail {
    private String detailId;
    private String monthId;
    private String description;
    private Double fundMoney;
    private Date   transTime;
    /**
     * 0-支出  1-收入
     */
    private Integer fundType;
}
