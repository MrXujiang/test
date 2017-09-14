require.config({
	paths: {
		"jquery": "lib/jquery-3.2.1",
		"unslider": "lib/unslider.min",
		"ZoomPic": "moudle/zoompic",
		"header_response": "moudle/header_response"
	},
	urlArgs: "_=" + new Date().getTime(),
	shim: {
		"unslider": {
			deps: ["jquery"],
			exports: "unslider"
		},
		"header_response": {
			// 此处的接口名要与reqire中执行函数的对应参数一致，且不能有“-”
			exports: "header"
		}
	}
});

require(["jquery","header_response","unslider","ZoomPic"],function($,header,unslider,ZoomPic){
	$(document).ready(function(e) {
		// 响应式头部
		header({
	    	menu: "menu",
	    	toggle: "toggle"
	    }).init();
	    
		// 首页轮播图
	    var unslider = $('#banner').unslider({
			dots: true
		}),
		data = unslider.data('unslider');
		$('.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];
	        data[fn]();
	    });
	    
	    // 首页简众3D轮播图  存在待解决bug
	    new ZoomPic("jswbox");
	});
})
