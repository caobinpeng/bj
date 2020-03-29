/*******************************************************************************
 * 
 * Function name : HebcaP11XObject
 * 
 * Description : ����HebcaP11X�ؼ�����
 * 
 * Input : strP11xName ֤������������, Ŀǰ�̶�Ϊ "HebcaP11X.CertMgr"
 * 
 * Return : ����֤��������ʵ��
 * 
 * Caution : ���ýӿ�ע������
 * 
 * 1. �ýӿ���һ��ҳ����ֻ�������һ��
 * 
 * 2. ҳ������Ҫ<body>��ǩ
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

		// IE ������������

		try {

			certMgr = new ActiveXObject("HebcaP11X.CertMgr");

		}

		catch (e) {

			throw Error("û�а�װ�ͻ��������IE��ֹ������.");

		}

	}

	else // ��IE���������ʹ��embed��ʽ���ز��

	{

		var hebcaMimeType = "application/hebca-np11x-plugin";

		if (!(navigator.mimeTypes && navigator.mimeTypes[hebcaMimeType] && navigator.mimeTypes

		[hebcaMimeType].enabledPlugin))

		{

			throw Error("�����Ƿ�װ�ӱ�CA����֤���������ͻ��˻����������!��װ�����ú����´���������ԣ�");

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

			// ����Ƿ�װ�ɹ�, �����������ֹ, ���׳��쳣.

			certMgr.CheckBlockedByBrowser();

		}

		catch (e)

		{

			throw Error("���δ��װ���������ֹ.");

			return null;

		}

		// �������֤�������Ƿ�װ

		var bIsP11 = certMgr.CheckP11XInstalled();

		if (false == bIsP11)

		{

			throw Error("����֤������δ��װ.");

			return null;

		}

	}

	return certMgr;

}

/*******************************************************************************
 * 
 * Function name : HebcaP11XLastError
 * 
 * Description : ����P11X�׳����쳣��Ϣ
 * 
 * Input : p11xObj P11X֤���������
 * 
 * err �쳣��Ϣ
 * 
 * Return : ��
 * 
 * Caution : ��ʹ�øýӿ�ת���쳣��Ϣ
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

		return err.message; // IE�����ֱ�ӷ����쳣����

	}

	else

	{

		if ("TypeError" == err.name)

		{

			/*
			 * �����������쳣ʱ, ͨ�������ڵ����˲�֧�ֵ����Ի��߷���, ����������׳����쳣��Ϣ
			 * 
			 */

			return err.message;

		}

		else

		{

			/* ���ز��ת���Ĵ�����Ϣ */

			return p11xObj.GetLastErr();

		}

	}

}
