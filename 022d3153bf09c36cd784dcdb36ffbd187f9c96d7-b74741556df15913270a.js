(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[790],{6795:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(5697)},function(e,t){e.exports=r(7294)},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=0,l=n.forwardRef((function(e,t){var r=e.title,a=void 0===r?null:r,l=e.description,s=void 0===l?null:l,c=e.size,u=void 0===c?null:c,d=e.color,p=void 0===d?"currentColor":d,f=e.horizontal,g=void 0===f?null:f,m=e.vertical,y=void 0===m?null:m,h=e.rotate,v=void 0===h?null:h,b=e.spin,w=void 0===b?null:b,O=e.style,E=void 0===O?{}:O,S=e.children,x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);o++;var k,C=null!==w&&w,z=n.Children.map(S,(function(e){var t=e;!0!==C&&(C=!0===(null===w?t.props.spin:w));var r=t.props.size;"number"==typeof u&&"number"==typeof t.props.size&&(r=t.props.size/u);var a={size:r,color:null===p?t.props.color:p,horizontal:null===g?t.props.horizontal:g,vertical:null===y?t.props.vertical:y,rotate:null===v?t.props.rotate:v,spin:null===w?t.props.spin:w,inStack:!0};return n.cloneElement(t,a)}));null!==u&&(E.width="string"==typeof u?u:1.5*u+"rem");var j,L="stack_labelledby_"+o,T="stack_describedby_"+o;if(a)k=s?L+" "+T:L;else if(j="presentation",s)throw new Error("title attribute required when description is set");return n.createElement("svg",i({ref:t,viewBox:"0 0 24 24",style:E,role:j,"aria-labelledby":k},x),a&&n.createElement("title",{id:L},a),s&&n.createElement("desc",{id:T},s),C&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),z)}));l.displayName="Stack",l.propTypes={size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired,className:a.string,style:a.object},l.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var s=l;r.d(t,"Icon",(function(){return d})),r.d(t,"Stack",(function(){return s}));var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=0,d=n.forwardRef((function(e,t){var r=e.path,a=e.id,i=void 0===a?++u:a,o=e.title,l=void 0===o?null:o,s=e.description,d=void 0===s?null:s,p=e.size,f=void 0===p?null:p,g=e.color,m=void 0===g?"currentColor":g,y=e.horizontal,h=void 0!==y&&y,v=e.vertical,b=void 0!==v&&v,w=e.rotate,O=void 0===w?0:w,E=e.spin,S=void 0!==E&&E,x=e.style,k=void 0===x?{}:x,C=e.inStack,z=void 0!==C&&C,j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),L={},T=[];null!==f&&(z?T.push("scale("+f+")"):(k.width="string"==typeof f?f:1.5*f+"rem",k.height=k.width)),h&&T.push("scaleX(-1)"),b&&T.push("scaleY(-1)"),0!==O&&T.push("rotate("+O+"deg)"),null!==m&&(L.fill=m);var _=n.createElement("path",c({d:r,style:L},z?j:{})),I=_;T.length>0&&(k.transform=T.join(" "),k.transformOrigin="center",z&&(I=n.createElement("g",{style:k},_,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var P,q=I,N=!0===S||"number"!=typeof S?2:S,R=!z&&(h||b);if(N<0&&(R=!R),S&&(q=n.createElement("g",{style:{animation:"spin"+(R?"-inverse":"")+" linear "+Math.abs(N)+"s infinite",transformOrigin:"center"}},I,!(h||b||0!==O)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),z)return q;var A,M="icon_labelledby_"+i,W="icon_describedby_"+i;if(l)P=d?M+" "+W:M;else if(A="presentation",d)throw new Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:k,role:A,"aria-labelledby":P},j),l&&n.createElement("title",{id:M},l),d&&n.createElement("desc",{id:W},d),!z&&S&&(R?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),q)}));d.displayName="Icon",d.propTypes={path:a.string.isRequired,size:a.oneOfType([a.number,a.string]),color:a.string,horizontal:a.bool,vertical:a.bool,rotate:a.number,spin:a.oneOfType([a.bool,a.number]),style:a.object,inStack:a.bool,className:a.string},d.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=d}])},72:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){"use strict";r.d(t,{G:function(){return _},L:function(){return m},M:function(){return E},P:function(){return O},S:function(){return A},_:function(){return l},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return s}});var n=r(7294),a=(r(72),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var p,f=["children"],g=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=l(e,f);return n.createElement(n.Fragment,null,n.createElement(g,o({},r)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,y);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},b=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],O=function(e){var t=e.fallback,r=l(e,w);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};O.displayName="Placeholder",O.propTypes={fallback:a.string,sources:null==(p=b.propTypes)?void 0:p.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;var S,x,k=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:k},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set,T=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,y=l(e,z),h=i.width,v=i.height,b=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(h,v,b),O=w.style,E=w.className,k=l(w,j),C=(0,n.useRef)(),T=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var _=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,v);return(0,n.useEffect)((function(){S||(S=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=C.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(T)):x&&L.has(T)?void 0:(S.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;C.current&&(C.current.innerHTML=n(o({isLoading:!0,isLoaded:L.has(T),image:i},y)),L.has(T)||(e=requestAnimationFrame((function(){C.current&&(t=a(C.current,T,L,c,f,g,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){L.has(T)&&x&&(C.current.innerHTML=x(o({isLoading:L.has(T),isLoaded:L.has(T),image:i},y)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},k,{style:o({},O,c,{backgroundColor:u}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));_.propTypes=C,_.displayName="GatsbyImage";var I,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},N=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:k,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!N.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(I=_,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=l(e,P);return a&&console.warn(a),r?n.createElement(I,o({image:r},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=R},5402:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#989888","images":{"fallback":{"src":"/static/b55285fdbd81e6eafdd8f91a837efc2d/edb2b/profile-pic.jpg","srcSet":"/static/b55285fdbd81e6eafdd8f91a837efc2d/edb2b/profile-pic.jpg 80w,\\n/static/b55285fdbd81e6eafdd8f91a837efc2d/39164/profile-pic.jpg 160w","sizes":"80px"},"sources":[{"srcSet":"/static/b55285fdbd81e6eafdd8f91a837efc2d/d9027/profile-pic.avif 80w,\\n/static/b55285fdbd81e6eafdd8f91a837efc2d/8a7fe/profile-pic.avif 160w","type":"image/avif","sizes":"80px"},{"srcSet":"/static/b55285fdbd81e6eafdd8f91a837efc2d/a5f1e/profile-pic.webp 80w,\\n/static/b55285fdbd81e6eafdd8f91a837efc2d/36fad/profile-pic.webp 160w","type":"image/webp","sizes":"80px"}]},"width":80,"height":80}')}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-b74741556df15913270a.js.map