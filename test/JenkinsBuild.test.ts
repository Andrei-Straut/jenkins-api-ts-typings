

import { IJenkinsBuild          } from '../src/jenkins-ts-typings';
import { JenkinsBuild           } from '../src/JenkinsBuild';

let resourceLocation:string = '../resource/build/BuildFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsBuild fromJsonString", () => {
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build._class).toBe(jsonObject['_class']);
    });
    
    it("works if actions property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.actions).toEqual(jsonObject['actions']);
    });
    
    it("works if artifacts property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.artifacts).toEqual(jsonObject['artifacts']);
    });
    
    it("works if building property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.building).toBe(jsonObject['building']);
    });
    
    it("works if description property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.description).toBe(jsonObject['description']);
    });
    
    it("works if displayName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.displayName).toBe(jsonObject['displayName']);
    });
    
    it("works if duration property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.duration).toBe(jsonObject['duration']);
    });
    
    it("works if estimatedDuration property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.estimatedDuration).toBe(jsonObject['estimatedDuration']);
    });
    
    it("works if executor property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.executor).toEqual(jsonObject['executor']);
    });
    
    it("works if fullDisplayName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.fullDisplayName).toBe(jsonObject['fullDisplayName']);
    });
    
    it("works if id property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.id).toBe(jsonObject['id']);
    });
    
    it("works if keepLog property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.keepLog).toBe(jsonObject['keepLog']);
    });
    
    it("works if number property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.number).toBe(jsonObject['number']);
    });
    
    it("works if queueId property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.queueId).toBe(jsonObject['queueId']);
    });
    
    it("works if result property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.result).toBe(jsonObject['result']);
    });
    
    it("works if timestamp property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.timestamp).toBe(jsonObject['timestamp']);
    });
    
    it("works if date property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.date).toEqual(new Date(jsonObject['timestamp']));
    });
    
    it("works if url property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.url).toBe(jsonObject['url']);
    });
    
    it("works if builtOn property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.builtOn).toBe(jsonObject['builtOn']);
    });
    
    it("works if culprits property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.culprits).toEqual(jsonObject['culprits']);
    });
    
    it("works if mavenArtifacts property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.mavenArtifacts).toEqual(jsonObject['mavenArtifacts']);
    });
    
    it("works if mavenVersionUsed property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build.mavenVersionUsed).toBe(jsonObject['mavenVersionUsed']);
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build._class).toBeUndefined();
    });
    
    it("works if actions property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.actions).toBeDefined();
        expect(build.actions).toBeInstanceOf(Array);
        expect(build.actions.length).toBe(0);
    });
    
    it("works if artifacts property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.artifacts).toBeDefined();
        expect(build.artifacts).toBeInstanceOf(Array);
        expect(build.artifacts.length).toBe(0);
    });
    
    it("works if building property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.building).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.description).toBeUndefined();
    });
    
    it("works if displayName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.displayName).toBeUndefined();
    });
    
    it("works if duration property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.duration).toBeUndefined();
    });
    
    it("works if estimatedDuration property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.estimatedDuration).toBeUndefined();
    });
    
    it("works if executor property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.executor).toBeDefined();
        expect(build.executor).toBeInstanceOf(Array);
        expect(build.executor.length).toBe(0);
    });
    
    it("works if fullDisplayName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.fullDisplayName).toBeUndefined();
    });
    
    it("works if id property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.id).toBeUndefined();
    });
    
    it("works if keepLog property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.keepLog).toBeUndefined();
    });
    
    it("works if number property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.number).toBeUndefined();
    });
    
    it("works if queueId property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.queueId).toBeUndefined();
    });
    
    it("works if result property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.result).toBeUndefined();
    });
    
    it("works if timestamp property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.timestamp).toBeUndefined();
    });
    
    it("works if date property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.date).toBeUndefined();
    });
    
    it("works if url property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.url).toBeUndefined();
    });
    
    it("works if builtOn property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.builtOn).toBeUndefined();
    });
    
    it("works if culprits property empty set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.culprits).toBeDefined();
        expect(build.culprits).toBeInstanceOf(Array);
        expect(build.culprits.length).toBe(0);
    });
    
    it("works if mavenArtifacts property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.mavenArtifacts).toBeDefined();
        expect(build.mavenArtifacts).toBeInstanceOf(Array);
        expect(build.mavenArtifacts.length).toBe(0);
    });
    
    it("works if mavenVersionUsed property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let build:IJenkinsBuild = getBuild(emptyResourceLocation);
        
        expect(build.mavenVersionUsed).toBeUndefined();
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let build:IJenkinsBuild = getBuild(resourceLocation);
        
        expect(build._class).toBe(jsonObject['_class']);
        expect(build.number).toBe(jsonObject['number']);
        expect(build.url).toBe(jsonObject['url']);
        expect(build.displayName).toBe(jsonObject['displayName']);
        expect(build.fullDisplayName).toBe(jsonObject['fullDisplayName']);
        expect(build.description).toBe(jsonObject['description']);
        expect(build.id).toBe(jsonObject['id']);
        expect(build.queueId).toBe(jsonObject['queueId']);
        expect(build.result).toBe(jsonObject['result']);
        expect(build.duration).toBe(jsonObject['duration']);
        expect(build.estimatedDuration).toBe(jsonObject['estimatedDuration']);
        expect(build.timestamp).toBe(jsonObject['timestamp']);
        expect(build.date).toEqual(new Date(jsonObject['timestamp']));
        expect(build.building).toBe(jsonObject['building']);
        expect(build.keepLog).toBe(jsonObject['keepLog']);
        expect(build.builtOn).toBe(jsonObject['builtOn']);
        expect(build.mavenVersionUsed).toBe(jsonObject['mavenVersionUsed']);
        
        expect(build.actions).toEqual(jsonObject['actions']);
        expect(build.artifacts).toEqual(jsonObject['artifacts']);
        expect(build.mavenArtifacts).toEqual(jsonObject['mavenArtifacts']);
        expect(build.executor).toEqual(jsonObject['executor']);
        expect(build.culprits).toEqual(jsonObject['culprits']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let build:IJenkinsBuild = new JenkinsBuild();
        
        expect(build._class).toBeUndefined();
        expect(build.number).toBeUndefined();
        expect(build.url).toBeUndefined();
        expect(build.displayName).toBeUndefined();
        expect(build.fullDisplayName).toBeUndefined();
        expect(build.description).toBeUndefined();
        expect(build.id).toBeUndefined();
        expect(build.queueId).toBeUndefined();
        expect(build.result).toBeUndefined();
        expect(build.duration).toBeUndefined();
        expect(build.estimatedDuration).toBeUndefined();
        expect(build.timestamp).toBeUndefined();
        expect(build.date).toBeUndefined();
        expect(build.building).toBeUndefined();
        expect(build.keepLog).toBeUndefined();
        expect(build.builtOn).toBeUndefined();
        expect(build.mavenVersionUsed).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let build:IJenkinsBuild = new JenkinsBuild();
        
        expect(build.actions).toBeDefined();
        expect(build.actions).toBeInstanceOf(Array);
        expect(build.actions.length).toBe(0);
        
        expect(build.changeSets).toBeDefined();
        expect(build.changeSets).toBeInstanceOf(Array);
        expect(build.changeSets.length).toBe(0);
        
        expect(build.artifacts).toBeDefined();
        expect(build.artifacts).toBeInstanceOf(Array);
        expect(build.artifacts.length).toBe(0);
        
        expect(build.mavenArtifacts).toBeDefined();
        expect(build.mavenArtifacts).toBeInstanceOf(Array);
        expect(build.mavenArtifacts.length).toBe(0);
        
        expect(build.executor).toBeDefined();
        expect(build.executor).toBeInstanceOf(Array);
        expect(build.executor.length).toBe(0);
        
        expect(build.culprits).toBeDefined();
        expect(build.culprits).toBeInstanceOf(Array);
        expect(build.culprits.length).toBe(0);
    });
})

function getJSON(jsonLocation:string):string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getBuild(jsonLocation:string):IJenkinsBuildr {
    let jsonText = getJSON(jsonLocation);

    let build: IJenkinsBuild = new JenkinsBuild();
    build.fromJsonString(jsonText);

    return build;
}