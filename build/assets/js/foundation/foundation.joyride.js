!function(t,s,i,e){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.0",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(s,i,e){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||t.extend({},this.defaults,e||i),this.bindings(i,e)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var i=this;t(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(t){t.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(t){if(this.settings.keyboard&&this.settings.riding)switch(t.which){case 39:t.preventDefault(),this.go_next();break;case 37:t.preventDefault(),this.go_prev();break;case 27:t.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),t(s).off(".joyride").on("resize.fndtn.joyride",i.throttle(function(){if(t("["+i.attr_name()+"]").length>0&&i.settings.$next_tip&&i.settings.riding){if(i.settings.exposed.length>0){var s=t(i.settings.exposed);s.each(function(){var s=t(this);i.un_expose(s),i.expose(s)})}i.is_phone()?i.pos_phone():i.pos_default(!1)}},100))},start:function(){var s=this,i=t("["+this.attr_name()+"]",this.scope),e=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],n=e.length;!i.length>0||(this.settings.init||this.events(),this.settings=i.data(this.attr_name(!0)+"-init"),this.settings.$content_el=i,this.settings.$body=t(this.settings.tip_container),this.settings.body_offset=t(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof t.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!t.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(i){var o=t(this);this.settings=t.extend({},s.defaults,s.data_options(o));for(var h=n;h--;)s.settings[e[h]]=parseInt(s.settings[e[h]],10);s.create({$li:o,index:i})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(s){var i,e;return s.tip_class=s.tip_class||"",i=t(this.settings.template.tip).addClass(s.tip_class),e=t.trim(t(s.li).html())+this.prev_button_text(s.prev_button_text,s.index)+this.button_text(s.button_text)+this.settings.template.link+this.timer_instance(s.index),i.append(t(this.settings.template.wrapper)),i.first().attr(this.add_namespace("data-index"),s.index),t(".joyride-content-wrapper",i).append(e),i[0]},timer_instance:function(s){var i;return i=0===s&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":t(this.settings.template.timer)[0].outerHTML},button_text:function(s){return this.settings.tip_settings.next_button?(s=t.trim(s)||"Next",s=t(this.settings.template.button).append(s)[0].outerHTML):s="",s},prev_button_text:function(s,i){return this.settings.tip_settings.prev_button?(s=t.trim(s)||"Previous",s=0==i?t(this.settings.template.prev_button).append(s).addClass("disabled")[0].outerHTML:t(this.settings.template.prev_button).append(s)[0].outerHTML):s="",s},create:function(s){this.settings.tip_settings=t.extend({},this.settings,this.data_options(s.$li));var i=s.$li.attr(this.add_namespace("data-button"))||s.$li.attr(this.add_namespace("data-text")),e=s.$li.attr(this.add_namespace("data-button-prev"))||s.$li.attr(this.add_namespace("data-prev-text")),n=s.$li.attr("class"),o=t(this.tip_template({tip_class:n,index:s.index,button_text:i,prev_button_text:e,li:s.$li}));t(this.settings.tip_container).append(o)},show:function(s,i){var n=null;if(this.settings.$li===e||-1===t.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(s,i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(s&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=t.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)){var o=t(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?o.hide():o.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(s,i):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t,s){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=s?this.settings.$li.prev():this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var s=this.settings.$li.attr(this.add_namespace("data-class")),e=this.settings.$li.attr(this.add_namespace("data-id")),n=function(){return e?t(i.getElementById(e)):s?t("."+s).first():t("body")};this.settings.$target=n()},scroll_to:function(){var i,e;i=t(s).height()/2,e=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),0!=e&&t("html, body").stop().animate({scrollTop:e},this.settings.scroll_speed,"swing")},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=e,this.show("init")},pos_default:function(t){var s=this.settings.$next_tip.find(".joyride-nub"),i=Math.ceil(s.outerWidth()/2),e=Math.ceil(s.outerHeight()/2),n=t||!1;if(n&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(s);else{var o=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,h=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+e+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+h}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+e+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+h}),this.nub_position(s,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-e+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-e+o,left:this.settings.$target.offset().left+h}),this.nub_position(s,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+i+h}),this.nub_position(s,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-i+h}),this.nub_position(s,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}n&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(s){var i=this.settings.$next_tip.outerHeight(),e=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),n=t(".joyride-nub",this.settings.$next_tip),o=Math.ceil(n.outerHeight()/2),h=s||!1;n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),h&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(n):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-i-o}),n.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+e+o}),n.addClass("top")),h&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var s=t(".joyride-modal-bg");if(s.length<1){var s=t(this.settings.template.modal);s.appendTo("body")}/pop/i.test(this.settings.tip_animation)?s.show():s.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var i,e,n,o,h,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof t)n=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;n=this.settings.$target}return n.length<1?(s.console&&console.error("element not valid",n),!1):(i=t(this.settings.template.expose),this.settings.$body.append(i),i.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),e=t(this.settings.template.expose_cover),o={zIndex:n.css("z-index"),position:n.css("position")},h=null==n.attr("class")?"":n.attr("class"),n.css("z-index",parseInt(i.css("z-index"))+1),"static"==o.position&&n.css("position","relative"),n.data("expose-css",o),n.data("orig-class",h),n.attr("class",h+" "+this.settings.expose_add_class),e.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(e),i.addClass(a),e.addClass(a),n.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,n),this.add_exposed(n),void 0)},un_expose:function(){var i,e,n,o,h,a=!1;if(arguments.length>0&&arguments[0]instanceof t)e=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;e=this.settings.$target}return e.length<1?(s.console&&console.error("element not valid",e),!1):(i=e.data("expose"),n=t("."+i),arguments.length>1&&(a=arguments[1]),a===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():n.remove(),o=e.data("expose-css"),"auto"==o.zIndex?e.css("z-index",""):e.css("z-index",o.zIndex),o.position!=e.css("position")&&("static"==o.position?e.css("position",""):e.css("position",o.position)),h=e.data("orig-class"),e.attr("class",h),e.removeData("orig-classes"),e.removeData("expose"),e.removeData("expose-z-index"),this.remove_exposed(e),void 0)},add_exposed:function(s){this.settings.exposed=this.settings.exposed||[],s instanceof t||"object"==typeof s?this.settings.exposed.push(s[0]):"string"==typeof s&&this.settings.exposed.push(s)},remove_exposed:function(s){var i,e;for(s instanceof t?i=s[0]:"string"==typeof s&&(i=s),this.settings.exposed=this.settings.exposed||[],e=this.settings.exposed.length;e--;)if(this.settings.exposed[e]==i)return this.settings.exposed.splice(e,1),void 0},center:function(){var i=t(s);return this.settings.$next_tip.css({top:(i.height()-this.settings.$next_tip.outerHeight())/2+i.scrollTop(),left:(i.width()-this.settings.$next_tip.outerWidth())/2+i.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(i){var e=t(s),n=e.height()/2,o=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),h=e.width()+e.scrollLeft(),a=e.height()+o,r=e.height()+e.scrollTop(),p=e.scrollTop();return p>o&&(p=0>o?0:o),a>r&&(r=a),[i.offset().top<p,h<i.offset().left+i.outerWidth(),r<i.offset().top+i.outerHeight(),e.scrollLeft()>i.offset().left]},visible:function(t){for(var s=t.length;s--;)if(t[s])return!1;return!0},nub_position:function(t,s,i){"auto"===s?t.addClass(i):t.addClass(s)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(s){this.settings.cookie_monster&&t.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),t(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof s||s===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),t(".joyride-tip-guide").remove()},off:function(){t(this.scope).off(".joyride"),t(s).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document);