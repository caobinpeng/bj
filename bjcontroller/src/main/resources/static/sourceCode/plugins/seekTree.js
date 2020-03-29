//通过输入关键字搜索
function searchTreeNodeByKeyWord(treeObj, showNodes, treeNodeName) {
	showHiddenNode(treeObj);
	var nodes = treeObj.getNodes();
	for(var m=0; m<nodes.length; m++) {
		var flag = false;
		for(var x=0; x<showNodes.length; x++) {
			if(nodes[m].id == showNodes[x].id) {
				flag = true;
			}
		}
		if(!flag) {
			treeObj.hideNode(nodes[m]);
			treeObj.hideNodes(nodes[m].children);
		}
	}
	for(var i=0; i<showNodes.length; i++) {
		if(!showParentNode(treeObj, showNodes[i], treeNodeName)){//递归显示搜索关键字节点的父节点
			return;
		}
		zTreeHideNode(treeObj, showNodes[i]); //根据当前节点隐藏父节点下的所有节点
	}
	//显示关键字搜索的当前节点;
	for(var j=0; j<showNodes.length; j++) {
		treeObj.showNode(showNodes[j]);
	}
}

//递归显示父节点
function showParentNode(treeObj, showNode, treeNodeName) {
	if(showNode.getParentNode() == null) {
		return false;
	}else {
		var node = showNode.getParentNode();
		treeObj.showNode(node);
		hideNodeMethod(treeObj, node, treeNodeName); //隐藏没有关键字的父节点 
		showParentNode(treeObj, node, treeNodeName);
		return true;
	}
}

//隐藏没有关键字的父节点 
function hideNodeMethod(treeObj, node, treeNodeName) {
	var nodeChild = node.children;
	for(var i=0; i<nodeChild.length; i++) {
		if(nodeChild[i].name.indexOf(treeNodeName) == -1) {
			if(nodeChild[i].children != undefined) {
				var hiddenNode = treeObj.getNodesByParamFuzzy("name", treeNodeName, nodeChild[i]);
				if(hiddenNode.length == 0) {
					treeObj.hideNode(nodeChild[i]);
				}else {
					//隐藏父节点中特殊的节点
					var specialNode = nodeChild[i].children;
					hideSpecialNode(treeObj, specialNode, treeNodeName);
				}
			}
		}
	}
}

//隐藏父节点中特殊的节点
function hideSpecialNode(treeObj, specialNode, treeNodeName) {
	for(var i=0; i<specialNode.length; i++) {
		if(specialNode[i].children == undefined) {
			if(specialNode[i].name.indexOf(treeNodeName) == -1) {
				treeObj.hideNode(specialNode[i]);
			}
		}
	}
}

//根据当前节点隐藏父节点下的所有节点
function zTreeHideNode(treeObj, showNode) {
	var node = showNode.getParentNode();
	treeObj.hideNodes(node.children);
}

//将已经隐藏的节点显示出来
function showHiddenNode(treeObj) {
 	var showHiddenNodes = treeObj.getNodesByParam("isHidden", true); 
	treeObj.showNodes(showHiddenNodes);
}


//当输入的关键字或者标签查询内容为空时，提示用户重新输入
function validContent(showNodes) {
	if(showNodes.length == 0) {
		alert("对不起！未找到符合条件的结果！");
		return false;
	}else {
		return true;
	}
}

function validInputName(inputName) {
	if(inputName == "请输入关键字") {
		return false;
	}else {
		return true;
	}
}
	
	