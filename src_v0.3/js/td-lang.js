/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */


_TD.a.push(function (TD) {

	TD.lang = {

		// 与 dom 操作相关的方法
		dom: {
			ge: function (id) {
				return document.getElementById(id);
			},

			addEventListener: function (obj, event_type, callback, flag) {
				var atta = !!document.attachEvent;

				obj[atta ? "attachEvent" : "addEventListener"](
					(atta ? "on" : "") + event_type,
					function (e) {
						e = e || window.event;
						var el = e.target || e.srcElement;
						if (el)
							callback.call(el, e);
					},
					!!flag
				);
			},

			/**
			 *
			 * @param parent {HTMLElement}
			 * @param html_obj {Object}
			 */
			parse: function (parent, html_obj) {

				var i, l, k, o, a, o2,
					tag, cls,
					arr = TD.lang.isArray(html_obj) ? html_obj : html_obj.children || [];

				for (i = 0, l = arr.length; i < l; i ++) {
					o = arr[i];
					for (k in o) {
						a = k.split(".");
						tag = a[0];
						cls = a[1];

						o2 = document.createElement(tag);
						o2.className = cls;
						if (tag == "a") o2.href = "#";

						TD.lang.dom.parse(o2, o[k]);
						parent.appendChild(o2);
					}
				}

				if (html_obj.events) {
					for (k in html_obj.events) {
						TD.lang.dom.addEventListener(parent, k, html_obj.events[k], false);
					}
				}
			}
		},

		/**
		 * 判断一个对象是否为 Array
		 * @param obj {Object}
		 */
		isArray: function (obj) {
			return typeof obj == "object" && obj.constructor == Array;
		}
	};

});
