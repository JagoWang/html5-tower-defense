/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */


_TD.a.push(function (TD) {

	TD.Stage = function (name) {
		this.name = name;

		this.init();
		TD.stages[this.name] = this;
	};

	TD.Stage.prototype = {
		init: function () {
			var nodes = TD.Dom.getcls("td-stage-" + this.name);

			if (nodes.length == 0) throw "Stage '" + this.name + "'init Error!";
			this.dom_node = nodes[0];
			this.node = new TD.Dom(this.dom_node);
		},

		hide: function () {
			this.node.hide();
		},

		show: function () {
			this.node.show();
		}
	};

});
