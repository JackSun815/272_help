"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8088],{1902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),o=t(8453);const s={sidebar_position:1},r="Understanding MVC",l={id:"Key-Concepts/create-a-page",title:"Understanding MVC",description:"To know the Model-View-Controller, you must be the Models, Views and Controllers...",source:"@site/docs/Key-Concepts/create-a-page.md",sourceDirName:"Key-Concepts",slug:"/Key-Concepts/create-a-page",permalink:"/272_help/docs/Key-Concepts/create-a-page",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/272_help/docs/category/key-concepts"},next:{title:"MVC in Ruby on Rails",permalink:"/272_help/docs/Key-Concepts/create-a-document"}},a={},c=[{value:"Model",id:"model",level:2},{value:"Key Points",id:"key-points",level:3},{value:"View",id:"view",level:2},{value:"Key Points",id:"key-points-1",level:3},{value:"Controller",id:"controller",level:2},{value:"Key Points",id:"key-points-2",level:3},{value:"How They Work Together",id:"how-they-work-together",level:2},{value:"Benefits of MVC",id:"benefits-of-mvc",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"understanding-mvc",children:"Understanding MVC"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To know the Model-View-Controller, you must ",(0,i.jsx)(n.code,{children:"be"})," the Models, Views and Controllers..."]})}),"\n",(0,i.jsx)(n.p,{children:"Model-View-Controller (MVC) is a software design pattern that separates an application into three main logical components: the Model, the View, and the Controller. Each of these components handles specific development aspects of an application. MVC is widely used in web application development with numerous frameworks providing explicit support for the pattern. This tutorial aims to demystify MVC, breaking down its components and their interactions."}),"\n",(0,i.jsx)(n.h2,{id:"model",children:"Model"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Taking Care of Business"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. For example, a Customer model might retrieve customer information from the database, operate on it, and then pass those results back to the controller."}),"\n",(0,i.jsx)(n.h3,{id:"key-points",children:"Key Points"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Represents data and business logic."}),"\n",(0,i.jsx)(n.li,{children:"Independently manages its data structure."}),"\n",(0,i.jsx)(n.li,{children:"No direct interaction with the View."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"view",children:"View"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Looking good"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The View component is used for all the UI logic of the application. It presents data to the user and specifies the UI elements based on the data received from the Model. Importantly, the View is not responsible for processing data; it only displays the data that is received from the Controller in the final format."}),"\n",(0,i.jsx)(n.h3,{id:"key-points-1",children:"Key Points"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Responsible for display logic."}),"\n",(0,i.jsx)(n.li,{children:"Passively renders data provided by the Controller."}),"\n",(0,i.jsx)(n.li,{children:"May include presentation-specific elements like CSS for styling."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"controller",children:"Controller"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Holding it All Together"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Controller acts as an interface between Model and View components, processing all the business logic and incoming requests, manipulating data using the Model component, and interacting with the Views to render the final output. For instance, when a user requests a web page, the Controller will prepare the necessary data by calling the appropriate models. It then chooses a view and responds to the user with it."}),"\n",(0,i.jsx)(n.h3,{id:"key-points-2",children:"Key Points"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Processes all the business logic."}),"\n",(0,i.jsx)(n.li,{children:"Takes user input and converts it to commands for the Model or View."}),"\n",(0,i.jsx)(n.li,{children:"Acts as the coordinator between the Model and the View."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-they-work-together",children:"How They Work Together"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User Interaction: The user interacts with the View, performing actions such as clicking a button or submitting a form."}),"\n",(0,i.jsx)(n.li,{children:"Controller Receives Request: The request is sent to the Controller, which then processes the request. This might involve validating data, querying the database, or other operations."}),"\n",(0,i.jsx)(n.li,{children:"Model Interaction: If the operation involves data manipulation or retrieval, the Controller interacts with the Model, which performs the data operations."}),"\n",(0,i.jsx)(n.li,{children:"View Rendering: Once the Controller has executed the business logic, it selects a View and passes the model data to it. The View then generates the UI, which is presented to the user."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"benefits-of-mvc",children:"Benefits of MVC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Separation of Concerns: Dividing the application into different components that handle specific development aspects makes it easier to manage and scale the application."}),"\n",(0,i.jsx)(n.li,{children:"Easier Debugging and Testing: Since components are independent, specific parts of the application can be tested and debuged in isolation."}),"\n",(0,i.jsx)(n.li,{children:"Adaptive and Extensible: Changes in the business logic or UI can be made with minimal impact on the overall system. New functionalities can be added more easily."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"MVC is a powerful and popular pattern for creating web applications. Its clear separation of concerns makes applications easier to extend and maintain. By understanding the roles of Models, Views, and Controllers, developers can efficiently organize code and enhance the development process. While MVC can initially seem complex, its benefits for large-scale and long-term projects are substantial, making it a foundational concept in software development."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);