
# Angular Basic

Angular is a full featured Javascript framework created and maintained by google and is used for building front-end part of a full stack application. Angular is very popular in large enterprise.

AngularJS was released on 2010. It is not recommanded and should be updated to angular.

Angular refers to version 2+. Right now we are using version 7 but 2-7 is the same frame work with few changes mostly under the hood.

# Why use Angular?

1) Organized front-end structure(Component, Model, Services)
2) Extremely powerful & full featured.
3) All-in-one solution (Routing, HTTP, RXJS etc).
4) Build powerful SPA (Single Page Application) apps.
5) MVC- model, view, controller design pattern.
6) Type Script. 
7) Fantastic CLI.

# Why you should know before learning angular?

Java Script Fundamentals (Objects, arrays, conditions etc)

# It may help to learn these first

1) Typescript
2) Classes
3) Hign Order Array Methods- forEach, map, filter.
4) Arrow Functions
5) Promises & Observables
6) MVC Pattern

# Uses

1) Uses TypeScript for static types (variables, functions, params)
2) Component based (like other frameworks)
3) Uses "services" to share data/fucntionality between components
4) Concept of modules (root module, form modules, http module etc)
5) Uses RxJS "observables" for async operations
6) Steep learning curve relative to other frameworks.

# Angular CLI

$ ng new myapp   ----------- create a new application

$ ng serve       ----------- run the dev server

$ ng build       ----------- will build out our asset

$ ng generate component components/todos  ---- to generate component 

$ ng g c components/todos  ---- to generate component 

$ ng generate service services/todos    ---- to generate service

$ ng g s services/todos    ---- to generate service

$ ng generate module app-routing ---- to generate module


We can use state management like ngrx and redux with Angular for large apps


# Installation Process

1) Install the nodeJS -- sudo apt install nodejs
2) Version check of nodeJS 
        npm --version
3) Install the Angular CLI -- sudo npm install -g @angular/cli
4) Angular version check
        ng --version
        
        
 # Project
 
 After creating a project we have to open the project on the visual studio. Then we will find the following files--
 
 1) Package.json -- It has all the dependencies and packages. (All the libraries will be available here. It also have scripts to       run and build the server.)
 
 2) Src -- This folder contains the main page. And that one is Index.html. This is the main page that load on the browser 
    <app-root></app-root> this is the tag the root app component.
    
 3) Angular.json -- In this file we have to provide all the styles, scripts, assets. We can import bootstrap or anything on this     file. (We can do the same on the Index.html)
 
 4) App -- This folder inside the src folder. This folder contains all the component, services.
 
 5) App.Module.ts -- This is the entry point to angular. And this is the meeting place for all the components. If we have to add     a new component then we have to add on this file on the declarations. If we have to add a module then we have to add on the
    module. Provider will add all the services. Bootstrap will do the main app component. All the component will be type script       file. And it will be .ts .    

 6) app.component.ts -- It has the selector which is the Html element. It also has the template url for the html and stylesheet       for the style sheet. We can add all the component over here.


