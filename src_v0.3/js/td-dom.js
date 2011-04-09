/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 * 与 DOM 操作有关的方法
 */


_TD.a.push(function (TD) {

	TD.Dom = function (obj) {
		this.dom_node = obj;
	};

	TD.Dom.prototype = {

		hasClass: function (cls) {
			var c = " " + this.dom_node.className + " ";

			return c.indexOf(" " + cls + " ") >= 0;
		},

		addClass: function (cls) {
			var a = this.dom_node.className.split(" "),
				i, l = a.length,
				o = {};

			for (i = 0; i < l; i ++)
				o[TD.lang.trim(a[i])] = 1;

			o[TD.lang.trim(cls)] = 1;

			a = [];
			for (i in o)
				a.push(i);

			this.dom_node.className = a.join(" ");
		},

		removeClass: function (cls) {
			if (!this.hasClass(cls)) return;

			var c = " " + this.dom_node.className + " ";

			c = c.replace(" " + cls + " ", "");
			this.dom_node.className = TD.lang.trim(c);
		},

		addEventListener: function (event_type, callback, flag) {
			var atta = !!document.attachEvent;

			this.dom_node[atta ? "attachEvent" : "addEventListener"](
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

		hide: function () {
			this.addClass("td-hidden");
		},

		show: function () {
			this.removeClass("td-hidden");
		}

	};


	TD.Dom.get = function (id) {
		return document.getElementById(id);
	};

	TD.Dom.getcls = function (parent, cls) {
		if (!cls) {
			cls = parent;
			parent = TD.container;
		}

		return parent.getElementsByClassName(cls);
	};


	/**
	 *
	 * @param parent {HTMLElement}
	 * @param html_obj {Object}
	 */
	TD.Dom.parse = function (parent, html_obj) {

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

				TD.Dom.parse(o2, o[k]);
				parent.appendChild(o2);
			}
		}

		if (html_obj.events) {
			for (k in html_obj.events) {
				(new TD.Dom(parent)).addEventListener(k, html_obj.events[k], false);
			}
		}

	};

});
