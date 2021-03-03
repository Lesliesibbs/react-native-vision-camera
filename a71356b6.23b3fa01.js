(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||n;return a?i.a.createElement(d,p(p({ref:t},l),{},{components:a})):i.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<n;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),i=a(7),n=(a(0),a(109)),o={id:"camerapreset",title:"Module: CameraPreset",sidebar_label:"CameraPreset",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/modules/camerapreset",id:"api/modules/camerapreset",isDocsHomePage:!1,title:"Module: CameraPreset",description:"Module: CameraPreset",source:"@site/docs/api/modules/camerapreset.md",slug:"/api/modules/camerapreset",permalink:"/react-native-vision-camera/docs/api/modules/camerapreset",editUrl:null,version:"current",sidebar_label:"CameraPreset"},c=[{value:"Type aliases",id:"type-aliases",children:[{value:"CameraPreset",id:"camerapreset",children:[]}]}],l={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"module-camerapreset"},"Module: CameraPreset"),Object(n.b)("h2",{id:"type-aliases"},"Type aliases"),Object(n.b)("h3",{id:"camerapreset"},"CameraPreset"),Object(n.b)("p",null,"\u01ac ",Object(n.b)("strong",{parentName:"p"},"CameraPreset"),": ",Object(n.b)("em",{parentName:"p"},"cif-352x288")," ","|"," ",Object(n.b)("em",{parentName:"p"},"hd-1280x720")," ","|"," ",Object(n.b)("em",{parentName:"p"},"hd-1920x1080")," ","|"," ",Object(n.b)("em",{parentName:"p"},"hd-3840x2160")," ","|"," ",Object(n.b)("em",{parentName:"p"},"high")," ","|"," ",Object(n.b)("em",{parentName:"p"},"iframe-1280x720")," ","|"," ",Object(n.b)("em",{parentName:"p"},"iframe-960x540")," ","|"," ",Object(n.b)("em",{parentName:"p"},"input-priority")," ","|"," ",Object(n.b)("em",{parentName:"p"},"low")," ","|"," ",Object(n.b)("em",{parentName:"p"},"medium")," ","|"," ",Object(n.b)("em",{parentName:"p"},"photo")," ","|"," ",Object(n.b)("em",{parentName:"p"},"vga-640x480")),Object(n.b)("p",null,"Indicates the quality level or bit rate of the output."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"cif-352x288"'),": Specifies capture settings suitable for CIF quality (352 x 288 pixel) video output"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"hd-1280x720"'),": Specifies capture settings suitable for 720p quality (1280 x 720 pixel) video output."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"hd-1920x1080"'),": Capture settings suitable for 1080p-quality (1920 x 1080 pixels) video output."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"hd-3840x2160"'),': Capture settings suitable for 2160p-quality (3840 x 2160 pixels, "4k") video output.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"high"'),": Specifies capture settings suitable for high-quality video and audio output."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"iframe-1280x720"'),": Specifies capture settings to achieve 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"iframe-960x540"'),": Specifies capture settings to achieve 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"input-priority"'),": Specifies that the capture session does not control audio and video output settings."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"low"'),": Specifies capture settings suitable for output video and audio bit rates suitable for sharing over 3G."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"medium"'),": Specifies capture settings suitable for output video and audio bit rates suitable for sharing over WiFi."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"photo"'),": Specifies capture settings suitable for high-resolution photo quality output."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"vga-640x480"'),": Specifies capture settings suitable for VGA quality (640 x 480 pixel) video output.")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/c314255/src/CameraPreset.ts#L17"},"src/CameraPreset.ts:17")))}u.isMDXComponent=!0}}]);