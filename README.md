# CrudAngularFrontend

This project was generated with Angular CLI version 7.3.8 and using:
--------------------------------------------------------------------
- git version 2.16.1.windows.1
- node v10.15.3
- npm version 6.4.1


Install Software
----------------
- Install NodeJs, link download: https://nodejs.org/en/
- Install Git,    link download: https://git-scm.com/downloads
- Install VS Code link download: https://code.visualstudio.com/Download


Preparation before to run crud-angular-frontend
-----------------------------------------------
Type from Command Prompt (C:\ or other drive) as follow:

- npm install -g @angular/cli
- ng new crud-angular-frontend<br/><br/>
&nbsp;&nbsp;? Would you like to add Angular routing? Yes<br/>
&nbsp;&nbsp;? Which stylesheet format would you like to use? (Use arrow keys)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_(select CSS)_**<br/>
&nbsp;&nbsp;> CSS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCSS&nbsp;&nbsp;&nbsp;`[http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax]`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sass&nbsp;&nbsp;&nbsp;&nbsp;`[http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html]`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Less&nbsp;&nbsp;&nbsp;&nbsp;`[http://lesscss.org]`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stylus&nbsp;`[http://stylus-lang.com]`<br/>

- Run Visual Studio Code and open folder crud-angular-frontend. Select View and then Terminal
- Add other framework, from Terminal type:
  - npm install @angular/http
  - npm install angular-bootstrap-md
  - npm install @ng-bootstrap/ng-bootstrap
  - npm install font-awesome --save
  - npm install @angular/cdk
  - npm install ngx-image-viewer
  - npm install ng2-search-filter --save
  - npm install ngx-pagination --save
  - npm install exceljs
  - npm install jspdf jspdf-autotable
  - npm install file-saver



TEST REST API
-------------
Download repository 'golang-backend' from https://github.com/B19650112/golang-backend

Compile and Run Program golang-backend
--------------------------------------
- cd c:\Goweb\src\golang-backend
- go build
- golang-backend.exe

Run Program crud-angular-frontend
---------------------------------
- npm start
- From browser, type to address -> localhost:4200
- Login with username: **user01**, password: **12345678**

Test CRUD Tabel Product
-----------------------
- Select on the table for update, click button Cancel if not changed
- Select on the table for delete, click button No if not deleted
- Fill all field on form detail for add record.
- Blank one of the fields and click button Save to test the error message
- For search product name, type initial product on input search product
- Click button exit to exit form

Test Print Tabel Product
------------------------
- Select, print to Excel or PDF


solve the problem if failled create new project (ng new), do it bellow :
------------------------------------------------------------------------
- npm uninstall -g @angular/cli
- npm cache verify
- npm install -g @angular/cli@latest
- npm install


When use ngx-image-viewer, we found error at the console, like this:
- firefox browser: 'TypeError: The expression cannot be converted to return the specified type.'
- chrome browser : 'Uncaught (in promise) TypeError: Document not active'

solve the problem to error when using ngx-image-viewer do it bellow :
---------------------------------------------------------------------
- open file node_modules/screenfull/dist/screenfull.js 
- add condition at exit:function() as bellow:

&nbsp;&nbsp;&nbsp;&nbsp;exit: function () {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (document.fullscreen) {<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document [fn.exitFullscreen] ();<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;},


Command Angular
---------------
- Create new component : ng g c < component name > --skipTests
- Create new service   : ng g s < servicename >
- Create new guard     : ng g guard < guardname >
- Create new pipe      : ng g p < pipename >
- etc,

Link How To Use Angular Route Guards – Angular Authentication<br/>
https://www.agiratech.com/how-to-use-angular-route-guards-angular-authentication/


Command check Version
---------------------
- ng version
- go version
- node -v
- npm -version
- git version
<br/>
- by the way, the "progressbar" during the Excel and PDF printing process is not perfect,<br/>
&nbsp;&nbsp;and i'm sorry my english is not good.. :sweat_smile:
