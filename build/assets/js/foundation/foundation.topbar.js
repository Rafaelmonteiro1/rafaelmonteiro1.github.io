!function(t,a,e){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.0",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(a,e,s){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(e,s),i.S("["+this.attr_name()+"]",this.scope).each(function(){{var a=t(this),e=a.data(i.attr_name(!0)+"-init");i.S("section, .top-bar-section",this)}a.data("index",0);var s=a.parent();s.hasClass("fixed")||i.is_sticky(a,s,e)?(i.settings.sticky_class=e.sticky_class,i.settings.sticky_topbar=a,a.data("height",s.outerHeight()),a.data("stickyoffset",s.offset().top)):a.data("height",a.outerHeight()),e.assembled||i.assemble(a),e.is_hover?i.S(".has-dropdown",a).addClass("not-click"):i.S(".has-dropdown",a).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+a.data("height")+"px }"),s.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,a,e){var s=a.hasClass(e.sticky_class);return s&&"all"===e.sticky_on?!0:s&&this.small()&&"small"===e.sticky_on?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:s&&this.medium()&&"medium"===e.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:s&&this.large()&&"large"===e.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(e){var s,i=this;s=e?i.S(e).closest("["+this.attr_name()+"]"):i.S("["+this.attr_name()+"]");var n=s.data(this.attr_name(!0)+"-init"),o=i.S("section, .top-bar-section",s);i.breakpoint()&&(i.rtl?(o.css({right:"0%"}),t(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),t(">.name",o).css({left:"100%"})),i.S("li.moved",o).removeClass("moved"),s.data("index",0),s.toggleClass("expanded").css("height","")),n.scrolltop?s.hasClass("expanded")?s.parent().hasClass("fixed")&&(n.scrolltop?(s.parent().removeClass("fixed"),s.addClass("fixed"),i.S("body").removeClass("f-topbar-fixed"),a.scrollTo(0,0)):s.parent().removeClass("expanded")):s.hasClass("fixed")&&(s.parent().addClass("fixed"),s.removeClass("fixed"),i.S("body").addClass("f-topbar-fixed")):(i.is_sticky(s,s.parent(),n)&&s.parent().addClass("fixed"),s.parent().hasClass("fixed")&&(s.hasClass("expanded")?(s.addClass("fixed"),s.parent().addClass("expanded"),i.S("body").addClass("f-topbar-fixed")):(s.removeClass("fixed"),s.parent().removeClass("expanded"),i.update_sticky_positioning())))},timer:null,events:function(){var e=this,s=this.S;s(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),e.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var a=t(this).closest("li");!e.breakpoint()||a.hasClass("back")||a.hasClass("has-dropdown")||e.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(a){var i=s(this),n=s(a.target),o=i.closest("["+e.attr_name()+"]"),d=o.data(e.attr_name(!0)+"-init");return n.data("revealId")?(e.toggle(),void 0):(e.breakpoint()||(!d.is_hover||Modernizr.touch)&&(a.stopImmediatePropagation(),i.hasClass("hover")?(i.removeClass("hover").find("li").removeClass("hover"),i.parents("li.hover").removeClass("hover")):(i.addClass("hover"),t(i).siblings().removeClass("hover"),"A"===n[0].nodeName&&n.parent().hasClass("has-dropdown")&&a.preventDefault())),void 0)}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(e.breakpoint()){t.preventDefault();var a=s(this),i=a.closest("["+e.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=(a.next(".dropdown").outerHeight(),a.closest("li"));i.data("index",i.data("index")+1),o.addClass("moved"),e.rtl?(n.css({right:-(100*i.data("index"))+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-(100*i.data("index"))+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",a.siblings("ul").outerHeight(!0)+i.data("height"))}}),s(a).off(".topbar").on("resize.fndtn.topbar",e.throttle(function(){e.resize.call(e)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){s(this).trigger("resize.fndtn.topbar")}),s("body").off(".topbar").on("click.fndtn.topbar",function(t){var a=s(t.target).closest("li").closest("li.hover");a.length>0||s("["+e.attr_name()+"] li.hover").removeClass("hover")}),s(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var a=s(this),i=a.closest("["+e.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=(i.data(e.attr_name(!0)+"-init"),a.closest("li.moved")),d=o.parent();i.data("index",i.data("index")-1),e.rtl?(n.css({right:-(100*i.data("index"))+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-(100*i.data("index"))+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",d.outerHeight(!0)+i.data("height")),setTimeout(function(){o.removeClass("moved")},300)}),s(this.scope).find(".dropdown a").focus(function(){t(this).parents(".has-dropdown").addClass("hover")}).blur(function(){t(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var a,s=t.S(this),i=s.data(t.attr_name(!0)+"-init"),n=s.parent("."+t.settings.sticky_class);if(!t.breakpoint()){var o=s.hasClass("expanded");s.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&t.toggle(s)}t.is_sticky(s,n,i)&&(n.hasClass("fixed")?(n.removeClass("fixed"),a=n.offset().top,t.S(e.body).hasClass("f-topbar-fixed")&&(a-=s.data("height")),s.data("stickyoffset",a),n.addClass("fixed")):(a=n.offset().top,s.data("stickyoffset",a)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(a){var e=this,s=a.data(this.attr_name(!0)+"-init"),i=e.S("section, .top-bar-section",a);i.detach(),e.S(".has-dropdown>a",i).each(function(){var a,i=e.S(this),n=i.siblings(".dropdown"),o=i.attr("href");n.find(".title.back").length||(a=1==s.mobile_show_parent_link&&o?t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small-only"><a class="parent-link js-generated" href="'+o+'">'+i.html()+"</a></li>"):t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==s.custom_back_text?t("h5>a",a).html(s.back_text):t("h5>a",a).html("&laquo; "+i.html()),n.prepend(a))}),i.appendTo(a),this.sticky(),this.assembled(a)},assembled:function(a){a.data(this.attr_name(!0),t.extend({},a.data(this.attr_name(!0)),{assembled:!0}))},height:function(a){var e=0,s=this;return t("> li",a).each(function(){e+=s.S(this).outerHeight(!0)}),e},sticky:function(){var t=this;this.S(a).on("scroll",function(){t.update_sticky_positioning()})},update_sticky_positioning:function(){var t="."+this.settings.sticky_class,e=this.S(a),s=this;if(s.settings.sticky_topbar&&s.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset");s.S(t).hasClass("expanded")||(e.scrollTop()>i?s.S(t).hasClass("fixed")||(s.S(t).addClass("fixed"),s.S("body").addClass("f-topbar-fixed")):e.scrollTop()<=i&&s.S(t).hasClass("fixed")&&(s.S(t).removeClass("fixed"),s.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(a).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);