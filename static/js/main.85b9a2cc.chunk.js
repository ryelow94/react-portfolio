(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(18),c=a.n(s),n=(a(26),a(27),a(7)),o=a(9),r=a(11),l=a(10),d=[{title:"About Me",link:"/about-me",cName:"nav-links"},{title:"Portfolio",link:"/portfolio",cName:"nav-links"},{title:"Contact",link:"/contact",cName:"nav-links"},{title:"Resume",link:"/resume",cName:"nav-links"}],h=(a(28),a(13)),b=a(0),p=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("nav",{className:"NavbarItems",children:[Object(b.jsx)("h1",{className:"navbar-logo",children:"Ryan Logan"}),Object(b.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(b.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(b.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:d.map((function(t,a){return Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{onClick:e.handleClick,to:t.link,className:t.cName,children:t.title})},a)}))})]})}}]),a}(i.Component),m=p,u=a.p+"static/media/cookbook.0f4951b0.png",j=a.p+"static/media/sms.5699a829.png",f=[{title:"Tetris",img:a.p+"static/media/Tetris.01ac8e9b.png",description:" Our take on Tetris!",github:"https://github.com/reidk361/arcade-lite",deployed:"https://arcade-lite.herokuapp.com/",cName:"portfolio-items"},{title:"SMS Practice Reminder",img:j,description:" This app is designed to send sms reminders to complete practice goals for the day.",github:"https://github.com/ryelow94/SMS-Practice-Reminder",deployed:"https://sms-practice-reminder.herokuapp.com/",cName:"portfolio-items"},{title:"Cookbook",img:u,description:" This app allows the user to enter ingredients and/or intolerances into the search bar and view a list of recipes including ingredients entered and excluding intolerances entered",github:"https://github.com/ryelow94/Cookbook",deployed:"https://ryelow94.github.io/Cookbook/",cName:"portfolio-items"},{title:"Fitness Tracker",img:a.p+"static/media/fitness-tracker.055e2b41.png",description:"This app allows a user to track their workouts. It allows you to create a new workout as well as continue an existing one. Also, this app saves workout data on a Mongo database. ",github:"https://github.com/ryelow94/Fitness-Tracker",deployed:"https://safe-taiga-08781.herokuapp.com/?id=615900e7906bde00165232d4",cName:"portfolio-items"},{title:"Work Day Scheduler",img:a.p+"static/media/work-day-scheduler.bc731b1a.png",description:"This app allows the user to make a daily schedule. The app will save the schedule to local storage and allow the user to access the same information even if they close out the page.",github:"https://github.com/ryelow94/Work_Day_Scheduler",deployed:"https://ryelow94.github.io/Work_Day_Scheduler",cName:"portfolio-items"},{title:"Note Taker",img:a.p+"static/media/note-taker.271bfa19.png",description:"This app allows the user to write, save and delete notes that they enter into the webpage. The app also allows the user to refer back to the saved notes and read them. This app uses and express server to store the data the user enters.",github:"https://github.com/ryelow94/Note-Taker",deployed:"https://note-taker94.herokuapp.com/",cName:"portfolio-items"},{title:"Password Generator",img:a.p+"static/media/password-generator.40ef064a.png",description:"This app generates a random password based on the criteria the user selects. The possible criteria include lowercase letters, uppercase letters, numbers and special characters. Furthermore, the password can be between 8 and 128 characters long depending on the user's choice.",github:"https://github.com/ryelow94/RL-password-generator",deployed:"https://ryelow94.github.io/RL-password-generator/",cName:"portfolio-items"}],g=(a(35),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:f.map((function(e,t){return Object(b.jsx)("div",{className:"portfolio-card",children:Object(b.jsxs)("article",{className:"card",children:[Object(b.jsx)("h4",{className:e.cName,children:e.title}),Object(b.jsx)("img",{src:e.img,alt:""}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:e.github,children:"Github Repository"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:e.deployed,children:"Deployed Page"})]})},t)}))})})}}]),a}(i.Component)),x=g,O=(a(36),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"about-div",children:[Object(b.jsx)("h1",{children:"About Me"}),Object(b.jsxs)("p",{className:"about-text",children:["I am a full stack web developer with a background in financial services planning to leverage my experience working at a stock brokerage firm to develop scalable web solutions for every day business needs. I recently earned a full stack web developer certification via University of Oregon, and have achieved proficiency in skills such as HTML, CSS, JavaScript, React.js and more. Known as a good communicator and collaborator, I hope to use these skills to be an integral part of a development team. I\u2019m currently working with a team to revamp and modernize the website of a member firm (FINRA & SIPC) with the goal of achieving an intuitive UI in order to help the company better serve their clients. As a former financial adviser and operations manager, I have become well aware of the impact a well designed website can have on the day to day functions of a business. Having this awareness, I am excited to use my perspective to create meaningful and affective web solutions.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"If I'm not working, I'm probably playing music, my absolute favorite thing to do!"]})]})}}]),a}(i.Component)),k=O;a(37);function v(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("a",{className:"resume-link",href:"https://drive.google.com/file/d/1csU4AShqqGqMqqefh_Ax129IFnjZ5oQ5/view",children:" View My Resume on Google Docs "})})}var w=[{github:"https://github.com/ryelow94",facebook:"https://www.facebook.com/ryan.logan.984",email:"http://ryelow94@gmail.com",linkedIn:"http://www.linkedin.com/in/ryelow94"}],y=(a(38),function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("div",{children:w.map((function(e,t){return Object(b.jsxs)("div",{className:"footer-div",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"footer-link",href:e.github,children:"Github"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"footer-link",href:e.linkedIn,children:"LinkedIn"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"footer-link",href:e.facebook,children:"Facebook"})]},t)}))})})}),N=a(2),I=a(21),T=(a(39),function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),I.a.sendForm("service_666aw17","template_aeup5uq",e.target,"user_3SoMLZGL9ihSylRysiywE").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Subject"}),Object(b.jsx)("input",{type:"text",id:"subject",name:"subject"}),Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",id:"name",name:"name"}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",id:"email",name:"email"}),Object(b.jsx)("label",{children:"Message"}),Object(b.jsx)("input",{type:"text",id:"message",name:"message"}),Object(b.jsx)("input",{type:"submit"})]})})})}),S=function(){return Object(b.jsx)(h.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{children:Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{exact:!0,path:"/",children:Object(b.jsx)(k,{})}),Object(b.jsx)(N.a,{exact:!0,path:"/about-me",children:Object(b.jsx)(k,{})}),Object(b.jsx)(N.a,{exact:!0,path:"/portfolio",children:Object(b.jsx)(x,{})}),Object(b.jsx)(N.a,{exact:!0,path:"/contact",children:Object(b.jsx)(T,{})}),Object(b.jsx)(N.a,{exact:!0,path:"/resume",children:Object(b.jsx)(v,{})})]})}),Object(b.jsx)(y,{})]})})};c.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.85b9a2cc.chunk.js.map