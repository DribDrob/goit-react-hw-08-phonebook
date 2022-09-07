"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[719],{7719:function(e,r,t){t.r(r),t.d(r,{default:function(){return E}});var n=t(5705),a=t(9434),o=t(1089),i=t(2106),s=t(6015),l=t(4601),u=t(9541),c=t(3329),d=o.Ry().shape({name:o.Z_().required(),email:o.Z_().required(),password:o.Z_().required()}),m={name:"",email:"",password:""},h=function(){var e=(0,a.I0)(),r=(0,n.TA)({initialValues:m,validationSchema:d,onSubmit:function(r,t){var n=t.resetForm;e(i.r5.register(r)),n()}});return(0,c.jsxs)(s.Z,{component:"form",onSubmit:r.handleSubmit,sx:{mt:1,textAlign:"center"},children:[(0,c.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),autoComplete:"name",autoFocus:!0}),(0,c.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),autoComplete:"email",autoFocus:!0}),(0,c.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),autoComplete:"current-password"}),(0,c.jsx)(u.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,px:3},children:"Sign Up"})]})},f=t(1465),v=t(4942),p=t(916),g=t(4695),x=t(2791),b=t(8182),Z=t(7312),S=t(1217),y=t(4419),k=t(7078),w=(0,t(4046).ZP)(),j=t(5080),C=["className","component","disableGutters","fixed","maxWidth","classes"],W=(0,j.Z)(),M=w("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["maxWidth".concat((0,Z.Z)(String(t.maxWidth)))],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),R=function(e){return(0,k.Z)({props:e,name:"MuiContainer",defaultTheme:W})},P=function(e,r){var t=e.classes,n=e.fixed,a=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,Z.Z)(String(o))),n&&"fixed",a&&"disableGutters"]};return(0,y.Z)(i,(function(e){return(0,S.Z)(r,e)}),t)};var _=t(9853),z=t(277),A=t(5513),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,t=void 0===r?M:r,n=e.useThemeProps,a=void 0===n?R:n,o=e.componentName,i=void 0===o?"MuiContainer":o,s=t((function(e){var r=e.theme,t=e.ownerState;return(0,g.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,v.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}))}),(function(e){var r=e.theme;return e.ownerState.fixed&&Object.keys(r.breakpoints.values).reduce((function(e,t){var n=t,a=r.breakpoints.values[n];return 0!==a&&(e[r.breakpoints.up(n)]={maxWidth:"".concat(a).concat(r.breakpoints.unit)}),e}),{})}),(function(e){var r=e.theme,t=e.ownerState;return(0,g.Z)({},"xs"===t.maxWidth&&(0,v.Z)({},r.breakpoints.up("xs"),{maxWidth:Math.max(r.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,v.Z)({},r.breakpoints.up(t.maxWidth),{maxWidth:"".concat(r.breakpoints.values[t.maxWidth]).concat(r.breakpoints.unit)}))})),l=x.forwardRef((function(e,r){var t=a(e),n=t.className,o=t.component,l=void 0===o?"div":o,u=t.disableGutters,d=void 0!==u&&u,m=t.fixed,h=void 0!==m&&m,f=t.maxWidth,v=void 0===f?"lg":f,x=(0,p.Z)(t,C),Z=(0,g.Z)({},t,{component:l,disableGutters:d,fixed:h,maxWidth:v}),S=P(Z,i);return(0,c.jsx)(s,(0,g.Z)({as:l,ownerState:Z,className:(0,b.Z)(S.root,n),ref:r},x))}));return l}({createStyledComponent:(0,z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["maxWidth".concat((0,_.Z)(String(t.maxWidth)))],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),useThemeProps:function(e){return(0,A.Z)({props:e,name:"MuiContainer"})}}),O=N,F=t(3793),G=t(3978),T=t(4565),D=t(4360),q=t(7414),B=(0,D.Z)(),E=function(){return(0,c.jsx)(q.Z,{theme:B,children:(0,c.jsxs)(O,{component:"main",maxWidth:"xs",children:[(0,c.jsx)(F.ZP,{}),(0,c.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,c.jsx)(G.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,c.jsx)(f.Z,{})}),(0,c.jsx)(T.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,c.jsx)(h,{})]})]})})}},1465:function(e,r,t){var n=t(1941);r.Z=void 0;var a=n(t(5649)),o=t(3329),i=(0,a.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOpenOutlined");r.Z=i},3978:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(885),a=t(1048),o=t(2793),i=t(2791),s=t(8182),l=t(4419),u=t(277),c=t(5513),d=t(1245),m=t(3329),h=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(1217);function v(e){return(0,f.Z)("MuiAvatar",e)}(0,t(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),x=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,u.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var Z=i.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiAvatar"}),u=t.alt,d=t.children,h=t.className,f=t.component,Z=void 0===f?"div":f,S=t.imgProps,y=t.sizes,k=t.src,w=t.srcSet,j=t.variant,C=void 0===j?"circular":j,W=(0,a.Z)(t,p),M=null,R=function(e){var r=e.crossOrigin,t=e.referrerPolicy,a=e.src,o=e.srcSet,s=i.useState(!1),l=(0,n.Z)(s,2),u=l[0],c=l[1];return i.useEffect((function(){if(a||o){c(!1);var e=!0,n=new Image;return n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=a,o&&(n.srcset=o),function(){e=!1}}}),[r,t,a,o]),u}((0,o.Z)({},S,{src:k,srcSet:w})),P=k||w,_=P&&"error"!==R,z=(0,o.Z)({},t,{colorDefault:!_,component:Z,variant:C}),A=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,v,r)}(z);return M=_?(0,m.jsx)(x,(0,o.Z)({alt:u,src:k,srcSet:w,sizes:y,ownerState:z,className:A.img},S)):null!=d?d:P&&u?u[0]:(0,m.jsx)(b,{className:A.fallback}),(0,m.jsx)(g,(0,o.Z)({as:Z,ownerState:z,className:(0,s.Z)(A.root,h),ref:r},W,{children:M}))}))},3793:function(e,r,t){var n=t(2793),a=t(2791),o=t(5513),i=t(3928),s=t(3329),l=function(e,r){return(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&{colorScheme:e.palette.mode})},u=function(e){return(0,n.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};r.ZP=function(e){var r=(0,o.Z)({props:e,name:"MuiCssBaseline"}),t=r.children,c=r.enableColorScheme,d=void 0!==c&&c;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(i.Z,{styles:function(e){return function(e){var r,t,a={html:l(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o=null==(r=e.components)||null==(t=r.MuiCssBaseline)?void 0:t.styleOverrides;return o&&(a=[a,o]),a}(e,d)}}),t]})}},7414:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(2791);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}var o=t(8023),i=t(9598),s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=t(3329);var u=function(e){var r=e.children,t=e.theme,u=(0,i.Z)(),c=n.useMemo((function(){var e=null===u?t:function(e,r){return"function"===typeof r?r(e):a({},e,r)}(u,t);return null!=e&&(e[s]=null!==u),e}),[t,u]);return(0,l.jsx)(o.Z.Provider,{value:c,children:r})},c=t(9886),d=t(3459);function m(e){var r=(0,d.Z)();return(0,l.jsx)(c.T.Provider,{value:"object"===typeof r?r:{},children:e.children})}var h=function(e){var r=e.children,t=e.theme;return(0,l.jsx)(u,{theme:t,children:(0,l.jsx)(m,{children:r})})}}}]);
//# sourceMappingURL=719.1cb08dec.chunk.js.map