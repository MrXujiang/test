/*
 * 这样写法的好处
 * 一：代码压缩时window,document参数可以写成w,d之类，如果访问到全局变量则不能压缩
 * 二：性能优化，把全局变量传入函数，在函数内就有了window和docment的局部变量，每次访问在函数内可以找到，就不用再去全局找
 * 
 */

(function (window, document) {
	var $header = function(option){ 
          this.menu = (typeof option.menu === "string") ? document.getElementById(option.menu) : option.name;
          this.toggle = (typeof option.toggle === "string") ? document.getElementById(option.toggle) : option.toggle;
          this.WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';
	}
    $header.prototype = {
    	init: function(){
    		this.bindEvent();
    	},
    	toggleHorizontal: function(){
    		var _this = this;
    		[].forEach.call(
              _this.menu.querySelectorAll('.js-can-transform'),
              function(el){
                  el.classList.toggle('horizontal');
              }
          	);
    	},
    	toggleMenu: function(){
    		var _this = this;
    		if (menu.classList.contains('open')) {
              setTimeout(_this.toggleHorizontal, 500);
          }
          else {
              _this.toggleHorizontal();
          }
          this.menu.classList.toggle('open');
          this.toggle.classList.toggle('x');
    	},
    	closeMenu: function(){
    		if (this.menu.classList.contains('open')) {
              this.toggleMenu();
            }
    	},
    	bindEvent: function(){
    		var _this = this;
    		this.toggle.addEventListener('click', function (e) {
		          _this.toggleMenu();
		          e.preventDefault();
		    });
		    window.addEventListener(_this.WINDOW_CHANGE_EVENT, _this.closeMenu);
    	}
    }
    var header = function(option){
    	return new $header(option);
    };
    header({
    	menu: "menu",
    	toggle: "toggle"
    });
})(this, this.document);