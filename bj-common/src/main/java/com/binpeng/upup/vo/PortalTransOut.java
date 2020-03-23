package com.binpeng.upup.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.Date;

/**
 * @ClassName PortalTransout
 * @Desicription 取消省界站的交易存储主表【含4种交易】：表[tr_portal_transout]   清分结算优化新交易：合并后的出口交易
 * @Author imaxonor
 * @Date 2019/11/22 10:46
 * @Version 1.0
 **/
@EqualsAndHashCode(callSuper = false)
@Data
public class PortalTransOut  implements Serializable {

    private static final long serialVersionUID = 4258589041894144687L;

    /**
     * 交易编号（id）=门架编号（19位）+交易批次号（10位）+批次内流水号（6位，000001~999999）
     **/
    private String transactionId;
    /**
     * 收费方省中心 Id，表示交易文件是由哪个收费方省中心生成的
     **/
    private String tollProvinceId;
    /**
     * 发行服务机构 Id，表示产生交易记录的发行服务机构
     **/
    private String issuerId;
    /**
     * 收费方省中心生成的交易文件 Id
     **/
    private Long messageId;
    /**
     * 收费路段编号
     **/
    private String sectionId;
    /**
     * ETC门架编号（19位） = 收费单元编号(16位)+顺序码（2位）+保留位（1位）
     **/
    private String tollGranTryId;
    /**
     * 应收金额，单位：分
     **/
    private Long payFee;
    /**
     * 交易金额，单位：分
     **/
    private Long fee;
    /**
     * 优惠金额，单位：分
     **/
    private Long discountFee;
    /**
     * OBU单/双片标识：1-单片式obu
     * 2-双片式obu
     **/
    private Integer obuSign;
    /**
     * OBU编号
     **/
    private String obuId;
    /**
     * ETC卡类别：22-储值卡
     * 23-记账卡
     **/
    private Integer etcCardType;
    /**
     * 1.ETC卡编号
     * 2.CardId对应【拓展应用】
     **/
    private String etcCardId;
    /**
     * 入口车道编号（21位）=收费广场编号（18位）+收费车道顺序吗（2位）+ 保留位（1位，默认为0）
     **/
    private String enTollLaneId;
    /**
     * 入口交易发生时间
     **/
    private Date enTime;
    /**
     * 入口收费站名称
     **/
    private String enTollStationName;

    /**
     * 出口收费站名称
     */
    private String exTollStationName;

    /**
     * 1.通行时间（对应门架交易transTime）
     * 2.交易时间（对应刷卡交易exTime）
     * 3.交易时间（对应拓展应用中的transDate和time的合并）
     **/
    private Date transTime;
    /**
     * 实际收费车辆车牌号码/出口实际收费车辆车牌号码（对应刷卡交易-exVehicleId）
     **/
    private String vehiclePlate;
    /**
     * 实际收费车辆车牌颜色/出口实际收费车辆车牌颜色（对应刷卡交易-exVehicleId）
     **/
    private Integer vehicleColor;
    /**
     * 门架识别的车牌号码/出口识别的车牌号码（对应刷卡交易-identifyVehicleId）
     **/
    private String identifyVehiclePlate;
    /**
     * 门架识别的车牌颜色/出口识别的车牌颜色（对应刷卡交易-identifyVehicleId）
     **/
    private Integer identifyVehicleColor;
    /**
     * 计费车型/出口车型（对应刷卡交易-exVehicleType）
     **/
    private Integer vehicleType;
    /**
     * 识别的车型
     **/
    private Integer identifyVehicleType;
    /**
     * 车种：0-普通  8-军警 10-紧急  14-车队 （35号公告已定义）
     * 21-绿通车 22-联合收割机 23-抢险救灾 24-集装箱 25-大件运输；26-应急车
     * 27-货车列车或半挂汽车列车
     **/
    private Integer vehicleClass;
    /**
     * 单位：分
     **/
    private Long transFee;
    /**
     * 交易的服务类型：
     * 1-公路电子收费，
     * 2-停车场消费，
     * 3-加油站消费，
     * 4-服务区消费
     **/
    private Integer serviceType;
    /**
     * 车牌识别流水号
     **/
    private String vehicleSignId;
    /**
     * 对交易的文字解释/对应拓展服务的是remark字段
     **/
    private String description;
    /**
     * 通行ID:通行标识ID=通行介质ID(OBU序号编码)+入口时间（YYYYMMDDHHmmss）
     **/
    private String passId;
    /**
     * OBU 物理地址：OBU的EF02（ETC应用交易记录文件）中的OBUMAC地址。
     **/
    private String obuMac;
    /**
     * OBU 合同序列号：OBU 的 EF01 系统信息文件的合同序列号。
     **/
    private String obuSn;
    /**
     * 行驶方向：1-上行
     * 2-下行
     **/
    private Integer direction;
    /**
     * 【基于可匹配过车图像的ETC通行记录】ETC门架处交易失败标记状态：2-写标签非设备失败
     * 3-写标签设备失败
     * 4-写ETC卡非设备失败
     * 5-写ETC卡设备失败
     * 若存在多项，用“|”隔开
     **/
    private String signStatus;
    /**
     * 【基于可匹配过车图像的ETC通行记录】车牌识别数据经校核标识：1-自动完成匹配
     * 2-校核后匹配
     **/
    private Integer manualSign;
    /**
     * 【基于经校核的过车识别图像】证据超链接：
     **/
    private String link;
    /**
     * 【基于经校核的过车识别图像】车牌识别数据集：证明车辆通过该门架点的车牌识别数据编号集，用“|”间隔
     **/
    private String vehicleSignIds;
    /**
     * 车辆入口通行记录编号：用于支撑车辆拟合路径入口有效
     **/
    private String enPassRecordId;
    /**
     * 车辆在上游ETC门架通行记录编号:用于支撑车辆拟合本ETC门架交易记录的上游ETC门架通行记录支撑数据，至少填写2项。多个记录号通过“|”进行分隔
     **/
    private String forwardETCRecordId;
    /**
     * 车辆在下游ETC门架通行记录编号:用于支撑车辆拟合本ETC门架交易记录的下游ETC门架通行记录支撑数据，至少填写2项。多个记录号通过“|”进行分隔
     **/
    private String backwardETCRecordId;
    /**
     * 通行介质类型：2-CPC卡
     * 3-纸券
     * 9-无通行介质
     **/
    private Integer mediaType;
    /**
     * 介质编码：CPC卡16位
     * 无介质通行为030
     * 纸券，为01+纸券标识(不超过20位)
     **/
    private String mediaNo;
    /**
     * 【ETC刷卡交易】出口车道编号
     **/
    private String exTollLaneId;
    /**
     * 【ETC刷卡交易】入口实际收费车辆车牌号码
     **/
    private String enVehiclePlate;
    /**
     * 【ETC刷卡交易】入口实际收费车辆车牌颜色
     **/
    private Integer enVehicleColor;
    /**
     * 【ETC刷卡交易】入口车型
     **/
    private Integer enVehicleType;
    /**
     * 【ETC刷卡交易】支付类型：4-ETC交易
     **/
    private Integer payType;
    /**
     * 【ETC刷卡交易】开票标识：2-现场未开具纸质报销凭证
     **/
    private Integer identification;
    /**
     * 交易类型：
     * 1-门架交易（基于TAC）
     * 2-刷卡交易
     * 3-门架交易（基于可匹配图像的通行记录）
     * 4-门架交易（基于经校核的过车识别图像）
     * 5-门架交易（基于有证据支撑的路径拟合数据
     **/
    private Integer type;

    /**
     * 创建时间
     **/
    private Date createTime;
    /**
     * 6101账户ID
     **/
    private String accountId;
    /**
     * 卡片类型 A/B/C卡
     **/
    private String privilegeType;
    /**
     * 资金账户名称
     **/
    private String fundAccountName;
    /**
     * 签约渠道
     **/
    private String channelType;

    /**
     * 签约流水号
     */
    private String signSource;
    /**
     * 记账时间
     **/
    private Date balanceOn;
    /**
     * 原始交易业务状态
     **/
    private Integer state;
    /**
     * 合并交易ID
     **/
    private String integratedId;
    /**
     * 是否合并：0-未合并，1-已合并
     **/
    private Integer isIntegrated;

    /**
     * 特情类型
     */
    private String specialType;

    /**
     * 清分日
     */
    private Date clearDate;

    /**
     * 清分状态0-未清分  1-清分成功 2-清分失败
     */
    private Integer clearFlag;


    /**
     * 子服务方ID
     */
    private String subServiceId;

    /**
     * 车辆识别标识
     */
    private String vehicleSign;

    /**
     * 省中心优惠类型
     */
    private Integer discountType;


    /**
     * 省中心优惠金额
     */
    private Long provinceDiscountFee;

    /**
     * 省中心优惠前交易金额
     */
    private Long originFee;

    /**
     * 部中心订单上传状态 3--未上传 5--上传成功  80--无法上传  81--已经上传，状态未更新  83--临时状态
     */
    private Integer channelPushState;
    /**
     * 计费总里程数
     */
    private Long feeMileage;
    /**
     * 最短路径交易金额
     */
    private Long shortFee;
    /**
     * 用户卡累计交易金额
     */
    private Long cardFee;
    /**
     * OBU累计通行金额
     */
    private Long obuFee;
    /**
     * 本省累计通行费金额
     */
    private Long provFee;
    /**
     * 交易支付方式
     */
    private Integer transPayType;
    /**
     * 是否本省卡省内数据
     */
    private Integer inProvince;
    /**
     * 记账上传至部中心返回的接收时间，用于清分对账
     */
    private Date accountReceiveTime;
}
