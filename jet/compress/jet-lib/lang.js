!function(){var e=Jet.__base__;Jet.__base__._useList.push("lang");var n=e._JT,_=e._lang,a="Jname",i="";document.head._JT_append(n.ct("style")._JT_attr({type:"text/css",id:"__preload_jl"})._JT_html("[Jlang]{visibility:hidden}")),Jet.lang=function(t){this.type=_,this.data=t},Jet.lang.list=[],Jet.lang.used=!1,Jet.lang.use=function(t){"array"!=n.type(t)?_throw("Jet.lang.init: 参数是一个数组"):(this.used=!0,this.list=t,i=t[0]),Jet.lang.init()},Jet.lang.jets=[],Jet.lang.init=function(t){(null==t?n.attr(_):e._getJdomEle(t)._JT_findAttr(_))._JT_each(function(n){void 0===n._jet_langs&&(n._jet_langs={},n._JT_findAttr(a)._JT_each(function(t){var e=t._JT_attr(a);n._jet_langs[e]=t._JT_html()}),n._JT_html(n._jet_langs[Jet.lang.type]),e._canUse("valid")&&Jet.valid.init(n))}),Jet.$.id("__preload_jl")._JT_exist(function(t){t._JT_remove()})},Object.defineProperty(Jet.lang,"type",{configurable:!0,enumerable:!0,get:function(){return i},set:function(t){t!==i&&-1!==Jet.lang.list.indexOf(t)&&(i=t,Jet.lang.used&&(n.attr(_)._JT_each(function(t){t._JT_html(t._jet_langs[Jet.lang.type]),e._canUse("valid")&&Jet.valid.init(t)}),Jet.lang.jets._JT_each(function(t){t.refresh()})))}}),window.JL=function(t){return new Jet.lang(t)}}();