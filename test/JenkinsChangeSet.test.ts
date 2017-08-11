

import { IJenkinsChangeSet      } from '../src/jenkins-ts-typings';
import { JenkinsChangeSet       } from '../src/JenkinsChangeSet';

let resourceLocation:string = '../resource/changeset/ChangeSetFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsChangeSet fromJsonString", () => {
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet._class).toBe(jsonObject['_class']);
    });
    
    it("works if affectedPaths property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.affectedPaths).toEqual(jsonObject['affectedPaths']);
    });
    
    it("works if commitId property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.commitId).toBe(jsonObject['commitId']);
    });
    
    it("works if timestamp property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.timestamp).toBe(jsonObject['timestamp']);
    });
    
    it("works if authorData property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.authorData).toEqual(jsonObject['author']);
    });
    
    it("works if authorEmail property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.authorEmail).toBe(jsonObject['authorEmail']);
    });
    
    it("works if comment property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.comment).toBe(jsonObject['comment']);
    });
    
    it("works if date property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.date).toEqual(new Date(jsonObject['date']));
    });
    
    it("works if id property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.id).toBe(jsonObject['id']);
    });
    
    it("works if msg property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.msg).toBe(jsonObject['msg']);
    });
    
    it("works if paths property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet.paths).toEqual(jsonObject['paths']);
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet._class).toBeUndefined();
    });
    
    it("works if affectedPaths property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.affectedPaths).toBeDefined();
        expect(changeSet.affectedPaths).toBeInstanceOf(Array);
        expect(changeSet.affectedPaths.length).toBe(0);
    });
    
    it("works if commitId property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.commitId).toBeUndefined();
    });
    
    it("works if timestamp property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.timestamp).toBeUndefined();
    });
    
    it("works if authorData property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.authorData).toBeUndefined();
    });
    
    it("works if authorEmail property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.authorEmail).toBeUndefined();
    });
    
    it("works if comment property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.comment).toBeUndefined();
    });
    
    it("works if date property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.date).toBeUndefined();
    });
    
    it("works if id property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.id).toBeUndefined();
    });
    
    it("works if msg property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.msg).toBeUndefined();
    });
    
    it("works if paths property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(emptyResourceLocation);
        
        expect(changeSet.paths).toBeDefined();
        expect(changeSet.paths).toBeInstanceOf(Array);
        expect(changeSet.paths.length).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let changeSet:IJenkinsChangeSet = getChangeSet(resourceLocation);
        
        expect(changeSet._class).toBe(jsonObject['_class']);
        expect(changeSet.affectedPaths).toEqual(jsonObject['affectedPaths']);
        expect(changeSet.commitId).toBe(jsonObject['commitId']);
        expect(changeSet.timestamp).toBe(jsonObject['timestamp']);
        expect(changeSet.authorEmail).toBe(jsonObject['authorEmail']);
        expect(changeSet.comment).toBe(jsonObject['comment']);
        expect(changeSet.date).toEqual(new Date(jsonObject['date']));
        expect(changeSet.id).toBe(jsonObject['id']);
        expect(changeSet.msg).toBe(jsonObject['msg']);
        expect(changeSet.authorData).toEqual(jsonObject['author']);
        expect(changeSet.paths).toEqual(jsonObject['paths']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let changeSet:IJenkinsChangeSet = new JenkinsChangeSet();
        
        expect(changeSet._class).toBeUndefined();
        expect(changeSet.commitId).toBeUndefined();
        expect(changeSet.timestamp).toBeUndefined();
        expect(changeSet.authorEmail).toBeUndefined();
        expect(changeSet.comment).toBeUndefined();
        expect(changeSet.date).toBeUndefined();
        expect(changeSet.id).toBeUndefined();
        expect(changeSet.msg).toBeUndefined();
        expect(changeSet.authorData).toBeUndefined();
        expect(changeSet.author).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let changeSet:IJenkinsChangeSet = new JenkinsChangeSet();
        
        expect(changeSet.affectedPaths).toBeDefined();
        expect(changeSet.affectedPaths).toBeInstanceOf(Array);
        expect(changeSet.affectedPaths.length).toBe(0);
        
        expect(changeSet.paths).toBeDefined();
        expect(changeSet.paths).toBeInstanceOf(Array);
        expect(changeSet.paths.length).toBe(0);
    });
})

function getJSON(jsonLocation:string):string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getChangeSet(jsonLocation:string):IJenkinsChangeSet {
    let jsonText = getJSON(jsonLocation);

    let changeSet: IJenkinsChangeSet = new JenkinsChangeSet();
    changeSet.fromJsonString(jsonText);

    return changeSet;
}