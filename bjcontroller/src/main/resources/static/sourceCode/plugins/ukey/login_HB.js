var obj;
var strLicence = "amViY55oZWKcZmhlnWxhaGViY2GXGmJjYWhlYnGH1QQ5GcNqnW6z3vohVnE+nTJr";
var c;
var succ = 0;
var err = 0;

/**
 * 初始化插件
 */
function readyCert() {
	if(obj==null){
		obj = new HebcaP11XObject("HebcaP11X.CertMgr");
		obj.Licence = strLicence;
		obj.OnDeviceChange = OpCallback;
	}
	GetUserCertName();
}

function readyCertSign() {
	obj = new HebcaP11XObject("HebcaP11X.CertMgr");
	obj.Licence = strLicence;
	if (navigator.userAgent.indexOf('MSIE') >= 0) {
		obj.OnDeviceChange = OpCallback;
	} else {
		obj.OnDeviceChange = "OpCallback";
	}
}

// 设置或者返回设备发生变化时的回调函数。
function OpCallback() {
	obj = new HebcaP11XObject("HebcaP11X.CertMgr");
	obj.Licence = strLicence;
	c = selCa();
}
// 获取数字证书个数
function getCount() {
	var num = 0;
	try {
		num = obj.GetCertCount();
	} catch (e) {
		//alert("错误代码：" + e.number + "，错误描述：" + HebcaP11XLastError(obj, e));
		alert("陕西CA证书控件未安装或者是安装不正确，请下载安装后重试！");
		return;
	}
	return num;
}
// 从界面中选择多个数字证书中的一个，获取该数字证书的对象。
function selCa() {
	var num = getCount();
	if (num <= 0) {
		alert("没有检测到陕西CA数字证书介质设备！")
		return null;
	}
	try {
		//return obj.SelectSignCert();
		return obj;
	} catch (e) {
		alert("错误代码：" + e.number + "，错误描述：" + HebcaP11XLastError(obj, e));
		return null;
	}
}
// 初始化证书控件对象
function Login() {
	//var pwd = document.getElementById("pwd").value;
	try {
		
		c = selCa();
		if(c==null)
		{
			return false;
		}
		return true;
		/*
		if (null != pwd && pwd != "") {
			c.Login(pwd);
		} else {
		*/
			//c.UILogin();
		//}
	} catch (e) {

		alert("err:"+HebcaP11XLastError(obj, e));
		return false;
	}
}

// 生成指定长度随机数
//参数1:随机数长度
//返回:返回指定长度随机数
function getCARand(length) {
	try {

		var device = obj.GetDevice(0);
		var ran = device.GenRandom(length);
		return ran;
	} catch (e) {
		alert(document.getElementById("loginResla").innerHtml = HebcaP11XLastError(obj, e));
		return null;
	}
}

//获取用户客户端证书名称
//返回:客户端用户证书名称
function GetUserCertName() {
	//---------------------
	var count,i,uCert,sRet;
	if (c == null) {
		if(!Login())
		{
			return null;
		}
	}
	try
	{
		count=c.GetSignCertCount();
		if(count>1)
		{
			alert("您的电脑上插入了多把陕西CA数字证书，请将多余的证书移除!");
		}
		for(i=0;i<count;i++)
		{
			uCert=c.GetCert(i);
			if(uCert!=null)
			{
				sRet=uCert.GetSubjectItem('CN');
			}
		}
	}
	catch(e)
	{
		alert("获取证书名称异常:"+e.message);
		return null;
	}
	return sRet;
}

//输入客户端用户证书PIN码获取证书信息
//参数1:证书类型默认为0
//参数2:用户证书PIN码
//返回:用户客户端签名证书对象
function SNCAGetCertForPwd(certtype,pwd) {
	//---------------------
	var count,i,uCert,sRet;
	if (c == null) {
		if(!Login())
		{
			return null;
		}
	}
	try
	{
		uCert=c.GetSignCert(0);
		uCert.Login(pwd);
		if(uCert!=null)
		{
			return uCert;
		}
	}
	catch(e)
	{
		alert("获取签名证书异常:"+e.message);
		return null;
	}
	return uCert;
}

//通过用户key中证书对数据信息进行签名
//参数1:时间源时间加随机数形成的用户签名数据
//参数2:客户端用户签名证书对象
//返回:客户端签名数据
function SignSNCAForCert(txtData,wcert)
{
	if (c == null) {
		if(!Login())
		{
			return null;
		}
	}
	try {
		var b64Cert = wcert.GetCertB64();
		var pkcs7 = c.CreatePkcs7();
		pkcs7.AddRecipientCert(b64Cert);
		if(txtData==null || txtData=="")
		{
			return null;
		}
		var signData = "NoNe";
		if (wcert.IsRSACert) {		
			signData = pkcs7.SignText(0, txtData, 1); // 签名文本数据
			wcert.Logout();
		} else if (wcert.IsSM2Cert) {
			// signData = c.SignText(txtData, 1); // 签名文本数据
			signData = pkcs7.SignText(0, txtData, 2); // 签名文本数据
		} else {
			signData = "未知证书类型!";
			return null;
		}
		
		if(!pkcs7.VerifyB64(signData)) 
		{
			alert("产生签名数据异常，签名数据验证失败!");
			return null;
		}
		return signData;
		
	} catch (e) {
		return null;
	}
	finally 
	{
		pkcs7=null;
		b64Cert=null;
		c=null;
	}
}


function SNCAGetCertCssIdForCert(wcert)
{
	var certext,sRet;
	
	try {
		
		certext="1.2.86.11.7.11";
		if (wcert == null) {
			alert("获取不到企业证书信息");
			return null;
		}
		sRet=wcert.GetCertExtensionByOid(certext);
		if(sRet==null)
		{
			alert("获取陕西CA证书客服信任号失败！");
			return null;
		}
		return sRet;
		
	}
	catch (e) {
		alert("异常处理:"+e.message);
		return null;
	}
	finally 
	{
		c=null;
		wcert=null;
	}
}


function SNCAHashData(data)
{
	var sRet;
	try
	{
		if (c == null) {
			if(!Login())
			{
				return null;
			}
		}
		Uobj = c.Util;
		if(data!=null)
		{
			sRet = Uobj.HashText(data, 1);
	        if(sRet!=null)
	        {
	        	return sRet;
	        }
		}
		return null;
	}
	catch (e) {
		alert("异常处理:"+e.message);
		return null;
	}
	finally 
	{
		HebcaSignCtrl1=null;
	}	
}
