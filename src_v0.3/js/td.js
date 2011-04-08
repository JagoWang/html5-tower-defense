/**
 *
 * Author: oldj, <oldj.wu@gmail.com>
 */


var _TD = {

	a: [],

	/**
	 * 初始化
	 * @param container {HTML Object}
	 * @param is_debug {Boolean}
	 * @param mode {Number} 模式
	 * 		0: 建筑模式;
	 * 		1: 游戏模式;
	 */
	init: function (container, is_debug, mode) {
		delete this.init; // 一旦初始化运行，即删除这个入口引用，防止初始化方法被再次调用

		var i,
			TD = {
				version: "0.3.0.0", // 版本命名规范参考：http://semver.org/
				is_debug: !!is_debug,
				mode: mode || 0,

				init: function () {

				}
			}
	}
};