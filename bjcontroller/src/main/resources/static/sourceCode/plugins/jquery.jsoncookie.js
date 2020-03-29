/** 
 * JSON Cookie - jquery.jsoncookie.js
 *
 * Sets and retreives native JavaScript objects as cookies.
 * Depends on the object serialization framework provided by JSON2.
 *
 * Dependencies: jQuery, jQuery Cookie, JSON2
 * 
 * @project JSON Cookie
 * @author Randall Morey
 * @version 0.9
 */
(function ($) {
	var isObject = function (x) {
		return (typeof x === 'object') && !(x instanceof Array) && (x !== null);
	};
	
	$.extend({
		getJSONCookie: function (cookieName) {
			var cookieData = $.cookie(cookieName);
			return cookieData ? JSON.parse(cookieData) : null;
		},
		setJSONCookie: function (cookieName, data, options) {
			options = $.extend({
				expires: 90,
				path: '/'
			}, options);
			return $.cookie(cookieName, data);
		},
		removeJSONCookie: function (cookieName) {
			return $.cookie(cookieName, null);
		},
		JSONCookie: function (cookieName, data, options) {
			if (data) {
				$.setJSONCookie(cookieName, data, options);
			}
			return $.getJSONCookie(cookieName);
		}
	});
})(jQuery);
