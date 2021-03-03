(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return b})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return m}));var a=t(3),n=t(7),c=(t(0),t(109)),o={id:"cameraerror",title:"Module: CameraError",sidebar_label:"CameraError",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/modules/cameraerror",id:"api/modules/cameraerror",isDocsHomePage:!1,title:"Module: CameraError",description:"Module: CameraError",source:"@site/docs/api/modules/cameraerror.md",slug:"/api/modules/cameraerror",permalink:"/react-native-vision-camera/docs/api/modules/cameraerror",editUrl:null,version:"current",sidebar_label:"CameraError",sidebar:"someSidebar",previous:{title:"Module: CameraDevice",permalink:"/react-native-vision-camera/docs/api/modules/cameradevice"},next:{title:"Module: CameraPosition",permalink:"/react-native-vision-camera/docs/api/modules/cameraposition"}},i=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"CaptureError",id:"captureerror",children:[]},{value:"DeviceError",id:"deviceerror",children:[]},{value:"FormatError",id:"formaterror",children:[]},{value:"ParameterError",id:"parametererror",children:[]},{value:"PermissionError",id:"permissionerror",children:[]},{value:"SessionError",id:"sessionerror",children:[]},{value:"SystemError",id:"systemerror",children:[]},{value:"UnknownError",id:"unknownerror",children:[]}]},{value:"Functions",id:"functions",children:[{value:"isErrorWithCause",id:"iserrorwithcause",children:[]},{value:"tryParseNativeCameraError",id:"tryparsenativecameraerror",children:[]}]}],p={toc:i};function m(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-cameraerror"},"Module: CameraError"),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},"CameraCaptureError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError"))),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/interfaces/cameraerror.errorwithcause"},"ErrorWithCause"))),Object(c.b)("h2",{id:"type-aliases"},"Type aliases"),Object(c.b)("h3",{id:"captureerror"},"CaptureError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"CaptureError"),": ",Object(c.b)("em",{parentName:"p"},"capture/invalid-photo-format")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/encoder-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/muxer-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/recording-in-progress")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/no-recording-in-progress")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/file-io-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/create-temp-file-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/invalid-photo-codec")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/not-bound-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/capture-type-not-supported")," ","|"," ",Object(c.b)("em",{parentName:"p"},"capture/unknown")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L24"},"src/CameraError.ts:24")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"deviceerror"},"DeviceError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"DeviceError"),": ",Object(c.b)("em",{parentName:"p"},"device/configuration-error")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/no-device")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/invalid-device")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/torch-unavailable")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/microphone-unavailable")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/low-light-boost-not-supported")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/focus-not-supported")," ","|"," ",Object(c.b)("em",{parentName:"p"},"device/camera-not-available-on-simulator")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L8"},"src/CameraError.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"formaterror"},"FormatError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"FormatError"),": ",Object(c.b)("em",{parentName:"p"},"format/invalid-fps")," ","|"," ",Object(c.b)("em",{parentName:"p"},"format/invalid-hdr")," ","|"," ",Object(c.b)("em",{parentName:"p"},"format/invalid-low-light-boost")," ","|"," ",Object(c.b)("em",{parentName:"p"},"format/invalid-format")," ","|"," ",Object(c.b)("em",{parentName:"p"},"format/invalid-preset")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L17"},"src/CameraError.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"parametererror"},"ParameterError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"ParameterError"),": ",Object(c.b)("em",{parentName:"p"},"parameter/invalid-parameter")," ","|"," ",Object(c.b)("em",{parentName:"p"},"parameter/unsupported-os")," ","|"," ",Object(c.b)("em",{parentName:"p"},"parameter/unsupported-output")," ","|"," ",Object(c.b)("em",{parentName:"p"},"parameter/unsupported-input")," ","|"," ",Object(c.b)("em",{parentName:"p"},"parameter/invalid-combination")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L2"},"src/CameraError.ts:2")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"permissionerror"},"PermissionError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"PermissionError"),": ",Object(c.b)("em",{parentName:"p"},"permission/microphone-permission-denied")," ","|"," ",Object(c.b)("em",{parentName:"p"},"permission/camera-permission-denied")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L1"},"src/CameraError.ts:1")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sessionerror"},"SessionError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"SessionError"),": ",Object(c.b)("em",{parentName:"p"},"session/camera-not-ready")," ","|"," ",Object(c.b)("em",{parentName:"p"},"session/audio-session-setup-failed")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L23"},"src/CameraError.ts:23")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"systemerror"},"SystemError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"SystemError"),": ",Object(c.b)("em",{parentName:"p"},"system/no-camera-manager")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L36"},"src/CameraError.ts:36")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unknownerror"},"UnknownError"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"UnknownError"),": ",Object(c.b)("em",{parentName:"p"},"unknown/unknown")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L37"},"src/CameraError.ts:37")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"iserrorwithcause"},"isErrorWithCause"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Const"),Object(c.b)("strong",{parentName:"p"},"isErrorWithCause"),"(",Object(c.b)("inlineCode",{parentName:"p"},"error"),": ",Object(c.b)("em",{parentName:"p"},"unknown"),"): error is ErrorWithCause"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"error")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"unknown"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," error is ErrorWithCause"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L127"},"src/CameraError.ts:127")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tryparsenativecameraerror"},"tryParseNativeCameraError"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Const"),Object(c.b)("strong",{parentName:"p"},"tryParseNativeCameraError"),"<T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"nativeError"),": T): ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(c.b)("em",{parentName:"a"},"CameraRuntimeError"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},Object(c.b)("em",{parentName:"a"},"CameraCaptureError"))," ","|"," T"),Object(c.b)("p",null,"Tries to parse an error coming from native to a typed JS camera error."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"method"))," "),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"nativeError")),Object(c.b)("td",{parentName:"tr",align:"left"},"T"),Object(c.b)("td",{parentName:"tr",align:"left"},"The native error instance. This is a JSON in the legacy native module architecture.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},Object(c.b)("em",{parentName:"a"},"CameraRuntimeError"))," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},Object(c.b)("em",{parentName:"a"},"CameraCaptureError"))," ","|"," T"),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"CameraRuntimeError")," or ",Object(c.b)("inlineCode",{parentName:"p"},"CameraCaptureError"),", or the nativeError if it's not parsable"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/CameraError.ts#L153"},"src/CameraError.ts:153")))}m.isMDXComponent=!0},109:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),m=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},s=function(e){var r=m(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(t),u=a,d=s["".concat(o,".").concat(u)]||s[u]||l[u]||c;return t?n.a.createElement(d,b(b({ref:r},p),{},{components:t})):n.a.createElement(d,b({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var b={};for(var i in r)hasOwnProperty.call(r,i)&&(b[i]=r[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var p=2;p<c;p++)o[p]=t[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);