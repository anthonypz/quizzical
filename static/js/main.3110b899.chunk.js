(this.webpackJsonpquizzical=this.webpackJsonpquizzical||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),o=(n(14),n(3)),r=n(9),u=n(2),l=n(6),h=n(0);function j(e){return Object(h.jsxs)("div",{className:"welcome-screen",children:[Object(h.jsx)("h1",{className:"title",children:"Quizzical"}),Object(h.jsx)("p",{className:"description",children:"A short game with randomly generated questions."}),Object(h.jsx)("button",{className:"start-btn",onClick:e.handleClick,children:"Start quiz"})]})}function d(e){var t=e.data,n=e.isDone,c=e.handleDone,s=e.handleReplay,a=e.handleButton,i=e.score,o=t.map((function(e){return Object(h.jsxs)("div",{className:"quiz-question-group",children:[Object(h.jsx)("p",{className:"quiz-question",dangerouslySetInnerHTML:{__html:e.question}}),e.choices.map((function(t){return Object(h.jsx)("button",{className:"quiz-choices",style:{backgroundColor:t.isChosen?"#D6DBF5":"#f5f7fb"},onClick:function(e){return a(e,t.id)},name:e.id,dangerouslySetInnerHTML:{__html:t.choice}},t.id)}))]},e.id)}));return Object(h.jsxs)("div",{className:"quiz-screen",children:[o,n&&Object(h.jsxs)("p",{className:"final-score",children:["You scored ",i,"/5 correct answers"]}),n?Object(h.jsx)("button",{className:"quiz-btn",onClick:s,children:"Play again"}):Object(h.jsx)("button",{className:"quiz-btn",onClick:c,children:"Check answers"})]})}function b(){var e=s.a.useState(),t=Object(u.a)(e,2),n=t[0],c=t[1],a=s.a.useState(!1),i=Object(u.a)(a,2),b=i[0],f=i[1],O=s.a.useState(!1),m=Object(u.a)(O,2),p=m[0],C=m[1],q=s.a.useState(!1),x=Object(u.a)(q,2),g=x[0],z=x[1],N=s.a.useState(!1),k=Object(u.a)(N,2),v=k[0],y=k[1],S=s.a.useState(0),w=Object(u.a)(S,2),D=w[0],_=w[1];return s.a.useEffect((function(){fetch("https://opentdb.com/api.php?amount=5&category=9").then((function(e){return e.json()})).then((function(e){c(e.results.map((function(e){return{id:Object(l.a)(),question:e.question,choices:[].concat(Object(r.a)(e.incorrect_answers.map((function(e){return{choice:e,id:Object(l.a)(),isChosen:!1,isCorrect:!1}}))),[{choice:e.correct_answer,id:Object(l.a)(),isChosen:!1,isCorrect:!0}])}})).sort((function(e,t){return.5-Math.random()}))),C(!0)}))}),[v]),Object(h.jsx)(h.Fragment,{children:b&&p?Object(h.jsx)(d,{data:n,isDone:g,handleDone:function(){!function(){for(var e=0;e<n.length;e++)for(var t=0;t<n[e].choices.length;t++)n[e].choices[t].isChosen&&n[e].choices[t].isCorrect&&_((function(e){return e+1}))}(),z(!0)},handleReplay:function(){z(!1),_(0),y((function(e){return!e}))},handleButton:function(e,t){var n=e.target.name;c((function(e){return e.map((function(e){return e.id===n?Object(o.a)(Object(o.a)({},e),{},{choices:e.choices.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{isChosen:!e.isChosen}):Object(o.a)(Object(o.a)({},e),{},{isChosen:!1})}))}):e}))}))},score:D}):Object(h.jsx)(j,{handleClick:function(){f(!0)}})})}i.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3110b899.chunk.js.map