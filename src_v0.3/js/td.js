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
			stages: {}, // 舞台

			init: function () {

				TD.container = TD.Dom.get(container);
				if (!TD.container) return;

				// TODO 判断当前浏览器是否支持 canvas

				TD.Dom.parse(TD.container, TD.html.container);

				var i,
					stage_names = [
						"home",
						"options",
						"announcement",
						"battlefield",
						"build",
						"about"
					];
				for (i = 0; i < stage_names.length; i ++) {
					new TD.Stage(stage_names[i]);
				}

				TD.updateLanguage(TD.current_language);
			}
		};

		while (_TD.a[0]) {
			_TD.a.shift()(TD);
		}
		TD.init();
	}
}
	;