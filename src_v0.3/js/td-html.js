/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */

_TD.a.push(function (TD) {

	TD.html = {
		container: [
			{
				"div.td-container": [
					{
						"div.td-cover": [
							{
								"div.td-btns": [
									{
										"a.td-btn td-btn-start td-lang-button_start_text": {
											events: {
												"click": function () {
													alert(1);
												}
											}
										}
									},
									{
										"a.td-btn td-btn-options td-lang-button_options_text": []
									},
									{
										"a.td-btn td-btn-build td-lang-button_build_text": []
									},
									{
										"a.td-btn td-btn-about td-lang-button_about_text": []
									}
								]
							}
						]
					},
					{
						"div.td-options": [
							{
								"a.td-btn td-btn-back td-lang-button_back_text": []
							}
						]
					},
					{
						"div.td-battlefield": [
							{
								"div.td-info-bar": []
							},
							{
								"div.td-main": [
									{
										"div.td-map": []
									}
								]
							},
							{
								"div.td-panel": [
									{
										"div.td-weapons": [],
										"div.td-operations": []
									}
								]
							}
						]

					},
					{
						"div.td-back-cover": []
					}
				]
			}
		]

	};

});
