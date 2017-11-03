[![Build Status](https://www.andreistraut.info/jenkins/buildStatus/icon?job=Jenkins-API-TS-Typings-master)](https://www.andreistraut.info/jenkins/job/Jenkins-API-TS-Typings-master) [![Tests](https://img.shields.io/jenkins/t/https/www.andreistraut.info/jenkins/view/All/job/Jenkins-API-TS-Typings-master.svg)](https://www.andreistraut.info/jenkins/view/All/job/Jenkins-API-TS-Typings-master/) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

# Jenkins JSON API TypeScript Typings
NPM: https://www.npmjs.com/package/jenkins-api-ts-typings  
Jenkins: https://www.andreistraut.info/jenkins/view/Jenkins%20TS%20Typings/

This library offers a set of classes to use when working with Jenkins JSON API. Jenkins Job, Build, User, View, Changeset and Node / Computer are supported

## Installation and usage

### Install from NPM:
In your project's root folder:
```
npm install --save jenkins-api-ts-typings
```
In systemjs.config.js:
```javascript
map: {
    'jenkins-api-ts-typings': 'npm:jenkins-api-ts-typings'
},
packages: {
    'jenkins-api-ts-typings': {
        main: './dist/jenkins-api-ts-typings.es6.js', 
        defaultExtension: 'js'
    }
}
```

### Build from source:
In the project's root folder, after git clone:
```
npm install
npm run build-pkg
```
This generates in the ```/dist``` folder:
- the full unpacked artifact (including the git revision built - ```gitinfo```)
- the library's packed artifact file (.tar.gz)

### Run tests:
```
npm run test
```
Run tests with linting and coverage reporting:
```
npm run test:prod
```
This library is based on [this excellent TS starter kit](https://github.com/alexjoverm/typescript-library-starter), so all commands/scripts described in there are also available for this library.


### Usage
After installation, just import normally:
```javascript
import { IJenkinsBuild } from 'jenkins-api-ts-typings';
import { JenkinsBuild } from 'jenkins-api-ts-typings';
```
For each class, you can feed it the corresponding Jenkins JSON response:
```javascript
let jsonText = // some JSON string that Jenkins returns
let build: IJenkinsBuild = new JenkinsBuild();
build.fromJsonString(jsonText);
```

or, more simply, without using ```JSON.stringify``` (since version 0.3.0):
```javascript
let json = // some JSON
let build: IJenkinsBuild = new JenkinsBuild();
build.fromJson(jsonText);
```

## Features and limitations
- Some of the types are not as of yet supported, and as such are defined as ```any``` within their containing objects:
-- Job: actions, health report, property, queue item, scm, modules
-- Build: actions, artifacts, maven artifacts, executor, culprits
-- Changeset: paths
-- Node: actions, executors, load statistics, monitor data, offline cause, one off executors
Some of these properties will be implemented in the future. Also, if json data is found in the response, these values are set (while maintaining ```any``` type)
- When calling ```fromJsonString(jsonData:string)``` on an object, the JSON string parameter value is also kept, and accessible later via ```getJsonData()```
- Sub objects (i.e. builds of a job, user of a changeset) are not automatically parsed from JSON, they need to be parsed separately and then set into their container
- All array objects (including ```Array<any>``` types) are automatically initialized in the class contructors. All value objects (string, number, etc) remain as ```undefined``` until they are set:
```javascript
let build:IJenkinsBuild = new JenkinsBuild();
build.url === undefined     // true
build.name === undefined    // true
build.actions === undefined // false
build.actions.length        // 0
```