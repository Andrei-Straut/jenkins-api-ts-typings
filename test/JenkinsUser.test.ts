

import { IJenkinsUser       } from '../src/jenkins-ts-typings';
import { JenkinsUser        } from '../src/JenkinsUser';

let resourceLocation:string = '../resource/user/UserFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsUser fromJsonString", () => {
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user._class).toBe(jsonObject['_class']);
    });
    
    it("works if absoluteUrl property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.absoluteUrl).toBe(jsonObject['absoluteUrl']);
    });
    
    it("works if description property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.description).toBe(jsonObject['description']);
    });
    
    it("works if fullName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.fullName).toBe(jsonObject['fullName']);
    });
    
    it("works if id property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.id).toBe(jsonObject['id']);
    });
    
    it("works if property property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user.property).toBeDefined();
        expect(user.property).toBeInstanceOf(Array);
        expect(user.property.length).toBe(1);
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user._class).toBeUndefined();
    });
    
    it("works if absoluteUrl property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user.absoluteUrl).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user.description).toBeUndefined();
    });
    
    it("works if fullName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user.fullName).toBeUndefined();
    });
    
    it("works if id property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user.id).toBeUndefined();
    });
    
    it("works if property property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let user:IJenkinsUser = getUser(emptyResourceLocation);
        
        expect(user.property).toBeDefined();
        expect(user.property).toBeInstanceOf(Array);
        expect(user.property.length).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let user:IJenkinsUser = getUser(resourceLocation);
        
        expect(user._class).toBe(jsonObject['_class']);
        expect(user.absoluteUrl).toBe(jsonObject['absoluteUrl']);
        expect(user.description).toBe(jsonObject['description']);
        expect(user.fullName).toBe(jsonObject['fullName']);
        expect(user.id).toBe(jsonObject['id']);
        
        expect(user.property).toBeDefined();
        expect(user.property).toBeInstanceOf(Array);
        expect(user.property.length).toBe(1);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let user:IJenkinsUser = new JenkinsUser();
        
        expect(user._class).toBeUndefined();
        expect(user.absoluteUrl).toBeUndefined();
        expect(user.description).toBeUndefined();
        expect(user.fullName).toBeUndefined();
        expect(user.id).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let user:IJenkinsUser = new JenkinsUser();
        
        expect(user.property).toBeDefined();
        expect(user.property).toBeInstanceOf(Array);
        expect(user.property.length).toBe(0);
    });
})

function getJSON(jsonLocation:string):string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getUser(jsonLocation:string):IJenkinsUser {
    let jsonText = getJSON(jsonLocation);

    let user: IJenkinsUser = new JenkinsUser();
    user.fromJsonString(jsonText);

    return user;
}
