!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).iro=e()}(this,(function(){"use strict";var t,e,n,r,i,o={},s=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function a(t,e){for(var n in e)t[n]=e[n];return t}function u(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var r,i,o,s,l=arguments;if(e=a({},e),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(e.children=n),null!=t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===e[i]&&(e[i]=t.defaultProps[i]);return s=e.key,null!=(o=e.ref)&&delete e.ref,null!=s&&delete e.key,c(t,e,s,o)}function c(e,n,r,i){var o={type:e,props:n,key:r,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return t.vnode&&t.vnode(o),o}function f(t){return t.children}function d(t,e){this.props=t,this.context=e}function p(t,e){if(null==e)return t.__p?p(t.__p,t.__p.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?p(t):null}function v(t){var e,n;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return v(t)}}function g(i){(!i.__d&&(i.__d=!0)&&1===e.push(i)||r!==t.debounceRendering)&&(r=t.debounceRendering,(t.debounceRendering||n)(_))}function _(){var t,n,r,i,o,s,l,u;for(e.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=e.pop();)t.__d&&(r=void 0,i=void 0,s=(o=(n=t).__v).__e,l=n.__P,u=n.u,n.u=!1,l&&(r=[],i=k(l,o,a({},o),n.__n,void 0!==l.ownerSVGElement,null,r,u,null==s?p(o):s),S(r,o),i!=s&&v(o)))}function y(t,e,n,r,i,l,a,h,c){var f,d,v,g,_,y,m,x=n&&n.__k||s,w=x.length;if(h==o&&(h=null!=l?l[0]:w?p(n,0):null),f=0,e.__k=b(e.__k,(function(n){if(null!=n){if(n.__p=e,n.__b=e.__b+1,null===(v=x[f])||v&&n.key==v.key&&n.type===v.type)x[f]=void 0;else for(d=0;d<w;d++){if((v=x[d])&&n.key==v.key&&n.type===v.type){x[d]=void 0;break}v=null}if(g=k(t,n,v=v||o,r,i,l,a,null,h,c),(d=n.ref)&&v.ref!=d&&(m||(m=[])).push(d,n.__c||g,n),null!=g){if(null==y&&(y=g),null!=n.l)g=n.l,n.l=null;else if(l==v||g!=h||null==g.parentNode){t:if(null==h||h.parentNode!==t)t.appendChild(g);else{for(_=h,d=0;(_=_.nextSibling)&&d<w;d+=2)if(_==g)break t;t.insertBefore(g,h)}"option"==e.type&&(t.value="")}h=g.nextSibling,"function"==typeof e.type&&(e.l=g)}}return f++,n})),e.__e=y,null!=l&&"function"!=typeof e.type)for(f=l.length;f--;)null!=l[f]&&u(l[f]);for(f=w;f--;)null!=x[f]&&M(x[f],x[f]);if(m)for(f=0;f<m.length;f++)E(m[f],m[++f],m[++f])}function b(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)b(t[r],e,n);else n.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return c(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=c(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}(t)):t);return n}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===l.test(e)?n+"px":null==n?"":n}function x(t,e,n,r,i){var o,s,l,a,u;if("key"===(e=i?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(o=t.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof r&&(o.cssText="",r=null),r)for(s in r)n&&s in n||m(o,s,"");if(n)for(l in n)r&&n[l]===r[l]||m(o,l,n[l])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),u=e.toLowerCase(),e=(u in t?u:e).slice(2),n?(r||t.addEventListener(e,w,a),(t.t||(t.t={}))[e]=n):t.removeEventListener(e,w,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&!i&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n?t.removeAttribute(e):t.setAttribute(e,n))}function w(e){return this.t[e.type](t.event?t.event(e):e)}function k(e,n,r,i,o,s,l,u,h,c){var p,v,g,_,m,x,w,k,S,E,M=n.type;if(void 0!==n.constructor)return null;(p=t.__b)&&p(n);try{t:if("function"==typeof M){if(k=n.props,S=(p=M.contextType)&&i[p.__c],E=p?S?S.props.value:p.__p:i,r.__c?w=(v=n.__c=r.__c).__p=v.__E:("prototype"in M&&M.prototype.render?n.__c=v=new M(k,E):(n.__c=v=new d(k,E),v.constructor=M,v.render=T),S&&S.sub(v),v.props=k,v.state||(v.state={}),v.context=E,v.__n=i,g=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=M.getDerivedStateFromProps&&a(v.__s==v.state?v.__s=a({},v.__s):v.__s,M.getDerivedStateFromProps(k,v.__s)),g)null==M.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&l.push(v);else{if(null==M.getDerivedStateFromProps&&null==u&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,E),!u&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,E)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=n,n.__e=null!=h?h!==r.__e?h:r.__e:null,n.__k=r.__k,p=0;p<n.__k.length;p++)n.__k[p]&&(n.__k[p].__p=n);break t}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,E)}for(_=v.props,m=v.state,v.context=E,v.props=k,v.state=v.__s,(p=t.__r)&&p(n),v.__d=!1,v.__v=n,v.__P=e,p=v.render(v.props,v.state,v.context),n.__k=b(null!=p&&p.type==f&&null==p.key?p.props.children:p),null!=v.getChildContext&&(i=a(a({},i),v.getChildContext())),g||null==v.getSnapshotBeforeUpdate||(x=v.getSnapshotBeforeUpdate(_,m)),y(e,n,r,i,o,s,l,h,c),v.base=n.__e;p=v.__h.pop();)v.__s&&(v.state=v.__s),p.call(v);g||null==_||null==v.componentDidUpdate||v.componentDidUpdate(_,m,x),w&&(v.__E=v.__p=null)}else n.__e=A(r.__e,n,r,i,o,s,l,c);(p=t.diffed)&&p(n)}catch(e){t.__e(e,n,r)}return n.__e}function S(e,n){for(var r;r=e.pop();)try{r.componentDidMount()}catch(e){t.__e(e,r.__v)}t.__c&&t.__c(n)}function A(t,e,n,r,i,l,a,u){var h,c,f,d,p=n.props,v=e.props;if(i="svg"===e.type||i,null==t&&null!=l)for(h=0;h<l.length;h++)if(null!=(c=l[h])&&(null===e.type?3===c.nodeType:c.localName===e.type)){t=c,l[h]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),l=null}return null===e.type?p!==v&&(null!=l&&(l[l.indexOf(t)]=null),t.data=v):e!==n&&(null!=l&&(l=s.slice.call(t.childNodes)),f=(p=n.props||o).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,u||(d||f)&&(d&&f&&d.__html==f.__html||(t.innerHTML=d&&d.__html||"")),function(t,e,n,r,i){var o;for(o in n)o in e||x(t,o,null,n[o],r);for(o in e)i&&"function"!=typeof e[o]||"value"===o||"checked"===o||n[o]===e[o]||x(t,o,e[o],n[o],r)}(t,v,p,i,u),e.__k=e.props.children,d||y(t,e,n,r,"foreignObject"!==e.type&&i,l,a,o,u),u||("value"in v&&void 0!==v.value&&v.value!==t.value&&(t.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==t.checked&&(t.checked=v.checked))),t}function E(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function M(e,n,r){var i,o,s;if(t.unmount&&t.unmount(e),(i=e.ref)&&E(i,null,n),r||"function"==typeof e.type||(r=null!=(o=e.__e)),e.__e=e.l=null,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&M(i[s],n,r);null!=o&&u(o)}function T(t,e,n){return this.constructor(t,n)}t={},d.prototype.setState=function(t,e){var n=this.__s!==this.state&&this.__s||(this.__s=a({},this.state));("function"!=typeof t||(t=t(n,this.props)))&&a(n,t),null!=t&&this.__v&&(this.u=!1,e&&this.__h.push(e),g(this))},d.prototype.forceUpdate=function(t){this.__v&&(t&&this.__h.push(t),this.u=!0,g(this))},d.prototype.render=f,e=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=t.debounceRendering,t.__e=function(t,e,n){for(var r;e=e.__p;)if((r=e.__c)&&!r.__p)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(t));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(t)}return g(r.__E=r)}catch(e){t=e}throw t},i=o;var C="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",O="[\\s|\\(]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")\\s*\\)?",R="[\\s|\\(]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")\\s*\\)?",I=new RegExp("rgb"+O),P=new RegExp("rgba"+R),j=new RegExp("hsl"+O),W=new RegExp("hsla"+R),D=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),N=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),F=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),$=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),H=Math.log,L=Math.round,U=Math.floor;function B(t,e){var n=t.indexOf("%")>-1,r=parseFloat(t);return n?e/100*r:r}function z(t){return parseInt(t,16)}function G(t){return t.toString(16).padStart(2,"0")}var V=function(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=Object.assign({},this.$)},q={hsv:{configurable:!0},hsva:{configurable:!0},hue:{configurable:!0},saturation:{configurable:!0},value:{configurable:!0},alpha:{configurable:!0},kelvin:{configurable:!0},rgb:{configurable:!0},rgba:{configurable:!0},hsl:{configurable:!0},hsla:{configurable:!0},rgbString:{configurable:!0},rgbaString:{configurable:!0},hexString:{configurable:!0},hex8String:{configurable:!0},hslString:{configurable:!0},hslaString:{configurable:!0}};function K(t){var e=t.width,n=t.sliderSize,r=t.borderWidth,i=t.handleRadius,o=t.padding,s="horizontal"===t.layoutDirection;return n=n||2*o+2*i+2*r,"circle"===t.sliderShape?{handleStart:t.padding+t.handleRadius,handleRange:e-2*o-2*i-2*r,width:e,height:e,cx:e/2,cy:e/2,radius:e/2-r/2}:{handleStart:n/2,handleRange:e-n,radius:n/2,x:0,y:0,width:s?n:e,height:s?e:n}}function X(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function Y(t,e,n){var r=t.wheelAngle,i=t.wheelDirection;return((e=!n&&"clockwise"===i||n&&"anticlockwise"===i?(n?180:360)-(r-e):r+e)%360+360)%360}function J(t,e,n){var r=X(t),i=t.width/2-t.padding-t.handleRadius-t.borderWidth;e=r.cx-e,n=r.cy-n;var o=Y(t,Math.atan2(-n,-e)*(180/Math.PI)),s=Math.min(Math.sqrt(e*e+n*n),i);return{h:Math.round(o),s:Math.round(100/i*s)}}function Q(t){var e=t.width;return{width:e,height:e,radius:t.padding+t.handleRadius}}function Z(t,e,n){var r=Q(t),i=r.radius,o=(n-i)/(r.height-2*i)*100;return{s:Math.max(0,Math.min((e-i)/(r.width-2*i)*100,100)),v:Math.max(0,Math.min(100-o,100))}}V.prototype.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof V?this.hsv=t.hsv:"object"==typeof t&&"r"in t&&"g"in t&&"b"in t?this.rgb=t:"object"==typeof t&&"h"in t&&"s"in t&&"v"in t?this.hsv=t:"object"==typeof t&&"h"in t&&"s"in t&&"l"in t&&(this.hsl=t)}},V.prototype.setChannel=function(t,e,n){var r;this[t]=Object.assign({},this[t],((r={})[e]=n,r))},V.prototype.reset=function(){this.hsva=this.initialValue},V.prototype.clone=function(){return new V(this)},V.prototype.unbind=function(){this.onChange=void 0},V.hsvToRgb=function(t){var e=t.h/60,n=t.s/100,r=t.v/100,i=U(e),o=e-i,s=r*(1-n),l=r*(1-o*n),a=r*(1-(1-o)*n),u=i%6;return{r:255*[r,l,s,s,a,r][u],g:255*[a,r,r,l,s,s][u],b:255*[s,s,a,r,r,l][u]}},V.rgbToHsv=function(t){var e=t.r/255,n=t.g/255,r=t.b/255,i=Math.max(e,n,r),o=Math.min(e,n,r),s=i-o,l=0,a=i,u=0===i?0:s/i;switch(i){case o:l=0;break;case e:l=(n-r)/s+(n<r?6:0);break;case n:l=(r-e)/s+2;break;case r:l=(e-n)/s+4}return{h:60*l,s:100*u,v:100*a}},V.hsvToHsl=function(t){var e=t.s/100,n=t.v/100,r=(2-e)*n,i=r<=1?r:2-r;return{h:t.h,s:100*(i<1e-9?0:e*n/i),l:50*r}},V.hslToHsv=function(t){var e=2*t.l,n=t.s*(e<=100?e:200-e)/100;return{h:t.h,s:100*(e+n<1e-9?0:2*n/(e+n)),v:(e+n)/2}},V.kelvinToRgb=function(t){var e,n,r,i=t/100;return i<66?(e=255,n=-155.25485562709179-.44596950469579133*(n=i-2)+104.49216199393888*H(n),r=i<20?0:.8274096064007395*(r=i-10)-254.76935184120902+115.67994401066147*H(r)):(e=351.97690566805693+.114206453784165*(e=i-55)-40.25366309332127*H(e),n=325.4494125711974+.07943456536662342*(n=i-50)-28.0852963507957*H(n),r=255),{r:U(e),g:U(n),b:U(r)}},V.rgbToKelvin=function(t){for(var e,n=t.r,r=t.b,i=1e3,o=4e4;o-i>.4;){var s=V.kelvinToRgb(e=.5*(o+i));s.b/s.r>=r/n?o=e:i=e}return e},q.hsv.get=function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},q.hsv.set=function(t){var e=this.$;if(t=Object.assign({},e,t),this.onChange){var n={h:!1,v:!1,s:!1,a:!1};for(var r in e)n[r]=t[r]!=e[r];this.$=t,(n.h||n.s||n.v||n.a)&&this.onChange(this,n)}else this.$=t},q.hsva.get=function(){return Object.assign({},this.$)},q.hsva.set=function(t){this.hsv=t},q.hue.get=function(){return this.$.h},q.hue.set=function(t){this.hsv={h:t}},q.saturation.get=function(){return this.$.s},q.saturation.set=function(t){this.hsv={s:t}},q.value.get=function(){return this.$.v},q.value.set=function(t){this.hsv={v:t}},q.alpha.get=function(){return this.$.a},q.alpha.set=function(t){this.hsv=Object.assign({},this.hsv,{a:t})},q.kelvin.get=function(){return V.rgbToKelvin(this.rgb)},q.kelvin.set=function(t){this.rgb=V.kelvinToRgb(t)},q.rgb.get=function(){var t=V.hsvToRgb(this.$),e=t.g,n=t.b;return{r:L(t.r),g:L(e),b:L(n)}},q.rgb.set=function(t){this.hsv=Object.assign({},V.rgbToHsv(t),{a:void 0===t.a?1:t.a})},q.rgba.get=function(){return Object.assign({},this.rgb,{a:this.alpha})},q.rgba.set=function(t){this.rgb=t},q.hsl.get=function(){var t=V.hsvToHsl(this.$),e=t.s,n=t.l;return{h:L(t.h),s:L(e),l:L(n)}},q.hsl.set=function(t){this.hsv=Object.assign({},V.hslToHsv(t),{a:void 0===t.a?1:t.a})},q.hsla.get=function(){return Object.assign({},this.hsl,{a:this.alpha})},q.hsla.set=function(t){this.hsl=t},q.rgbString.get=function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},q.rgbString.set=function(t){var e,n,r,i,o=1;if((e=I.exec(t))?(n=B(e[1],255),r=B(e[2],255),i=B(e[3],255)):(e=P.exec(t))&&(n=B(e[1],255),r=B(e[2],255),i=B(e[3],255),o=B(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:n,g:r,b:i,a:o}},q.rgbaString.get=function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},q.rgbaString.set=function(t){this.rgbString=t},q.hexString.get=function(){var t=this.rgb;return"#"+G(t.r)+G(t.g)+G(t.b)},q.hexString.set=function(t){var e,n,r,i,o=255;if((e=D.exec(t))?(n=17*z(e[1]),r=17*z(e[2]),i=17*z(e[3])):(e=N.exec(t))?(n=17*z(e[1]),r=17*z(e[2]),i=17*z(e[3]),o=17*z(e[4])):(e=F.exec(t))?(n=z(e[1]),r=z(e[2]),i=z(e[3])):(e=$.exec(t))&&(n=z(e[1]),r=z(e[2]),i=z(e[3]),o=z(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:n,g:r,b:i,a:o/255}},q.hex8String.get=function(){var t=this.rgba;return"#"+G(t.r)+G(t.g)+G(t.b)+G(U(255*t.a))},q.hex8String.set=function(t){this.hexString=t},q.hslString.get=function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},q.hslString.set=function(t){var e,n,r,i,o=1;if((e=j.exec(t))?(n=B(e[1],360),r=B(e[2],100),i=B(e[3],100)):(e=W.exec(t))&&(n=B(e[1],360),r=B(e[2],100),i=B(e[3],100),o=B(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:n,s:r,l:i,a:o}},q.hslaString.get=function(){var t=this.hsla;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},q.hslaString.set=function(t){this.hslString=t},Object.defineProperties(V.prototype,q);var tt=document.getElementsByTagName("base");function et(t){var e=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(e),r=/iPhone|iPod|iPad/i.test(e),i=window.location;return(n||r)&&tt.length>0?i.protocol+"//"+i.host+i.pathname+i.search+t:t}function nt(t,e,n,r,i){var o=i-r<=180?0:1;return r*=Math.PI/180,i*=Math.PI/180,"M "+(t+n*Math.cos(i))+" "+(e+n*Math.sin(i))+" A "+n+" "+n+" 0 "+o+" 0 "+(t+n*Math.cos(r))+" "+(e+n*Math.sin(r))}function rt(t,e,n,r){for(var i=0;i<r.length;i++){var o=r[i].x-e,s=r[i].y-n;if(Math.sqrt(o*o+s*s)<t.handleRadius)return i}return null}var it=["mousemove","touchmove","mouseup","touchend"],ot=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.render=function(t){var e=this.handleEvent.bind(this),n={onMouseDown:e,onTouchStart:e},r="horizontal"===t.layoutDirection,i={overflow:"visible",display:r?"inline-block":"block"};return t.index>0&&(i[r?"marginLeft":"marginTop"]=null===t.margin?t.sliderMargin:t.margin),h(f,null,t.children(this.uid,n,i))},e.prototype.handleEvent=function(t){var e=this,n=this.props.onInput,r=this.base.getBoundingClientRect();t.preventDefault();var i=t.touches?t.changedTouches[0]:t,o=i.clientX-r.left,s=i.clientY-r.top;switch(t.type){case"mousedown":case"touchstart":it.forEach((function(t){document.addEventListener(t,e,{passive:!1})})),n(o,s,0);break;case"mousemove":case"touchmove":n(o,s,1);break;case"mouseup":case"touchend":n(o,s,2),it.forEach((function(t){document.removeEventListener(t,e)}))}},e}(d);function st(t){var e=t.r,n=t.url;return h("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),x:t.x,y:t.y,style:{overflow:"visible"}},n&&h("use",Object.assign({xlinkHref:et(n)},t.props)),!n&&h("circle",{r:e,fill:"none","stroke-width":2,stroke:"#000"}),!n&&h("circle",{r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}st.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}};var lt=Array.apply(null,{length:360}).map((function(t,e){return e}));function at(t){var e=X(t),n=e.width,r=e.radius,i=e.cx,o=e.cy,s=t.colors,l=t.borderWidth,a=t.parent,u=t.color,c=u.hsv,f=s.map((function(e){return function(t,e){var n=e.hsv,r=X(t),i=r.cx,o=r.cy,s=t.width/2-t.padding-t.handleRadius-t.borderWidth,l=(180+Y(t,n.h,!0))*(Math.PI/180),a=n.s/100*s,u="clockwise"===t.wheelDirection?-1:1;return{x:i+a*Math.cos(l)*u,y:o+a*Math.sin(l)*u}}(t,e)}));return h(ot,Object.assign({},t,{onInput:function(e,n,r){if(0===r){var i=rt(t,e,n,f);null!==i?a.setActiveColor(i):(a.inputActive=!0,u.hsv=J(t,e,n),t.onInput(r))}else 1===r&&(a.inputActive=!0,u.hsv=J(t,e,n));t.onInput(r)}}),(function(e,a,d){return h("svg",Object.assign({},a,{className:"IroWheel",width:n,height:n,style:d}),h("defs",null,h("radialGradient",{id:e},h("stop",{offset:"0%","stop-color":"#fff"}),h("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"}))),h("g",{className:"IroWheelHue","stroke-width":r,fill:"none"},lt.map((function(e){return h("path",{key:e,d:nt(i,o,r/2,e,e+1.5),stroke:"hsl("+Y(t,e)+", 100%, 50%)"})}))),h("circle",{className:"IroWheelSaturation",cx:i,cy:o,r:r,fill:"url("+et("#"+e)+")"}),t.wheelLightness&&h("circle",{className:"IroWheelLightness",cx:i,cy:o,r:r,fill:"#000",opacity:1-c.v/100}),h("circle",{className:"IroWheelBorder",cx:i,cy:o,r:r,fill:"none",stroke:t.borderColor,"stroke-width":l}),s.filter((function(t){return t!==u})).map((function(e){return h(st,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:f[e.index].x,y:f[e.index].y})})),h(st,{isActive:!0,index:u.index,fill:u.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:f[u.index].x,y:f[u.index].y}))}))}function ut(t){var e=t.color,n=K(t),r=n.width,i=n.height,o=n.radius,s=function(t,e){var n=K(t),r=n.handleRange,i=n.handleStart,o="horizontal"===t.layoutDirection,s=o?n.width/2:n.height/2,l=i+function(t,e){var n=e.hsva;switch(t.sliderType){case"alpha":return 100*n.a;case"kelvin":var r=t.minTemperature;return Math.max(0,Math.min((e.kelvin-r)/(t.maxTemperature-r)*100,100));case"hue":return n.h/=3.6;case"saturation":return n.s;case"value":default:return n.v}}(t,e)/100*r;return o&&(l=-1*l+r+2*i),{x:o?s:l,y:o?l:s}}(t,e),l=function(t,e){var n=e.hsv;switch(t.sliderType){case"alpha":var r=e.rgb;return[[0,"rgba("+r.r+","+r.g+","+r.b+",0)"],[100,"rgb("+r.r+","+r.g+","+r.b+")"]];case"kelvin":for(var i=[],o=t.minTemperature,s=t.maxTemperature,l=s-o,a=o,u=0;a<s;a+=l/8,u+=1){var h=V.kelvinToRgb(a);i.push([12.5*u,"rgb("+h.r+","+h.g+","+h.b+")"])}return i;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var c=V.hsvToHsl({h:n.h,s:0,v:n.v}),f=V.hsvToHsl({h:n.h,s:100,v:n.v});return[[0,"hsl("+c.h+","+c.s+"%,"+c.l+"%)"],[100,"hsl("+f.h+","+f.s+"%,"+f.l+"%)"]];case"value":default:var d=V.hsvToHsl({h:n.h,s:n.s,v:100});return[[0,"#000"],[100,"hsl("+d.h+","+d.s+"%,"+d.l+"%)"]]}}(t,e),a="alpha"===t.sliderType;return h(ot,Object.assign({},t,{onInput:function(n,r,i){var o=function(t,e,n){var r,i=K(t),o=i.handleRange,s=i.handleStart;r="horizontal"===t.layoutDirection?-1*n+o+s:e-s,r=Math.max(Math.min(r,o),0);var l=Math.round(100/o*r);switch(t.sliderType){case"kelvin":var a=t.minTemperature;return a+l/100*(t.maxTemperature-a);case"alpha":return l/100;case"hue":return 3.6*l;default:return l}}(t,n,r);t.parent.inputActive=!0,e[t.sliderType]=o,t.onInput(i)}}),(function(n,u,c){return h("svg",Object.assign({},u,{className:"IroSlider",width:r,height:i,style:c}),h("defs",null,h("linearGradient",Object.assign({id:"g"+n},function(t){var e="horizontal"===t.layoutDirection;return{x1:"0%",y1:e?"100%":"0%",x2:e?"0%":"100%",y2:"0%"}}(t)),l.map((function(t){return h("stop",{offset:t[0]+"%","stop-color":t[1]})}))),a&&h("pattern",{id:"b"+n,width:"8",height:"8",patternUnits:"userSpaceOnUse"},h("rect",{x:"0",y:"0",width:"8",height:"8",fill:"#fff"}),h("rect",{x:"0",y:"0",width:"4",height:"4",fill:"#ccc"}),h("rect",{x:"4",y:"4",width:"4",height:"4",fill:"#ccc"})),a&&h("pattern",{id:"f"+n,width:"100%",height:"100%"},h("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+et("#b"+n)+")"})," }",h("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+et("#g"+n)+")"}))),h("rect",{className:"IroSliderBg",rx:o,ry:o,x:t.borderWidth/2,y:t.borderWidth/2,width:r-t.borderWidth,height:i-t.borderWidth,"stroke-width":t.borderWidth,stroke:t.borderColor,fill:"url("+et((a?"#f":"#g")+n)+")"}),h(st,{isActive:!0,index:e.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:s.x,y:s.y}))}))}ut.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var ht=function(t){function e(e){var n=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id,(e.colors.length>0?e.colors:[e.color]).forEach((function(t){return n.addColor(t)})),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var n=new V(t,this.onColorChange.bind(this));this.colors.splice(e,0,n),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",n)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t){var e=this;this.colors.forEach((function(t){return t.unbind()})),this.colors=[],t.forEach((function(t){return e.addColor(t)})),this.setActiveColor(0),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var n=this,r=this.events;(Array.isArray(t)?t:[t]).forEach((function(t){(r[t]||(r[t]=[])).push(e),n.deferredEvents[t]&&(n.deferredEvents[t].forEach((function(t){e.apply(null,t)})),n.deferredEvents[t]=[])}))},e.prototype.off=function(t,e){var n=this;(Array.isArray(t)?t:[t]).forEach((function(t){var r=n.events[t];r&&r.splice(r.indexOf(e),1)}))},e.prototype.emit=function(t){for(var e=this,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var i=this.activeEvents,o=!!i.hasOwnProperty(t)&&i[t];if(!o){i[t]=!0;var s=this.events[t]||[];s.forEach((function(t){return t.apply(e,n)})),i[t]=!1}},e.prototype.deferredEmit=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var i=this.deferredEvents;(e=this).emit.apply(e,[t].concat(n)),(i[t]||(i[t]=[])).push(n)},e.prototype.setOptions=function(t){this.setState(Object.assign({},this.state,t))},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach((function(t){return t.reset()})),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t){0===t?this.emit("input:start",this.color):1===t?this.emit("input:move",this.color):2===t&&this.emit("input:end",this.color)},e.prototype.render=function(t,e){var n=this,r=e.layout;return Array.isArray(r)||(r=[{component:at},{component:ut}],e.transparency&&r.push({component:ut,options:{sliderType:"alpha"}})),h("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},r.map((function(t,r){return h(t.component,Object.assign({},e,t.options,{ref:void 0,onInput:n.emitInputEvent.bind(n),parent:n,index:r}))})))},e}(d);ht.defaultProps=Object.assign({},{width:300,height:300,handleRadius:8,handleSvg:null,handleProps:{x:0,y:0},color:"#fff",colors:[],borderColor:"#fff",borderWidth:0,wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",layoutDirection:"vertical",sliderSize:null,sliderMargin:12,padding:6},{colors:[],display:"block",id:null,layout:"default",margin:null});var ct,ft,dt=((ft=function(e,n){var r,l=document.createElement("div");function a(){var t=e instanceof Element?e:document.querySelector(e);t.appendChild(r.base),r.onMount(t)}return function(e,n,r){var l,a,u;t.__p&&t.__p(e,n),a=(l=void 0===i)?null:n.__k,e=h(f,null,[e]),u=[],k(n,n.__k=e,a||o,o,void 0!==n.ownerSVGElement,a?null:s.slice.call(n.childNodes),u,!1,o,l),S(u,e)}(h(ct,Object.assign({},{ref:function(t){return r=t}},n)),l),"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a),r}).prototype=(ct=ht).prototype,Object.assign(ft,ct),ft.__component=ct,ft);return{Color:V,ColorPicker:dt,ui:{h:h,ComponentBase:ot,Handle:st,Slider:ut,Wheel:at,Box:function(t){var e=Q(t),n=e.width,r=e.height,i=e.radius,o=t.colors,s=t.parent,l=t.color,a=[[[0,"#fff"],[100,"hsl("+l.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]],u=o.map((function(e){return function(t,e){var n=Q(t),r=n.radius,i=e.hsv,o=n.height-2*r;return{x:r+i.s/100*(n.width-2*r),y:r+(o-i.v/100*o)}}(t,e)}));return h(ot,Object.assign({},t,{onInput:function(e,n,r){if(0===r){var i=rt(t,e,n,u);null!==i?s.setActiveColor(i):(s.inputActive=!0,l.hsv=Z(t,e,n),t.onInput(r))}else 1===r&&(s.inputActive=!0,l.hsv=Z(t,e,n));t.onInput(r)}}),(function(e,s,c){return h("svg",Object.assign({},s,{className:"IroBox",width:n,height:r,style:c}),h("defs",null,h("linearGradient",{id:"s"+e,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},a[0].map((function(t){return h("stop",{offset:t[0]+"%","stop-color":t[1]})}))),h("linearGradient",{id:"l"+e,x1:"0%",y1:"0%",x2:"0%",y2:"100%"},a[1].map((function(t){return h("stop",{offset:t[0]+"%","stop-color":t[1]})}))),h("pattern",{id:"f"+e,width:"100%",height:"100%"},h("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+et("#s"+e)+")"})," }",h("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url("+et("#l"+e)+")"}))),h("rect",{rx:i,ry:i,x:t.borderWidth/2,y:t.borderWidth/2,width:n-t.borderWidth,height:r-t.borderWidth,"stroke-width":t.borderWidth,stroke:t.borderColor,fill:"url("+et("#f"+e)+")"}),o.filter((function(t){return t!==l})).map((function(e){return h(st,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:u[e.index].x,y:u[e.index].y})})),h(st,{isActive:!0,index:l.index,fill:l.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:u[l.index].x,y:u[l.index].y}))}))}},version:"5.1.5"}}));