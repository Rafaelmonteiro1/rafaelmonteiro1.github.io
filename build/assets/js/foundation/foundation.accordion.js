!function(t){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.0",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(t,a,n){this.bindings(a,n)},events:function(){var a=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > .accordion-navigation > a",function(i){var e=n(this).closest("["+a.attr_name()+"]"),c=a.attr_name()+"="+e.attr(a.attr_name()),s=e.data(a.attr_name(!0)+"-init")||a.settings,o=n("#"+this.href.split("#")[1]),l=t("> .accordion-navigation",e),r=l.children("."+s.content_class),d=r.filter("."+s.active_class);return i.preventDefault(),e.attr(a.attr_name())&&(r=r.add("["+c+"] dd > ."+s.content_class),l=l.add("["+c+"] .accordion-navigation")),s.toggleable&&o.is(d)?(o.parent(".accordion-navigation").toggleClass(s.active_class,!1),o.toggleClass(s.active_class,!1),s.callback(o),o.triggerHandler("toggled",[e]),e.triggerHandler("toggled",[o]),void 0):(s.multi_expand||(r.removeClass(s.active_class),l.removeClass(s.active_class)),o.addClass(s.active_class).parent().addClass(s.active_class),s.callback(o),o.triggerHandler("toggled",[e]),e.triggerHandler("toggled",[o]),void 0)})},off:function(){},reflow:function(){}}}(jQuery,window,window.document);