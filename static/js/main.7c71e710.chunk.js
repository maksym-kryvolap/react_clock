(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),s=n(3),r=n(5),i=n(4),l=n(1),u=(n(12),n(0)),d=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e.newDateId=0,e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.newDateId=window.setInterval((function(){e.setState({date:new Date}),console.info(e.state.date.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.newDateId)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function m(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},e.changeNameId=0,e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.addEventListener("click",(function(){e.setState({hasClock:!0})})),this.changeNameId=window.setInterval((function(){e.setState({clockName:"".concat(m())})}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.changeNameId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(d,{name:n})]})}}]),n}(l.Component);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c71e710.chunk.js.map