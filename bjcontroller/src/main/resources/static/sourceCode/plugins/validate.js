/*
 * #%L
 * 扁平化 收费管理平台
 * %%
 * Copyright (C) 2013 - 2014 安徽皖通科技股份有限公司
 * %%
 * All rights reserved
 * #L%
 */
/**
 * 扩展jQuery官方验证插件.该插件主要作用是验证表单，支持后台(remote).
 * 这个插件应用的比较多,在jQuery-UI中也用到该插件,所以在封装时除了变更命名空间外还保留了对原有插件的兼容.
 * 
 * 该插件依赖于<a>jquery.js</a><a>jquery.validate.js</a>
 * 
 * @author hua
 */
$.extend($.validator.messages, {
	required : "必填",
	//remote : "请修正该字段",
	email : "请输入正确格式的电子邮件",
	url : "请输入合法的网址",
	date : "请输入合法的日期",
	dateISO : "请输入合法的日期 (ISO).",
	number : "请输入数字",
	digits : "只能输入非负整数",
	positiveInteger : "请输入正整数",
	integer:"请输入整数",
	positiveNumber : "请输入正数",
	creditcard : "请输入合法的信用卡号",
	equalTo : "请再次输入相同的值",
	accept : "请输入拥有合法后缀名的信息",
	maxlength : $.validator.format("请输入长度最多是 {0} 位的信息"),
	minlength : $.validator.format("请输入长度最少是 {0} 位的信息"),
	rangelength : $.validator.format("请输入长度介于 {0} 和 {1} 之间的信息"),
	range : $.validator.format("请输入介于 {0} 和 {1} 之间的信息"),
	max : $.validator.format("请输入最大为 {0} 的信息"),
	min : $.validator.format("请输入最小为 {0} 的信息"),
	combo : "请输入正确的信息",
	isIDCard : "请输入正确的身份证号码",
	ipv4:"请输入正确的ip地址",
	isPhone:"请输入正确的电话号码",
	nonChinese:"您所输入的内容不能包含汉字",
	isPostCard:"请输入正确的邮编",
	isFax:"请输入正确格式的传真号",
	isMobilePhone:"请输入正确格式的手机号码"
		
});
/**
 * 为校验增加样式
 */
/*$.extend($.validator.defaults,{
	errorPlacement: function(error, element){
		
	},
	success: $.noop
})
*/