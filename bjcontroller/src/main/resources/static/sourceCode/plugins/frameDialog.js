/**
 * 带有iframe的dialog
 * 
 * 
 * options参数说明：
 * src：dialog内部iframe的地址(src)
 * 		默认为null
 * id：dialog的ID
 * 		默认为dialog-frame
 * name：dialog的name属性
 * 		默认为dialog-frame
 * onload：dialog内置页面加载时执行的方法
 * 		默认为$.noop
 * title：dialog的标题
 * 		默认为""
 * titleCloseIcon：是否显示dialog默认的右上角关闭按钮（建议不显示）
 * 		默认为false
 * dialog：jquery-UI的dialog原生属性，参数与其一致。
 * 		默认为{
        		autoOpen : false,
        		draggable : false,
        		modal : true,
        		resizable : false
        	}
 * 
 * 
 * @author hua(ta0189)
 */
(function( $, undefined ) {

    $.widget( "ui.frameDialog", {
        version : "@VERSION",
        options : {
        	src : null,
        	id : "dialog-frame",
        	name : "dialog-frame",
        	onload : $.noop,
        	title : "",
        	titleCloseIcon : false,
        	dialog : {
        		autoOpen : false,
        		draggable : false,
        		modal : true,
        		resizable : false
        	}
        },
        _create : function() {
            var self = this, $this = this.element;
            $this.dialog($.extend({},
            		{
            			title:self.options.title
            		},
            		{
				    	close: function( event, ui ) {
				    		$this.find("iframe").remove();
				    	}
				    },
				    {
				    	buttons : {
				    		"取消":function(){
				    			$this.dialog("close");
		        			}
				    	}
				    },
				    self.options.dialog)
            );
            
            //右上角关闭按钮
            !self.options.titleCloseIcon && $this.parent().find(".ui-dialog-titlebar-close").remove();
        },
        _init : function(){
        	var self = this, $this = this.element;
        	//打开dialog
        	$this.dialog("option", { 
        		title: self.options.title,
        		width: self.options.dialog.width,
        		height: self.options.dialog.height,
        		buttons: self.options.dialog.buttons
        		}); // 设置参数
            $this.dialog( 'open' ).append( 
	            $('<iframe frameborder="0" width="100%" height="100%" '
	                  + 'style="margin: 0; padding: 0; border: 0; outline: 0"/>' )
	                  .attr({"id":self.options.id,"name":self.options.name,"src":self.options.src})
	                  .load( function() {
	                      $.isFunction(self.options.onload) && self.options.onload.apply( self, arguments );
	                  })
            );
        },
        widget: function(){
        	return this.element;
        },
        _destroy : function() {
        	this.widget().dialog("destroy");
        	this.widget().remove();
        }
    } )
})( jQuery );
