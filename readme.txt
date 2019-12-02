/*************************************************************************************************************************/
/****************************************** EMPLOYEE MANAGEMENT PROJECT **************************************************/
/*************************************************************************************************************************/

This is a demonstration project to show how to use React with Mobx. The project demonstrates how to create employee, update
employee and delete employee. Screenshots of the running project are also attached. 
You can download this github project and do the following to run the project


1) c:\for_github\mobx-employee-project>npm install
2) c:\for_github\mobx-employee-project>npm start
3) http://localhost:8080/ to view the front end


Assumptions:

Project assumes that the backend REST crud API is available  at the following end-point:
http://localhost:3001/employees

SAMPLE JSON:

[
    {
        "birthdate": "1990-01-01T23:28:56.782Z",
        "creationdate": "2019-11-29T04:51:18.965Z",
        "modificationdate": "2019-11-29T04:51:18.965Z",
        "address_details": {
            "address1": "4000 State Street",
            "address2": "Suite # 4000",
            "city": "Foster City",
            "state": "CA",
            "zip": "94404",
            "country": "US"
        },
        "contact_details": {
            "primary_email": "amit.patil@test.com",
            "secondary_email": "amit.patil1@test.com",
            "phone_no": "9251114444"
        },
        "status": "Active",
        "_id": "5de0a3c640f264345cb542b5",
        "id": "3",
        "firstname": "Amita",
        "middleinitial": "S",
        "lastname": "Patil",
        "ssn": "9251114448",
        "age": 30,
        "__v": 0
    },
    {
        "birthdate": "2019-12-04T20:00:00.000Z",
        "creationdate": "2019-12-01T05:36:56.779Z",
        "modificationdate": "2019-12-01T05:36:56.779Z",
        "address_details": {
            "address1": "r",
            "address2": "r",
            "city": "r",
            "state": "r",
            "zip": "r",
            "country": "r"
        },
        "contact_details": {
            "primary_email": "",
            "secondary_email": "",
            "phone_no": ""
        },
        "status": "Active",
        "_id": "5de351787f93ea15885f4823",
        "id": "16",
        "firstname": "r",
        "middleinitial": "r",
        "lastname": "r",
        "ssn": "r",
        "age": 22,
        "__v": 0
    },
    {
        "birthdate": "2019-12-04T20:00:00.000Z",
        "creationdate": "2019-12-01T06:13:32.428Z",
        "modificationdate": "2019-12-01T06:13:32.428Z",
        "address_details": {
            "address1": "1200 Foster City Blvd",
            "address2": "Suite # 1200",
            "city": "Foster City",
            "state": "CA",
            "zip": "94404",
            "country": "US"
        },
        "contact_details": {
            "primary_email": "seema@test.com",
            "secondary_email": "seema4@test.com",
            "phone_no": "9251112222"
        },
        "status": "Active",
        "_id": "5de352177f93ea15885f4824",
        "id": "20",
        "firstname": "Seema",
        "middleinitial": "N",
        "lastname": "Patil",
        "ssn": "9251114456",
        "age": 28,
        "__v": 0
    },
    {
        "birthdate": "1990-01-01T23:28:56.782Z",
        "creationdate": "2019-12-01T06:30:20.272Z",
        "modificationdate": "2019-12-01T06:30:20.272Z",
        "address_details": {
            "address1": "4000 State Street",
            "address2": "Suite # 4000",
            "city": "Foster City",
            "state": "CA",
            "zip": "94404",
            "country": "US"
        },
        "contact_details": {
            "primary_email": "amit.patil@test.com",
            "secondary_email": "amit.patil1@test.com",
            "phone_no": "9251114444"
        },
        "status": "Active",
        "_id": "5de35dfc7f93ea15885f4827",
        "id": "13",
        "firstname": "Amita",
        "middleinitial": "S",
        "lastname": "Patil",
        "ssn": "9251114461",
        "age": 30,
        "__v": 0
    }
]



Also added EmployeeSchema and EmployeeController that you can use to create the end-point using mongoose and nodejs.

"React and MobX together are a powerful combination. React renders the application state by providing mechanisms to translate it into a tree of renderable components. MobX provides the mechanism to store and update the application state that React then uses.

Both React and MobX provide an optimal and unique solutions to common problems in application development. React provides mechanisms to optimally render UI by using a virtual DOM that reduces the number of costly DOM mutations. MobX provides mechanisms to optimally synchronize application state with your React components by using a reactive virtual dependency state graph that is only updated when strictly needed and is never stale."
(Reference: https://mobx.js.org/README.html)



c:\for_github>npx create-react-app mobx-employee-project

Creating a new React app in c:\for_github\mobx-employee-project.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.19.0
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.9: The platform "win32" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.0.7: The platform "win32" is incompatible with this module.
info "fsevents@2.0.7" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.19.2", while you're on "1.19.0".
info To upgrade, run the following command:
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
success Saved 7 new dependencies.
info Direct dependencies
├─ react-dom@16.12.0
├─ react-scripts@3.2.0
└─ react@16.12.0
info All dependencies
├─ react-app-polyfill@1.0.4
├─ react-dev-utils@9.1.0
├─ react-dom@16.12.0
├─ react-error-overlay@6.0.3
├─ react-scripts@3.2.0
├─ react@16.12.0
└─ scheduler@0.18.0
Done in 48.36s.

Success! Created mobx-employee-project at c:\for_github\mobx-employee-project
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd mobx-employee-project
  yarn start

Happy hacking!



c:\for_github>cd mobx-employee-project

c:\for_github\mobx-employee-project>npm install
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\jest.cmd as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\jest
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\jest as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\jest
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\esvalidate.cmd as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\esprima
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\esparse.cmd as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\esprima
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\esvalidate as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\esprima
npm WARN rm not removing c:\for_github\mobx-employee-project\node_modules\.bin\esparse as it wasn't installed by c:\for_github\mobx-employee-project\node_modules\esprima
npm WARN css-loader@1.0.1 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-16-bootstrap-date-picker@5.1.2 requires a peer of react-bootstrap@^0.31.0 but none is installed. You must install peer dependencies yourself.
npm WARN mobx-react-booklopedia@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 909 packages and audited 10026 packages in 26.611s
found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
  
  
  
  
(Reference: https://github.com/idowald/BookLopedia-react-mobx)  