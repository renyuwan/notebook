(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{844:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(1)),a=n(109),p=n(83),u=s(n(84)),i=n(110),l=n(265),c=n(264);function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=(0,p.connect)(function(e){return{loginUser:e.userReducer,deptList:e.deptReducer.deptList,currentDept:e.deptReducer.currentDept}},{toggleModalState:i.toggleModalState,getDeptList:l.getDeptList,setCurrentDept:l.setCurrentDept,getStaffList:c.getStaffList})(r=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=h(t).call(this,e))||"object"!==d(o)&&"function"!==typeof o?m(r):o).state={deptname:n.props.currentDept.name},n.handleOk=n.handleOk.bind(m(m(n))),n.handleCancel=n.handleCancel.bind(m(m(n))),n.updateDeptName=n.updateDeptName.bind(m(m(n))),n}var n,r,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.default.Component),n=t,(r=[{key:"handleOk",value:function(){this.state.deptname.trim().length>0?this.updateDeptName():a.message.error("\u90e8\u95e8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a")}},{key:"updateDeptName",value:function(){var e=this;u.default.post("enterprise/depts/updateDeptName",{deptId:this.props.currentDept.departmentId,deptName:this.state.deptname}).then(function(t){t&&200===t.status&&(a.Modal.success({title:"\u7cfb\u7edf\u63d0\u793a",centered:!0,content:"\u4fee\u6539\u6210\u529f!"}),e.props.toggleModalState("DEFAULT",!1),e.props.getDeptList({type:e.props.loginUser.userRole}),e.props.currentDept.name=e.state.deptname,e.props.setCurrentDept(e.props.currentDept),e.props.getStaffList({deptId:e.props.currentDept.departmentId}))})}},{key:"handleCancel",value:function(){this.props.toggleModalState("DEFAULT",!1)}},{key:"render",value:function(){var e=this;return o.default.createElement(a.Modal,{width:300,visible:!0,title:"\u4fee\u6539\u90e8\u95e8\u540d\u79f0",centered:!0,onCancel:this.handleCancel,footer:[o.default.createElement(a.Button,{key:"1",onClick:this.handleCancel},"\u53d6\u6d88"),o.default.createElement(a.Button,{key:"2",type:"primary",onClick:this.handleOk},"\u786e\u8ba4")]},o.default.createElement(a.Input,{value:this.state.deptname,placeholder:"\u8bf7\u8f93\u5165\u90e8\u95e8\u540d\u79f0",onChange:function(t){return e.setState({deptname:t.target.value})}}))}}])&&f(n.prototype,r),p&&f(n,p),t}())||r;t.default=b}}]);
//# sourceMappingURL=12.df3aa6b5.chunk.js.map