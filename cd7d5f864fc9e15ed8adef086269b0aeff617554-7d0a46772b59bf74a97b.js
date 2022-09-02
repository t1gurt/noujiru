"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},6296:function(e,t,r){r.d(t,{L:function(){return m},M:function(){return O},P:function(){return w},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var n=r(7294),a=(r(4811),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,f=["children"],p=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(p,o({},r)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,b);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},h=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,g),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,o({},c,t,{sizes:u,shouldLoad:l}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},h.displayName="Picture",h.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,r=s(e,v);return t?n.createElement(h,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=h.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var O=function(e){return n.createElement(n.Fragment,null,n.createElement(h,o({},e)),n.createElement("noscript",null,n.createElement(h,o({},e,{shouldLoad:!0}))))};O.displayName="MainImage",O.propTypes=h.propTypes;var x,E,k=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set,I=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,f=e.class,p=e.onStartLoad,m=e.onLoad,b=e.onError,g=s(e,S),y=i.width,h=i.height,v=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(y,h,v),O=w.style,k=w.className,j=s(w,C),I=(0,n.useRef)(),A=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(d=f);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,h);return(0,n.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(587)]).then(r.bind(r,5989)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(A)):E&&L.has(A)?void 0:(x.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;I.current&&(I.current.innerHTML=n(o({isLoading:!0,isLoaded:L.has(A),image:i},g)),L.has(A)||(e=requestAnimationFrame((function(){I.current&&(t=a(I.current,A,L,c,p,m,b))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){L.has(A)&&E&&(I.current.innerHTML=E(o({isLoading:L.has(A),isLoaded:L.has(A),image:i},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},j,{style:o({},O,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:I,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},A=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));A.propTypes=j,A.displayName="GatsbyImage";var P,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],N=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),_={src:i().string.isRequired,alt:k,width:N,height:N,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(P=A,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=s(e,T);return a&&console.warn(a),r?n.createElement(P,o({image:r},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=_},8602:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(7294),a=r(1597),i=r(6296),o=r(6404),s=r(5697),l=r.n(s);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=g(t.slice(0,n)),i=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[a]=i,e}),{})}var v=!1;try{v=!0}catch(S){}function w(e){return e&&"object"===d(e)&&e.prefix&&e.iconName&&e.icon?e:o.Qc.icon?o.Qc.icon(e):null===e?null:e&&"object"===d(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var x=n.forwardRef((function(e,t){var r=e.icon,n=e.mask,a=e.symbol,i=e.className,s=e.title,l=e.titleId,c=e.maskId,d=w(r),p=O("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,m=e.inverse,b=e.border,g=e.listItem,y=e.flip,h=e.size,v=e.rotation,w=e.pull,O=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":m,"fa-border":b,"fa-li":g,"fa-flip":!0===y,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(h),null!=h),f(t,"fa-rotate-".concat(v),null!=v&&0!==v),f(t,"fa-pull-".concat(w),null!=w),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(e)),m(i.split(" ")))),b=O("transform","string"==typeof e.transform?o.Qc.transform(e.transform):e.transform),g=O("mask",w(n)),y=(0,o.qv)(d,u(u(u(u({},p),b),g),{},{symbol:a,title:s,titleId:l,maskId:c}));if(!y)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var h=y.abstract,k={ref:t};return Object.keys(e).forEach((function(t){x.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),E(h[0],k)}));x.displayName="FontAwesomeIcon",x.propTypes={beat:l().bool,border:l().bool,beatFade:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf([!0,!1,"horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},x.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var E=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=h(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[g(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,l=p(n,y);return i.attrs.style=u(u({},i.attrs.style),s),t.apply(void 0,[r.tag,u(u({},i.attrs),l)].concat(m(a)))}.bind(null,n.createElement),k=r(4571),j=function(){var e,t,o=(0,a.useStaticQuery)("3257411868"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(1550)}),(null==s?void 0:s.name)&&n.createElement("p",null,n.createElement("strong",null,s.name),n.createElement("br",null),(null==s?void 0:s.summary)||null," ",n.createElement("br",null)," ",n.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},n.createElement(x,{icon:k.mdU}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/e5610/profile-pic.png","srcSet":"/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/e5610/profile-pic.png 50w,\\n/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/d4bf4/profile-pic.avif 50w,\\n/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/3faea/profile-pic.webp 50w,\\n/noujiru/static/d640d80bfdde9423bd43fd24305dbabf/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-7d0a46772b59bf74a97b.js.map