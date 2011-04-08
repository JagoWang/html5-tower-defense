/**
 *
 * Author: oldj, <oldj.wu@gmail.com>
 */


var _TD = {

	a: [],

	/**
	 * 初始化
	 * @param container {String} 主容器元素 id
	 * @param is_debug {Boolean}
	 */
	init: function (container, is_debug) {
		delete this.init; // 一旦初始化运行，即删除这个入口引用，防止初始化方法被再次调用

		var TD = {
				version: "0.3.0.0", // 版本命名规范参考：http://semver.org/
				is_debug: !!is_debug,
				current_language: "cn", // 当前语言

				init: function () {

					TD.container = TD.lang.dom.ge(container);
					if (!TD.container) return;

					TD.lang.dom.parse(TD.container, TD.html.container);

					TD.updateLanguage(TD.current_language);
				}
			};

		while (_TD.a[0]) {
			_TD.a.shift()(TD);
		}
		TD.init();
	}
};