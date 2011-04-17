/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */

_TD.a.push(function (TD) {

	TD.Game = function (stage, cfg) {

		this.stage = stage;
		this.mode = cfg.mode || "game"; // 模式分为 game / build 两种，表示游戏、建设
	};

	TD.Game.prototype = {

		init: function () {
			this.dom_map = this.stage.getcls("td-map");

			
		}
	};

});
