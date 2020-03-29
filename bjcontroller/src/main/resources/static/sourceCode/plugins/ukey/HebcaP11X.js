/*******************************************************************************
 * 
 * Function name : HebcaP11XObject
 * 
 * Description : 创建HebcaP11X控件对象
 * 
 * Input : strP11xName 证书管理对象名称, 目前固定为 "HebcaP11X.CertMgr"
 * 
 * Return : 返回证书管理对象实例
 * 
 * Caution : 调用接口注意事项
 * 
 * 1. 该接口在一个页面内只允许调用一次
 * 
 * 2. 页面内需要<body>标签
 * 
 * ---------------------------------------------------------------------------------
 * 
 * 
 * 
 ******************************************************************************/

function HebcaP11XObject(strP11xName)

{

	var certMgr = null;

	if (window.ActiveXObject !== undefined)

	{

		// IE 浏览器创建插件

		try {

			certMgr = new ActiveXObject("HebcaP11X.CertMgr");

		}

		catch (e) {

			throw Error("没有安装客户端软件或IE阻止其运行.");

		}

	}

	else // 非IE浏览器加载使用embed方式加载插件

	{

		var hebcaMimeType = "application/hebca-np11x-plugin";

		if (!(navigator.mimeTypes && navigator.mimeTypes[hebcaMimeType] && navigator.mimeTypes

		[hebcaMimeType].enabledPlugin))

		{

			throw Error("请检查是否安装河北CA数字证书多浏览器客户端或被浏览器禁用!安装或启用后重新打开浏览器再试！");

			return null;

		}

		certMgr = document.getElementById("npP11Xplugin");

		if (certMgr)

		{

			return certMgr;

		}

		var plugin_embed = document.createElement("embed");
		plugin_embed.setAttribute("id", "npP11Xplugin");
		plugin_embed.setAttribute("type", hebcaMimeType);
		plugin_embed.setAttribute("width", 0);
		plugin_embed.setAttribute("height", 0);
		document.body.appendChild(plugin_embed);

		certMgr = document.getElementById("npP11Xplugin");

		try {

			// 检测是否安装成功, 若被浏览器阻止, 会抛出异常.

			certMgr.CheckBlockedByBrowser();

		}

		catch (e)

		{

			throw Error("插件未安装或被浏览器阻止.");

			return null;

		}

		// 检测数字证书助手是否安装

		var bIsP11 = certMgr.CheckP11XInstalled();

		if (false == bIsP11)

		{

			throw Error("数字证书助手未安装.");

			return null;

		}

	}

	return certMgr;

}

/*******************************************************************************
 * 
 * Function name : HebcaP11XLastError
 * 
 * Description : 捕获P11X抛出的异常信息
 * 
 * Input : p11xObj P11X证书操作对象
 * 
 * err 异常信息
 * 
 * Return : 无
 * 
 * Caution : 请使用该接口转换异常信息
 * 
 * ---------------------------------------------------------------------------------
 * 
 * 
 * 
 ******************************************************************************/

function HebcaP11XLastError(p11xObj, err)

{

	if (window.ActiveXObject !== undefined)

	{

		return err.message; // IE浏览器直接返回异常描述

	}

	else

	{

		if ("TypeError" == err.name)

		{

			/*
			 * 当发生类型异常时, 通常是由于调用了不支持的属性或者方法, 返回浏览器抛出的异常信息
			 * 
			 */

			return err.message;

		}

		else

		{

			/* 返回插件转义后的错误信息 */

			return p11xObj.GetLastErr();

		}

	}

}
