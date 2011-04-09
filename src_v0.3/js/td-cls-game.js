/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */

_TD.a.push(function (TD) {

	TD.Game = function (parent, cfg) {

		this.parent = parent;
		this.mode = cfg.mode || "game"; // 模式分为 game / build 两种，表示游戏、建设
	};

	TD.Game.prototype = {

		init: function () {

		}
	};

});
