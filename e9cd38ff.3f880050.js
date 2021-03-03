(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(109)),o={id:"animated",title:"Zooming with Reanimated",sidebar_label:"Zooming with Reanimated"},c={unversionedId:"animated",id:"animated",isDocsHomePage:!1,title:"Zooming with Reanimated",description:"Animations",source:"@site/docs/ANIMATED.md",slug:"/animated",permalink:"/react-native-vision-camera/docs/animated",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/ANIMATED.md",version:"current",sidebar_label:"Zooming with Reanimated",sidebar:"someSidebar",previous:{title:"Frame Processors",permalink:"/react-native-vision-camera/docs/frame-processors"},next:{title:"Camera Errors",permalink:"/react-native-vision-camera/docs/errors"}},m=[{value:"Animations",id:"animations",children:[{value:"Installing reanimated",id:"installing-reanimated",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Implementation",id:"implementation-1",children:[]}]}],s={toc:m};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",null,Object(i.b)("img",{align:"right",width:"35%",src:"../img/ultra-wide-demo.gif"})),Object(i.b)("h2",{id:"animations"},"Animations"),Object(i.b)("p",null,"Often you'd want to animate specific props in the Camera. For example, if you'd want to create a custom zoom gesture, you can smoothly animate the Camera's ",Object(i.b)("inlineCode",{parentName:"p"},"zoom")," property."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Camera>")," component does provide a natively implemented zoom gesture which you can enable with the ",Object(i.b)("inlineCode",{parentName:"p"},"enableZoomGesture={true}")," prop."),Object(i.b)("p",{parentName:"div"},"This does not require any additional work, but if you want to setup a custom gesture, such as the one in Snapchat or Instagram where you move up your finger while recording, continue reading."))),Object(i.b)("h3",{id:"installing-reanimated"},"Installing reanimated"),Object(i.b)("p",null,"The following example uses ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated")," (v2) to animate the ",Object(i.b)("inlineCode",{parentName:"p"},"zoom")," property. Head over to their ",Object(i.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/installation"},"Installation guide")," to install Reanimated if you haven't already."),Object(i.b)("h3",{id:"implementation"},"Implementation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Reanimated, {\n  useAnimatedProps,\n  useSharedValue,\n  withSpring,\n} from "react-native-reanimated"\n\nconst ReanimatedCamera = Reanimated.createAnimatedComponent(Camera)\nReanimated.addWhitelistedNativeProps({\n  zoom: true,\n})\n\nexport function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n  const zoom = useSharedValue(0)\n\n  const onRandomZoomPress = useCallback(() => {\n    zoom.value = withSpring(Math.random())\n  }, [])\n\n  const animatedProps = useAnimatedProps<Partial<CameraProps>>(\n    () => ({ zoom: zoom.value }),\n    [zoom]\n  )\n\n  if (device == null) return <LoadingView />\n  return (\n    <>\n      <ReanimatedCamera\n        style={StyleSheet.absoluteFill}\n        device={device}\n        isActive={true}\n        animatedProps={animatedProps}\n      />\n      <TouchableOpacity\n        style={styles.zoomButton}\n        onPress={onRandomZoomPress}>\n        <Text>Zoom randomly!</Text>\n      </TouchableOpacity>\n    </>\n  )\n}\n')),Object(i.b)("h3",{id:"implementation-1"},"Implementation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Camera")," is converted to a reanimated Camera using ",Object(i.b)("inlineCode",{parentName:"li"},"Reanimated.createAnimatedComponent")),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"zoom")," property is added to the whitelisted native props to make it animatable.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Note that this might not be needed in the future, see: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/pull/1409"},"reanimated#1409")))),Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/useSharedValue"},Object(i.b)("inlineCode",{parentName:"a"},"useSharedValue")),", we're creating a shared value that holds the ",Object(i.b)("inlineCode",{parentName:"li"},"zoom")," property."),Object(i.b)("li",{parentName:"ol"},"Using the ",Object(i.b)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/useAnimatedProps"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedProps"))," hook, we apply the shared value to the animated props."),Object(i.b)("li",{parentName:"ol"},"We apply the animated props to the ",Object(i.b)("inlineCode",{parentName:"li"},"ReanimatedCamera")," component's ",Object(i.b)("inlineCode",{parentName:"li"},"animatedProps")," property.")),Object(i.b)("br",null),Object(i.b)("h4",{id:"-next-section-camera-errors"},"\ud83d\ude80 Next section: ",Object(i.b)("a",{parentName:"h4",href:"errors"},"Camera Errors")))}l.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);