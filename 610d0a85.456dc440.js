(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=b(a),u=r,d=l["".concat(i,".").concat(u)]||l[u]||p[u]||o;return a?n.a.createElement(d,c(c({ref:t},s),{},{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(109)),i={id:"hooks_usecameraformat",title:"Module: hooks/useCameraFormat",sidebar_label:"hooks/useCameraFormat",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/modules/hooks_usecameraformat",id:"api/modules/hooks_usecameraformat",isDocsHomePage:!1,title:"Module: hooks/useCameraFormat",description:"Module: hooks/useCameraFormat",source:"@site/docs/api/modules/hooks_usecameraformat.md",slug:"/api/modules/hooks_usecameraformat",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameraformat",editUrl:null,version:"current",sidebar_label:"hooks/useCameraFormat",sidebar:"someSidebar",previous:{title:"Module: hooks/useCameraDevices",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameradevices"},next:{title:"Module: utils/FormatFilter",permalink:"/react-native-vision-camera/docs/api/modules/utils_formatfilter"}},m=[{value:"Functions",id:"functions",children:[{value:"useCameraFormat",id:"usecameraformat",children:[]}]}],s={toc:m};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-hooksusecameraformat"},"Module: hooks/useCameraFormat"),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"usecameraformat"},"useCameraFormat"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"useCameraFormat"),"(",Object(o.b)("inlineCode",{parentName:"p"},"device?"),": ",Object(o.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#cameradevice"},Object(o.b)("em",{parentName:"a"},"CameraDevice")),", ",Object(o.b)("inlineCode",{parentName:"p"},"cameraViewSize?"),": ",Object(o.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/utils_formatfilter#size"},Object(o.b)("em",{parentName:"a"},"Size")),"): ",Object(o.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#cameradeviceformat"},Object(o.b)("em",{parentName:"a"},"CameraDeviceFormat"))," ","|"," ",Object(o.b)("em",{parentName:"p"},"undefined")),Object(o.b)("p",null,"Returns the best format for the given camera device."),Object(o.b)("p",null,"This function tries to choose a format with the highest possible photo-capture resolution and best matching aspect ratio."),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"device?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/cameradevice#cameradevice"},Object(o.b)("em",{parentName:"a"},"CameraDevice"))),Object(o.b)("td",{parentName:"tr",align:"left"},"The Camera Device")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"cameraViewSize?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/utils_formatfilter#size"},Object(o.b)("em",{parentName:"a"},"Size"))),Object(o.b)("td",{parentName:"tr",align:"left"},"The Camera View's size. This can be an approximation and ",Object(o.b)("strong",{parentName:"td"},"must be memoized"),"! Default: ",Object(o.b)("inlineCode",{parentName:"td"},"SCREEN_SIZE"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#cameradeviceformat"},Object(o.b)("em",{parentName:"a"},"CameraDeviceFormat"))," ","|"," ",Object(o.b)("em",{parentName:"p"},"undefined")),Object(o.b)("p",null,"The best matching format for the given camera device, or ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," if the camera device is ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/hooks/useCameraFormat.ts#L16"},"src/hooks/useCameraFormat.ts:16")))}b.isMDXComponent=!0}}]);