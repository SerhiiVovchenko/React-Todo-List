(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c,o=n(0),a=n.n(o),r=n(25),s=n.n(r),i=(n(31),n(32),n(13)),u=n(2),l=n(3),d=function(){return Object(l.jsx)("div",{className:"todoapp",children:Object(l.jsx)(u.a,{})})},b=n(26),j=n(8),p=n(4),f=n.n(p),m=n(6),O=n(5);!function(e){e.All="all",e.Completed="completed",e.Active="active"}(c||(c={}));var h=function(e,t){var n=t.includes("/")?t.slice(1):t;return n!==c.All?e.filter((function(e){switch(n){case c.Active:return!e.completed;case c.Completed:return e.completed;default:return e}})):e},v=function(e){return e.filter((function(e){return!e.completed})).length},x=function(e){return e.some((function(e){return e.completed}))},g="https://mate.academy/students-api";function T(e){return new Promise((function(t){setTimeout(t,e)}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),T(300).then((function(){return fetch(g+e,c)})).then((function(e){if(!e.ok)throw new Error("Oops something went wrong. Data loading error.");return e.json()}))}var N,k=function(e){return y(e)},S=function(e,t){return y(e,"POST",t)},_=function(e,t){return y(e,"PATCH",t)},C=function(e){return y(e,"DELETE")},A=function(e,t){return S("/todos?userId=".concat(e),t)},E=function(e){return C("/todos/".concat(e))},w=function(e,t,n){return _("/todos/".concat(e),{completed:t,title:n})},U=a.a.createContext([0]);!function(e){e.None="None",e.Load="Load",e.Add="Add",e.Delete="Delete",e.Update="Update",e.EmptyTitle="EmptyTitle"}(N||(N={}));var F,D=n(10),I=n.n(D),R=function(e){var t=e.title,n=e.setTitle,c=e.handleFormSubmit,o=e.toggleCompletedAllTodo,a=e.countActiveTodo,r=e.hasTodos;return Object(l.jsxs)("header",{className:"todoapp__header",children:[r&&Object(l.jsx)("button",{type:"button",className:I()("todoapp__toggle-all",{active:0===a}),onClick:o,"aria-labelledby":"completedAllTodos"}),Object(l.jsx)("form",{onSubmit:c,children:Object(l.jsx)("input",{type:"text",className:"todoapp__new-todo",placeholder:"What needs to be done?",value:t,onChange:n})})]})},J=a.a.memo((function(e){var t=e.todo,n=e.removeTodo,c=e.isToggleAll,a=e.handleUpdateTodoFormSubmit,r=e.isOnRender,s=t.title,i=t.id,u=Object(o.useState)(t.completed),d=Object(O.a)(u,2),b=d[0],j=d[1],p=Object(o.useState)(!1),h=Object(O.a)(p,2),v=h[0],x=h[1],g=Object(o.useState)(!1),T=Object(O.a)(g,2),y=T[0],N=T[1],k=Object(o.useState)(s),S=Object(O.a)(k,2),_=S[0],C=S[1],A=Object(o.useState)(!1),E=Object(O.a)(A,2),w=E[0],F=E[1],D=Object(o.useRef)(null);Object(o.useEffect)((function(){var e;v&&(null===(e=D.current)||void 0===e||e.focus())}),[v]),Object(o.useEffect)((function(){j(t.completed),C(s),F(!1)}),[t.completed,s,w]);var R=function(){var e=Object(m.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,!b),r&&j(!n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(e){0===_.length?(n(i),N(!1)):_===s||e||(x(!1),N(!0),a(i,b,_)),x(!1),N(!1)};Object(o.useEffect)((function(){N(!1)}),[t.completed,s]);var L=Object(o.useContext)(U);return Object(l.jsxs)("div",{className:I()("todo",{completed:b}),onDoubleClick:function(){x(!0)},children:[Object(l.jsx)("label",{className:"todo__status-label",children:Object(l.jsx)("input",{type:"checkbox",className:"todo__status",checked:b,onClick:function(){return R(i,t.completed)}})}),v?Object(l.jsx)("input",{type:"text",className:"todo__title-field",placeholder:"Empty todo will be deleted",value:_,onChange:function(e){return C(e.target.value)},onBlur:function(){return J()},onKeyUp:function(e){"Escape"===e.key&&(J(!0),F(!0)),"Enter"===e.key&&J()},ref:D}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"todo__title",children:s}),Object(l.jsx)("button",{type:"button",className:"todo__remove",onClick:function(){return n(i)},children:"\xd7"})]}),Object(l.jsxs)("div",{className:I()("modal overlay",{"is-active":L.includes(i)||c||y}),children:[Object(l.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(l.jsx)("div",{className:"loader"})]})]})})),L=a.a.memo((function(e){var t=e.todos,n=e.removeTodo,c=e.tempTodo,o=e.isToggleAll,a=e.handleUpdateTodoFormSubmit,r=e.isOnRender;return Object(l.jsxs)("section",{className:"todoapp__main",children:[t.map((function(e){return Object(l.jsx)(J,{todo:e,removeTodo:n,isToggleAll:o,handleUpdateTodoFormSubmit:a,isOnRender:r},e.id)})),c&&Object(l.jsx)(J,{todo:c,removeTodo:n,isToggleAll:o,handleUpdateTodoFormSubmit:a,isOnRender:r},0)]})})),P=function(e){var t=e.todos,n=e.removeTodo;return Object(l.jsxs)("footer",{className:"todoapp__footer",children:[Object(l.jsx)("span",{className:"todo-count",children:"".concat(v(t)," items left")}),Object(l.jsx)("nav",{className:"filter",children:Object.values(c).map((function(e){return Object(l.jsx)(i.b,{to:"/".concat(e),className:function(e){var t=e.isActive;return I()("filter__link",{selected:t})},children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))}),Object(l.jsx)("button",{type:"button",className:I()("todoapp__clear-completed",{"is-invisible":!x(t)}),onClick:function(){x(t)&&h(t,c.Completed).forEach((function(e){return n(e.id)}))},children:"Clear completed"})]})},H=function(e){var t=e.errorType,n=e.hasError,c=e.onNotificationClose,a=Object(o.useState)(""),r=Object(O.a)(a,2),s=r[0],i=r[1];return Object(o.useEffect)((function(){switch(t){case N.Add:case N.Delete:case N.Update:case N.Load:i("Unable to ".concat(t," a todo"));break;case N.EmptyTitle:i("Title can't be empty");break;default:i("")}}),[t]),Object(o.useEffect)((function(){var e=setTimeout((function(){return c()}),3e3);return function(){return clearTimeout(e)}}),[]),Object(l.jsxs)("div",{className:I()("notification","is-danger","is-light","has-text-weight-normal",{hidden:!n}),children:[Object(l.jsx)("button",{type:"button",className:"delete",onClick:c,"aria-label":"Close notification about an error"}),s]})},B=6755,G=function(){var e=Object(o.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!1),r=Object(O.a)(a,2),s=r[0],i=r[1],d=Object(o.useState)(N.None),p=Object(O.a)(d,2),x=p[0],g=p[1],T=Object(o.useState)(""),y=Object(O.a)(T,2),S=y[0],_=y[1],C=Object(o.useState)(null),F=Object(O.a)(C,2),D=F[0],I=F[1],J=Object(o.useState)([0]),G=Object(O.a)(J,2),K=G[0],M=G[1],W=Object(o.useState)(!1),q=Object(O.a)(W,2),z=q[0],Q=q[1],V=Object(o.useState)(v(n)),X=Object(O.a)(V,2),Y=X[0],Z=X[1],$=Object(o.useState)(!1),ee=Object(O.a)($,2),te=ee[0],ne=ee[1],ce=Object(o.useState)(!1),oe=Object(O.a)(ce,2),ae=oe[0],re=oe[1],se=function(e,t){var n=Object(o.useState)(JSON.parse(localStorage.getItem(e))||t),c=Object(O.a)(n,2),a=c[0],r=c[1];return[a,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]}("todos",[]),ie=Object(O.a)(se,2),ue=ie[0],le=ie[1],de=Object(u.m)().pathname,be=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("/todos?userId=".concat(B));case 3:t=e.sent,c(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),i(!0),g(N.Load);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),je=Object(o.useCallback)((function(e){c((function(t){return[].concat(Object(j.a)(t),[e])}))}),[]),pe=Object(o.useCallback)((function(e){g(e),i(!0)}),[]),fe=Object(o.useCallback)((function(){i(!1)}),[]),me=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M((function(e){return[].concat(Object(j.a)(e),[t])})),e.next=4,E(t);case 4:c((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),i(!0),pe(N.Delete);case 11:return e.prev=11,M([0]),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=16;break}return e.prev=1,e.next=4,A(B,t);case 4:n=e.sent,je(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),pe(N.Add);case 11:return e.prev=11,_(""),I(null),Q(!1),e.finish(11);case 16:case"end":return e.stop()}}),e,null,[[1,8,11,16]])})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(m.a)(f.a.mark((function e(t,n,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M([t]),e.prev=1,e.next=4,w(t,n,c);case 4:be(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),pe(N.Update),i(!0),re(!0);case 12:return e.prev=12,M([0]),ne(!1),re(!1),e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[1,7,12,17]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(o.useMemo)((function(){Z(v(n))}),[n]),Object(o.useEffect)((function(){be()}),[]),Object(o.useEffect)((function(){le(n)}),[n]),Object(l.jsxs)(U.Provider,{value:K,children:[Object(l.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(l.jsxs)("div",{className:"todoapp__content",children:[Object(l.jsx)(R,{title:S,setTitle:function(e){_(e.target.value)},handleFormSubmit:function(e){if(e.preventDefault(),!S.trim())return pe(N.EmptyTitle),void _("");var t={userId:B,id:0,title:S,completed:!1};I(Object(b.a)({},t)),Q(!0),Oe(t)},toggleCompletedAllTodo:function(){return n.forEach((function(e){return v(n)>0&&e.completed?e:he(e.id,!e.completed)})),ne(!0)},countActiveTodo:Y,hasTodos:!!n.length}),n.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(L,{todos:h(ue,de),removeTodo:me,tempTodo:D,isToggleAll:te,handleUpdateTodoFormSubmit:he,isOnRender:ae}),Object(l.jsx)(P,{todos:n,removeTodo:me})]})]}),s&&Object(l.jsx)(H,{errorType:x,hasError:s,onNotificationClose:fe})]})};!function(e){e.Home="/",e.All="/all",e.Active="/active",e.Completed="/completed",e.NotFound="*"}(F||(F={}));var K=function(){return Object(l.jsx)("div",{className:"notification is-danger is-light",children:"Oops... It seems you are lost. Page not found."})};s.a.render(Object(l.jsx)(i.a,{children:Object(l.jsxs)(u.d,{children:[Object(l.jsxs)(u.b,{path:"".concat(F.Home),element:Object(l.jsx)(d,{}),children:[Object(l.jsx)(u.b,{index:!0,element:Object(l.jsx)(G,{})}),Object(l.jsx)(u.b,{path:"".concat(F.All),element:Object(l.jsx)(G,{})}),Object(l.jsx)(u.b,{path:"".concat(F.Active),element:Object(l.jsx)(G,{})}),Object(l.jsx)(u.b,{path:"".concat(F.Completed),element:Object(l.jsx)(G,{})})]}),Object(l.jsx)(u.b,{path:"".concat(F.NotFound),element:Object(l.jsx)(K,{})})]})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.24d2ab70.chunk.js.map