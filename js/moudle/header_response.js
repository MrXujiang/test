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
		    window.addEventListener(this.WINDOW_CHANGE_EVENT, this.closeMenu);
    	}
    }
    var header = function(option){
    	return new $header(option)
    };