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
						"div.td-stage-home": [
							{
								"div.td-btns": [
									{
										"a.td-btn td-btn-start td-lang-button_start_text": {
											events: {
												"click": function () {
													TD.action.slide("battlefield");
												}
											}
										}
									},
									{
										"a.td-btn td-btn-options td-lang-button_options_text": {
											events: {
												"click": function () {
													TD.action.slide("options");
												}
											}
										}
									},
									{
										"a.td-btn td-btn-build td-lang-button_build_text": {
											events: {
												"click": function () {
													TD.action.slide("build");
												}
											}
										}
									},
									{
										"a.td-btn td-btn-about td-lang-button_about_text": {
											events: {
												"click": function () {
													TD.action.slide("about");
												}
											}
										}
									}
								]
							}
						]
					},
					{
						"div.td-stage-options": [
							{
								"a.td-btn td-btn-back td-lang-button_back_text": {
									"events": {
										"click": function () {
											TD.action.slide("home");
										}
									}
								}
							}
						]
					},
					{
						"div.td-stage-announcement": [
							{
								"div.td-show-stage-info": []
							}
						]
					},
					{
						"div.td-stage-battlefield": [
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
						"div.td-stage-build": [
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
						"div.td-stage-about": [
							{
								"a.td-btn td-btn-back td-lang-button_back_text": {
									"events": {
										"click": function () {
											TD.action.slide("home");
										}
									}
								}
							}
						]
					}
				]
			}
		]

	};

});
