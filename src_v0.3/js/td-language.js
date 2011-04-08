/**
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 */

_TD.a.push(function (TD) {

	TD.language = {
		"en": {
			"_cant_build": "Can't build here!",
			"_cant_pass": "Can't pass!",
			"entrance": "Entrance",
			"exit": "Exit",
			"not_enough_money": "Not enough money, need $${0}.",
			"wave_info": "Wave ${0}",
			"panel_money_title": "Money: ",
			"panel_score_title": "Score: ",
			"panel_life_title": "Life: ",
			"panel_building_title": "Buildings: ",
			"panel_monster_title": "Monsters: ",
			"building_name_roadblock": "Roadblock",
			"building_name_cannon": "Cannon",
			"building_name_LMG": "Light Machine Gun",
			"building_name_HMG": "Heavy Machine Gun",
			"building_name_laser_gun": "Laser Gun",
			"building_info": "${0}: Level ${1}, Damage ${2}, Speed ${3}, Range ${4}, Kill ${5}",
			"building_info_roadblock": "${0}",
			"building_intro_roadblock": "Roadblock obstruct the passage of a monster ($${0})",
			"building_intro_cannon": "Cannon 射程、杀伤力较为平衡 ($${0})",
			"building_intro_LMG": "LMG 射程较远，杀伤力一般 ($${0})",
			"building_intro_HMG": "HMG 快速射击，威力较大，射程一般 ($${0})",
			"building_intro_laser_gun": "Laser Gun 伤害较大，命中率 100% ($${0})",
			"click_to_build": "Click to build ${0} ($${1})",
			"upgrade": "Upgrade ${0} to level ${1} , cost $${2}.",
			"sell": "出售 ${0}，可获得 $${1}",
			"upgrade_success": "升级成功，${0} 已升级到 ${1} 级！下次升级需要 $${2}。",
			"monster_info": "Monster: Life ${0}, Defense ${1}, Speed ${2}, Damage ${3}",
			"button_upgrade_text": "Upgrade",
			"button_sell_text": "Sell",
			"button_start_text": "Start",
			"button_options_text": "Options",
			"button_build_text": "自定义地图",
			"button_about_text": "About",
			"button_restart_text": "Restart",
			"button_pause_text": "Pause",
			"button_back_text": "Back",
			"button_continue_text": "Continue",
			"button_pause_desc_0": "Pause the game",
			"button_pause_desc_1": "Resume the game",
			"blocked": "不能在这儿修建建筑，起点与终点之间至少要有一条路可到达！",
			"monster_be_blocked": "不能在这儿修建建筑，有怪物被围起来了！",
			"entrance_or_exit_be_blocked": "不能在起点或终点处修建建筑！",
			"_": "ERROR"
		},
		"cn": {
			"_cant_build": "不能在这儿修建",
			"_cant_pass": "怪物不能通过这儿",
			"entrance": "起点",
			"exit": "终点",
			"not_enough_money": "金钱不足，需要 $${0}！",
			"wave_info": "第 ${0} 波",
			"panel_money_title": "金钱: ",
			"panel_score_title": "积分: ",
			"panel_life_title": "生命: ",
			"panel_building_title": "建筑: ",
			"panel_monster_title": "怪物: ",
			"building_name_block": "路障",
			"building_name_cannon": "炮台",
			"building_name_LMG": "轻机枪",
			"building_name_HMG": "重机枪",
			"building_name_laser_gun": "激光炮",
			"building_info": "${0}: 等级 ${1}，攻击 ${2}，速度 ${3}，射程 ${4}，战绩 ${5}",
			"building_info_wall": "${0}",
			"building_intro_wall": "路障 可以阻止怪物通过 ($${0})",
			"building_intro_cannon": "炮台 射程、杀伤力较为平衡 ($${0})",
			"building_intro_LMG": "轻机枪 射程较远，杀伤力一般 ($${0})",
			"building_intro_HMG": "重机枪 快速射击，威力较大，射程一般 ($${0})",
			"building_intro_laser_gun": "激光枪 伤害较大，命中率 100% ($${0})",
			"click_to_build": "左键点击建造 ${0} ($${1})",
			"upgrade": "升级 ${0} 到 ${1} 级，需花费 $${2}。",
			"sell": "出售 ${0}，可获得 $${1}",
			"upgrade_success": "升级成功，${0} 已升级到 ${1} 级！下次升级需要 $${2}。",
			"monster_info": "怪物: 生命 ${0}，防御 ${1}，速度 ${2}，伤害 ${3}",
			"button_upgrade_text": "升级",
			"button_sell_text": "出售",
			"button_start_text": "开始",
			"button_options_text": "选项",
			"button_build_text": "自定义地图",
			"button_about_text": "关于",
			"button_restart_text": "重新开始",
			"button_pause_text": "暂停",
			"button_back_text": "返回",
			"button_continue_text": "继续",
			"button_pause_desc_0": "游戏暂停",
			"button_pause_desc_1": "游戏继续",
			"blocked": "不能在这儿修建建筑，起点与终点之间至少要有一条路可到达！",
			"monster_be_blocked": "不能在这儿修建建筑，有怪物被围起来了！",
			"entrance_or_exit_be_blocked": "不能在起点或终点处修建建筑！",
			"_": "ERROR"
		}
	};


	TD.t = TD.translate = function (k, args) {
		args = TD.lang.isArray(args) ? args : [];
		var lan = TD.language[TD.current_language],
			msg = lan[k] || lan["_"],
			i,
			l = args.length;

		for (i = 0; i < l; i ++) {
			msg = msg.replace("${" + i + "}", args[i]);
		}

		return msg;
	};


	/**
	 * 更新页面上的语言
	 */
	TD.updateLanguage = function (lang) {
		TD.current_language = lang;
		var k, s, lan = TD.language[lang],
			node, nodes, i, l;

		for (k in lan) {
			s = "td-lang-" + k;
			nodes = TD.container.getElementsByClassName(s);
			for (i = 0, l = nodes.length; i < l; i ++) {
				node = nodes[i];
				node.innerHTML = TD.t(k);
			}
		}
	};

});

