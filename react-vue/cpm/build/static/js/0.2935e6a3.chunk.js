(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{645:function(e,t,n){"use strict";var l;Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(1),o=(a=r)&&a.__esModule?a:{default:a},u=n(109);n(738);var c=n(85),i=n(83),s=n(110),f=n(264);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=o.default.createElement("span",null,"\u5458\u5de5"),h=o.default.createElement("div",{className:"ant-modal-mask"}),g=o.default.createElement("span",null,"\u5934\u50cf"),w=o.default.createElement("span",null,"\u59d3\u540d"),P=o.default.createElement("span",null,"\u6027\u522b"),O=o.default.createElement("span",null,"\u624b\u673a\u53f7"),S=o.default.createElement("span",null,"\u90ae\u7bb1"),_=o.default.createElement("span",null,"\u6240\u5728\u90e8\u95e8"),j=o.default.createElement("span",null),A=(0,i.connect)(function(e){return{activePerson:e.staffReducer.activePerson}},{togglePersonal:f.togglePersonal,toggleModalState:s.toggleModalState})(l=function(e){function t(e){var n,l,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(n=!(a=y(t).call(this,e))||"object"!==p(a)&&"function"!==typeof a?b(l):a).handleClose=n.handleClose.bind(b(b(n))),n}var n,l,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.default.Component),n=t,(l=[{key:"handleClose",value:function(){this.props.togglePersonal(!1),this.props.toggleModalState("DEFAULT",!1)}},{key:"render",value:function(){var e=d(this.props.activePerson.userRoleInfos),t=d(this.props.activePerson.departments),n=Object.assign(t,e).map(function(e,t){return e.roleName?"ENTERPRISE_MANAGER"!==e.roleName?o.default.createElement("li",{key:t},o.default.createElement("span",null,e.deptName),o.default.createElement("span",null,"DEPT_DIRECTOR"===e.roleName?"\u90e8\u95e8\u4e3b\u7ba1":"\u90e8\u95e8\u7ba1\u7406\u5458")):null:o.default.createElement("li",{key:t},o.default.createElement("span",null,e.name),v)});return o.default.createElement("div",null,h,o.default.createElement("div",{className:"ant-modal-wrap"},o.default.createElement("div",{className:"card-wrapper"},o.default.createElement("div",{className:"close-wrapper cp",onClick:this.handleClose},o.default.createElement(u.Icon,{type:"close-circle",style:{color:"#ffffff",fontSize:"24px"},size:"large"})),o.default.createElement(u.Card,{bodyStyle:{maxHeight:"500px",overflow:"auto"},headStyle:{textAlign:"center",background:"#EDEFF1"},title:"\u4e2a\u4eba\u4fe1\u606f",style:{width:400}},o.default.createElement("ul",{className:"personal-card"},o.default.createElement("li",null,g,o.default.createElement(u.Avatar,{src:(0,c.getAvatar)(this.props.activePerson.cloudUserId)})),o.default.createElement("li",null,w,o.default.createElement("span",null,this.props.activePerson.name)),o.default.createElement("li",null,P,o.default.createElement("span",null,this.props.activePerson.gender)),o.default.createElement("li",null,O,o.default.createElement("span",null,this.props.activePerson.mobile||"\u672a\u7ed1\u5b9a")),o.default.createElement("li",null,S,o.default.createElement("span",null,this.props.activePerson.email||"\u672a\u7ed1\u5b9a")),t&&t.length>0?o.default.createElement("li",{style:{color:"#999",marginTop:"10px"}},_,j):null,n)))))}}])&&m(n.prototype,l),a&&m(n,a),t}())||l;t.default=A},738:function(e,t,n){}}]);
//# sourceMappingURL=0.2935e6a3.chunk.js.map