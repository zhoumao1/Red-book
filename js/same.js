$(function () {
	/**
	 * [AutoTemp temp模板生成]
	 * @param   {[Object]}  tempEle  [传入模板节点]
	 * @param   {[Object]}  data     [传入数据]
	 * @param   {[Object]}  domEle   [传入页面DOM节点]
	 */
	function AutoTemp(tempEle, data, domEle) {
		this.temp = $(tempEle).html();
		this.text = _.template(this.temp);
		this.newData = this.text({data: data});
		$(domEle).html(this.newData);
	}
	var headerData = {
		"header":{
			"logo": "./img/logo.png",
			"nav":[
				{"title": "首页", "link": "index.html"},
				{"title": "社区精选", "link": "index.html"},
				{
					"title": "关于我们",
					"tab": [
						{"link": "/aboutWe.html", "text": "关于我们"},
						{"link": "/media.html", "text": "媒体报道"},
						{"link": "/Contact.html", "text": "联系我们"}
					]
				},
				{"title": "加入我们", "link": "joinUs.html"},
				{"title": "招商合作", "link": "attract.html"},
				{"title": "品牌账号", "link": "brand.html"}
			]
		}
	}
	var tempCont = $('#header-tmp').html();
	var htmlText = _.template(tempCont);
	var NewHtml = htmlText({headerData: headerData});
	$("header").html(NewHtml);
	$('.menu-nav a').eq(2).append($('.about-item'))
	$('.menu-nav a').eq(2).hover(function () {
		$(this).children('div').slideDown()
	}, function () {
		$(this).children('div').slideUp()
	})
	// 底部部分数据
	var footRight = [
		{
			"icon":"",
			"title": "公司相关",
			"tab": ["加入我们", "招商合作", "关于我们"]
		},
		{
			"icon":"",
			"title": "内容相关",
			"tab": ["社区精选", "媒体报道"]
		},
		{
			"icon":"",
			"title": "公司相关",
			"tab": ["注册协议", "隐私协议", "侵权投诉指引", "小红书评价规则"]
		}
	]
	var footBott = [
		[
			"沪ICP备 13030189号 Copyright © 2014-2019 行吟信息科技（上海）有限公司",
			"| 地址：上海市黄浦区马当路388号C座",
			"| 电话：021-64224530",
			" 自营经营者营业执照"
		],
		[
			"沪网文〔2018〕4086-308号 |",
			" 网络文化经营许可证：沪网文[2018]4086-308号 |",
			"增值电信业务经营许可证：沪B2-20150021 |",
			" 食品经营许可证：JY13101140093802 |",
			"出版物经营许可证：新出发沪零字第M7553号"
		],
		[
			"医疗器械经营许可证：沪嘉食药监械经营许20187006号 | ",
			"医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号 | ",
			"互联网药品信息服务资格证书：(沪)-经营性-2018-0011  | ",
			" 违法不良信息举报电话：(027) 5931 3970 |",
			"上海市互联网举报中心"
		]
	]
	console.log(footBott);
	$.each(footBott, function (k ,v) {
		$.each(v, function (k, v) {
			console.log(v);
		})
	})
	var footer = new AutoTemp('#footer-right-tmp', footRight, '.right')
	var footerBottom = new AutoTemp('#footer-bottom-tmp', footBott, '.inner-bottom')
})