/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */


_TD.a.push(function (TD) {

	TD.action = {

		/**
		 * 切换场景
		 * @param stage {String}
		 */
		slide: function (stage) {
			for (var k in TD.stages) {
				if (k == stage)
					TD.stages[k].show();
				else
					TD.stages[k].hide();
			}
		}

	};

});
