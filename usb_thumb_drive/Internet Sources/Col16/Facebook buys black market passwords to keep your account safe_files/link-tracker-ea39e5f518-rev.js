define(["jquery","version!fly/managers/debug","managers/page-vars","managers/tealium","version!fly/components/base"],function(e,t,n,i){t=t.init("linkTracker"),e.widget("cnet.linkTracker",e.fly.base,{options:{action:"",appendViewguid:!0},_create:function(){this._setup(),this.options.appendViewguid&&n.guid&&this.$element.attr("href")&&this.$element.attr("href",this.$element.attr("href").replace("___VIEW_GUID___",n.guid)),this._setupEvents()},_setupEvents:function(){var e=this;this.$element.on("click",function(){e._trackCustomEvent("trackLinkClick",e.options.action)})},_trackCustomEvent:function(t,a){i.trackCustomEvent(t,e.extend(!0,{},n.tracking.data,{browserTitle:document.title,clickGenericText:a}),"trackClick")}})});