

import { IJenkinsAction          } from '../src/jenkins-ts-typings';
import { JenkinsAction           } from '../src/JenkinsAction';

let resourceLocation:string = '../resource/action/ActionFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsAction", () => {
    
    it("works if getJsonData returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
    });
    
    it("works if data property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(4);
        
        expect(action.get("parameters")).toBeInstanceOf(Array);
        expect(action.get("parameters").length).toBe(3);
        
        expect(action.get("causes")).toBeInstanceOf(Array);
        expect(action.get("causes").length).toBe(1);
        
        expect(action.get("queuingDurationMillis")).toBe(643572);
        
        expect(action.get("totalDurationMillis")).toBe(2294910);
    });
    
    it("works if data property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(4);
        
        expect(action.get("parameters")).toBeInstanceOf(Array);
        expect(action.get("parameters").length).toBe(3);
        
        expect(action.get("causes")).toBeInstanceOf(Array);
        expect(action.get("causes").length).toBe(1);
        
        expect(action.get("queuingDurationMillis")).toBe(643572);
        
        expect(action.get("totalDurationMillis")).toBe(2294910);
    });
    
    it("works if _class property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action._class).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action._class).toBeUndefined();
    });
    
    it("works if data property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(0);
    });
    
    it("works if data property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(4);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(4);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let action:IJenkinsAction = new JenkinsAction();
        
        expect(action._class).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let action:IJenkinsAction = new JenkinsAction();
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(0);
    });
    
    it("works if isClass method returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.isClass(jsonObject['_class'])).toBeTruthy();
    });
    
    it("works if isClass method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.isClass(jsonObject['_class'])).toBeTruthy();
    });
    
    it("works if isClass method returns correct results with empty json (fromJsonString)", () => {
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.isClass("")).toBeFalsy();
    });
    
    it("works if isClass method returns correct results with empty json", () => {
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.isClass("")).toBeFalsy();
    });
    
    it("works if isClass method returns correct results for undefined _class", () => {
        let action:IJenkinsAction = new JenkinsAction();
        
        expect(action.isClass("")).toBeFalsy();
    });
    
    it("works if isClass method returns correct results for undefined method parameter", () => {
        let action:IJenkinsAction = new JenkinsAction();
        action._class = "SomeAction"
        
        expect(action.isClass(undefined)).toBeFalsy();
    });
    
    it("works if isClass method returns correct results for both undefined _class and method parameter", () => {
        let action:IJenkinsAction = new JenkinsAction();
        
        expect(action.isClass(undefined)).toBeFalsy();
    });
    
    it("works if isClass method returns correct results for null method parameter", () => {
        let action:IJenkinsAction = new JenkinsAction();
        action._class = "SomeAction"
        
        expect(action.isClass(null)).toBeFalsy();
    });
    
    it("works if isClass method returns correct results for undefined _class and null method parameter", () => {
        let action:IJenkinsAction = new JenkinsAction();
        
        expect(action.isClass(null)).toBeFalsy();
    });
    
    it("works if has method returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.has('parameters')).toBeTruthy();
    });
    
    it("works if has method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has('parameters')).toBeTruthy();
    });
    
    it("works if has method returns correct results with empty json (fromJsonString)", () => {
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.has('parameters')).toBeFalsy();
    });
    
    it("works if has method returns correct results with empty json", () => {
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.has('parameters')).toBeFalsy();
    });
    
    it("works if has method returns correct results for undefined method parameter", () => {
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has(undefined)).toBeFalsy();
    });
    
    it("works if has method returns correct results for null method parameter", () => {
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has(null)).toBeFalsy();
    });
    
    it("works if get method returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.get('parameters')).toBeDefined();
        expect(action.get('parameters')).toBeInstanceOf(Array);
        expect(action.get('parameters').length).toBe(3);
        
        let expectedValue = (((jsonObject['parameters'] as Array<JSON>)[0]) as JSON)['_class'];
        
        expect(action.get('parameters')[0]._class).toBe(expectedValue);
    });
    
    it("works if get method returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.get('parameters')).toBeDefined();
        expect(action.get('parameters')).toBeInstanceOf(Array);
        expect(action.get('parameters').length).toBe(3);
        
        let expectedValue = (((jsonObject['parameters'] as Array<JSON>)[0]) as JSON)['_class'];
        
        expect(action.get('parameters')[0]._class).toBe(expectedValue);
    });
    
    it("works if get method returns correct results with empty json (fromJsonString)", () => {
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.get('parameters')).toBeUndefined();
    });
    
    it("works if get method returns correct results with empty json", () => {
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.get('parameters')).toBeUndefined();
    });
    
    it("works if get method returns correct results for undefined method parameter", () => {
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.get(undefined)).toBeUndefined();
    });
    
    it("works if has method returns correct results for null method parameter", () => {
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.get(null)).toBeUndefined();
    });
    
});


function getJSONString(jsonLocation:string):string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getJSON(jsonLocation:string):string {
    let json = require(jsonLocation);
    
    return json;
}

function getActionUsingFromJsonString(jsonLocation:string):IJenkinsAction {
    let jsonText = getJSONString(jsonLocation);

    let action: IJenkinsAction = new JenkinsAction();
    action.fromJsonString(jsonText);

    return action;
}

function getActionUsingFromJson(jsonLocation:string):IJenkinsAction {
    let json = getJSON(jsonLocation);

    let action: IJenkinsAction = new JenkinsAction();
    action.fromJson(json);

    return action;
}