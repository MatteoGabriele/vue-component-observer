(function(s,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(s=typeof globalThis<"u"?globalThis:s||self,i(s.VueComponentObserver={}))})(this,function(s){"use strict";const i={data(){return{$_vueComponentObserver:null,$_vueComponentObserverBreakpoints:null,$_vueComponentObserverSizes:{width:0,height:0}}},computed:{$eq(){const e=this.$data.$_vueComponentObserverBreakpoints;return e?Object.keys(e).reduce((t,n)=>{const r=e[n];return t[n]=Object.keys(r).some(o=>this.$_checkMediaCondition(o,r[o])),t},{}):{}}},methods:{$_checkMediaCondition(e,t){const n=this.$data.$_vueComponentObserverSizes;switch(e){case"minWidth":return n.width>=t;case"maxWidth":return n.width<=t;case"minHeight":return n.height>=t;case"maxHeight":return n.height<=t}return!1},$_createResizeListener(){console.log(this.$el);const e=t=>{const{width:n,height:r}=t[0].contentRect;this.$data.$_vueComponentObserverSizes={width:n,height:r}};this.$data.$_vueComponentObserver=new ResizeObserver(e),this.$data.$_vueComponentObserver.observe(this.$el)},$_destroyResizeListener(){this.$data.$_vueComponentObserver&&this.$data.$_vueComponentObserver.disconnect()}},destroyed(){this.$_destroyResizeListener()},mounted(){this.$data.$_vueComponentObserverBreakpoints=this.$options.breakpoints,this.$data.$_vueComponentObserverBreakpoints&&this.$_createResizeListener()}},d=e=>{e.mixin(i)};s.ObserverMixin=i,s.default=d,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
