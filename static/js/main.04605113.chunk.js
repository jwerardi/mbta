(this.webpackJsonpmbta=this.webpackJsonpmbta||[]).push([[0],{59:function(e,t,r){},60:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),i=r.n(n),c=r(46),o=r.n(c),s=(r(59),r(19)),u=(r(60),r(24)),l=r(80),d=r(9),j=function(e){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(l.a,{}),Object(a.jsx)(d.a,{d:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",children:e.children})]})},b=r(35),O=r(41),f=r(7),m=r(36),p=r.n(m),x=r(51),g=function(e,t){var r=Object(n.useState)(!1),a=Object(s.a)(r,2),i=a[0],c=a[1],o=Object(n.useState)(null),u=Object(s.a)(o,2),l=u[0],d=u[1],j=Object(n.useState)(!1),b=Object(s.a)(j,2),O=b[0],f=b[1],m=function(e){if(e.status>=200&&e.status<300)return e.json();throw new Error(e.statusText)};return Object(n.useEffect)((function(){c(!0),function(){var r=Object(x.a)(p.a.mark((function r(){var a,n;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(e,t);case 3:return a=r.sent,r.next=6,m(a);case 6:n=r.sent,d(n),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),f(r.t0);case 13:return r.prev=13,c(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,10,13,16]])})));return function(){return r.apply(this,arguments)}}()()}),[]),{isLoading:i,data:l,error:O}},h=r(74),v=r(28),S=r(76),T=r(75),w=r(30),P=r(72),y=r(37),F=r(73),C=r(52),B=r(77),I=r(23),D=r(78),H={bg:"black",color:"gold",border:"1px",borderColor:"gold"},L={margin:0,padding:"0.5rem",borderRight:"1px",borderBottom:"1px",borderColor:"gold",maxWidth:"200px"};function E(e){var t=e.columns,r=e.data,n=e.defaultSortBy,i=e.customTableHeader,c=e.defaultFilters,o=Object(w.useTable)({columns:t,data:r,initialState:{sortBy:[n],filters:[c]},disableSortRemove:!0},w.useFilters,w.useSortBy,w.usePagination),s=o.getTableProps,u=o.getTableBodyProps,l=o.headerGroups,j=o.prepareRow,b=o.page,O=o.canPreviousPage,m=o.canNextPage,p=o.pageOptions,x=o.gotoPage,g=o.nextPage,h=o.previousPage,v=o.setPageSize,S=o.state,T=S.pageIndex,E=S.pageSize;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a,{d:"flex",justifyContent:"space-between",children:[i,Object(a.jsxs)(d.a,{d:"flex",alignItems:"flex-end",flexDirection:"column",w:"300px",children:[Object(a.jsxs)(d.a,Object(f.a)(Object(f.a)({d:"flex",flexDirection:"column",alignItems:"center",w:"100%"},H),{},{children:[Object(a.jsxs)(P.a,{p:"2",children:[" Page ",Object(a.jsxs)("strong",{children:[" ",T+1," of ",p.length," "]})]}),Object(a.jsxs)(y.a,{d:"flex",alignItems:"center",marginBottom:"3",children:[Object(a.jsx)(F.a,{htmlFor:"paginationInput",children:"Go to page:"}),Object(a.jsx)(C.a,Object(f.a)(Object(f.a)({id:"paginationInput"},H),{},{type:"number",w:"40px",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;x(t)}}))]})]})),Object(a.jsx)(B.a,Object(f.a)(Object(f.a)({},H),{},{width:"100%",value:E,onChange:function(e){v(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(a.jsxs)("option",{value:e,children:["Show ",e," results per page"]},e)}))}))]})]}),Object(a.jsxs)(d.a,Object(f.a)(Object(f.a)(Object(f.a)({as:"table"},H),{},{w:"100%"},s()),{},{children:[Object(a.jsx)("thead",{children:l.map((function(e){return Object(a.jsx)("tr",Object(f.a)(Object(f.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(a.jsxs)(d.a,Object(f.a)(Object(f.a)(Object(f.a)({as:"th"},L),e.getHeaderProps()),{},{children:[Object(a.jsxs)(d.a,{d:"flex",flexDirection:"column",alignItems:"center",children:[Object(a.jsx)("div",Object(f.a)(Object(f.a)({},e.getSortByToggleProps()),{},{children:e.render("Header")})),Object(a.jsx)("div",{children:e.canFilter?e.render("Filter"):null})]}),e.isSorted?e.isSortedDesc?Object(a.jsx)(I.a,{style:{float:"left"},name:"arrow-down"}):Object(a.jsx)(I.a,{style:{float:"right"},name:"arrow-up"}):null]}))}))}))}))}),Object(a.jsx)("tbody",Object(f.a)(Object(f.a)({},u()),{},{children:b.map((function(e,t){return j(e),Object(a.jsx)("tr",Object(f.a)(Object(f.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(a.jsx)(d.a,Object(f.a)(Object(f.a)(Object(f.a)({as:"td"},L),e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(a.jsxs)(d.a,{d:"flex",w:"100%",justifyContent:"space-between",children:[Object(a.jsx)(D.a,Object(f.a)(Object(f.a)({},H),{},{width:"200px",onClick:function(){return h()},disabled:!O,children:"Previous Page"})),Object(a.jsx)(D.a,Object(f.a)(Object(f.a)({},H),{},{width:"200px",onClick:function(){return g()},disabled:!m,children:"Next Page"}))]})]})}var k=function(e){return Object(a.jsx)(E,Object(f.a)({},e))};k.defaultProps={defaultSortBy:{},data:[],columns:[],customTableHeader:Object(a.jsx)(a.Fragment,{})};var N=k,R=r(79);function z(e){var t=e.column,r=t.filterValue,n=t.setFilter,c=t.preFilteredRows,o=t.id,s=i.a.useMemo((function(){var e=new Set;return c.forEach((function(t){e.add(t.values[o])})),Object(O.a)(e.values())}),[o,c]);return Object(a.jsxs)(B.a,Object(f.a)(Object(f.a)({},H),{},{value:r,onChange:function(e){n(e.target.value||void 0)},children:[Object(a.jsx)("option",{value:"",children:"All"}),s.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]}))}function G(e){var t=e.column,r=(t.filterValue,t.setFilter);return Object(a.jsx)(R.a,{onChange:function(e){return r(e.target.checked)},children:"Show past departures"})}var M=function(e){var t=e.upcomingDepartures,r=Object(n.useMemo)((function(){return[{Header:"Train #",accessor:"trainNumber",Filter:z,filter:"equals"},{Header:"Stop",accessor:"stop",Filter:z,filter:"equals"},{Header:"Route",accessor:"routeName",Filter:z,filter:"equals"},{Header:"Time",accessor:"formattedTime",Filter:G,filter:function(e,t,r){var a=new Date;return r?e:e.filter((function(e){return 1===Object(v.a)(e.original.time,a)}))},sortType:function(e,t){return Object(v.a)(null===e||void 0===e?void 0:e.original.time,null===t||void 0===t?void 0:t.original.time)}},{Header:"Status",accessor:"status",disableFilters:!0}]}),[]),i=new Date;return Object(a.jsx)(N,{customTableHeader:Object(a.jsxs)(d.a,{w:"100%",children:[Object(a.jsx)(P.a,{marginLeft:"0",fontSize:"3xl",children:Object(T.a)(i,"PPPP")}),Object(a.jsx)(P.a,{marginLeft:"4",fontSize:"2xl",children:Object(T.a)(i,"p")}),Object(a.jsx)(P.a,{textAlign:"center",fontSize:"4xl",children:"MBTA Commuter Rail Departure Board"})]}),data:t,defaultSortBy:{id:"formattedTime"},defaultFilters:{id:"formattedTime",value:!1},columns:r})};M.defaultProps={upcomingDepartures:[]};var _=M,A="hh:mm:ss a",q=function(e){var t=g("https://api-v3.mbta.com/schedules?filter[route]=".concat(e.routeQueryString,"\n    &filter[max_time]=24:00\n    &include=route,trip,stop,prediction"),{method:"GET"}),r=t.isLoading,i=t.error,c=t.data,o=Object(n.useState)([]),u=Object(s.a)(o,2),l=u[0],j=u[1],m=function(e){var t=e.predictedTime,r=e.originalTime;return t===r?r:Object(a.jsxs)("details",{children:[Object(a.jsx)("summary",{children:t}),"Original ",r]})},p=function(e,t){if(e){var r="On Time",n=Object(h.a)(e);if(t){var i=Object(v.a)(t,n),c=Object(S.a)(t,n);return 1===i?r="Late ".concat(c):-1===i&&(r="Early ".concat(c)),{timeISO:n,formattedTime:Object(a.jsx)(m,{predictedTime:Object(T.a)(t,A),originalTime:Object(T.a)(n,A)}),status:r}}return{timeISO:n,formattedTime:Object(T.a)(n,A),status:r}}return{timeISO:null,formattedTime:null,status:null}};return Object(n.useEffect)((function(){if(c){var e=function(e){var t=e.included,r=e.data,n=t.reduce((function(e,t){return Object(f.a)(Object(f.a)({},e),{},Object(b.a)({},t.type,[].concat(Object(O.a)(e[t.type]||[]),[t])))}),{}),i=n.prediction,c=n.route,o=n.stop,s=n.trip;return r.map((function(e){var t,r,n,u,l,d,j,b,O,f=(d=null===(t=e.relationships.prediction.data)||void 0===t?void 0:t.id)&&i.find((function(e){return e.id===d})),m=(j=e.relationships.route.data.id,c.find((function(e){return e.id===j}))),x=(b=e.relationships.stop.data.id,o.find((function(e){return e.id===b}))),g=(O=e.relationships.trip.data.id,s.find((function(e){return e.id===O}))),v=f&&Object(h.a)(null===(r=f.attributes)||void 0===r?void 0:r.arrival_time),S=p(null===(n=e.attributes)||void 0===n?void 0:n.arrival_time,v),T=S.formattedTime,w=S.timeISO,P=S.status,y=f&&Object(h.a)(null===(u=f.attributes)||void 0===u?void 0:u.departure_time),F=p(null===(l=e.attributes)||void 0===l?void 0:l.departure_time,y),C=F.formattedTime,B=F.timeISO,I=F.status||Object(a.jsxs)(a.Fragment,{children:["Last stop: ",P]}),D=C||Object(a.jsxs)(a.Fragment,{children:["Last stop: ",T]}),H=B||w;return{trainNumber:g.attributes.name,stop:x.attributes.name,routeName:m.id,formattedTime:D,status:I,time:H,arrivalTime:w,departureTime:B}}))}(c);j(e)}}),[c]),Object(a.jsxs)(d.a,{w:"80%",color:"gold",children:[r&&Object(a.jsx)("div",{children:"loading..."}),i&&Object(a.jsx)("pre",{children:i.toString()}),Object(a.jsx)(_,{upcomingDepartures:l})]})};q.defaultProps={};var V=q;var J=function(){var e=g("https://api-v3.mbta.com/routes?type=2",{method:"GET"}),t=e.isLoading,r=e.error,i=e.data,c=Object(n.useState)(),o=Object(s.a)(c,2),u=o[0],l=o[1];return Object(n.useEffect)((function(){document.title="MBTA Commuter Rail Departure Board";var e=i&&i.data.map((function(e){return e.id})).toString();l(e)}),[i]),Object(a.jsxs)(j,{children:[t&&Object(a.jsx)("div",{children:"loading..."}),r&&Object(a.jsx)("pre",{children:r.toString()}),u&&Object(a.jsx)(V,{routeQueryString:u,isLoading:t,error:r})]})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,81)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),Q()}},[[70,1,2]]]);
//# sourceMappingURL=main.04605113.chunk.js.map