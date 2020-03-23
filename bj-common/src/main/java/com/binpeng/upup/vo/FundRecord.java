package com.binpeng.upup.vo;

import lombok.Data;

import java.text.DecimalFormat;
import java.util.Date;

@Data
public class FundRecord {
    private Date  fundMonth;
    private Double arrAmount;
    private String id;
    private String remark;
    private String bei01;
    private String monthStr;
    private Integer debtFlag;
    private Double  useableAmount;
    /**
     * 是否可钻取详细信息   1-可以  0-不可以
     */
    private Integer nodeFlag;
}
