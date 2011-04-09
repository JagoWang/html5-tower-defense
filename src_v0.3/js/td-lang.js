/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */


_TD.a.push(function (TD) {

	TD.lang = {

		/**
		 * 判断一个对象是否为 Array
		 * @param obj {Object}
		 */
		isArray: function (obj) {
			return typeof obj == "object" && obj.constructor == Array;
		},

		/**
		 * 去掉字符串首尾的空白字符
		 * @param s {String}
		 */
		trim: function (s) {
			return s.replace(/^\s+|\s+$/g, "");
		},

		/**
		 * 对数组中的每一个元素执行指定操作
		 * @param arr {Array}
		 * @param func {Function}
		 */
		each: function (arr, func) {
			for (var a = [], i = 0, l = arr.length; i < l; i ++) {
				a.push(func(arr[i], i));
			}
			return a;
		},

		/**
		 * 对数组中的每一个元素执行指定操作，并返回第一个 func 值为 true 的元素
		 * @param arr {Array}
		 * @param func {Function}
		 */
		any: function (arr, func) {
			for (var i = 0, l = arr.length; i < l; i ++) {
				if (func(arr[i], i)) return arr[i];
			}
			return null;
		},

		/**
		 * 对数组中每一个元素执行 func，返回一个新数组，包含其中 func 值为 true 的项
		 * @param arr {Array}
		 * @param func {Function}
		 */
		filter: function (arr, func) {
			for (var a = [], i = 0, v, l = arr.length; i < l; i ++) {
				v = arr[i];
				if (func(v, i))
					a.push(v);
			}
			return a;
		}
	};

});
