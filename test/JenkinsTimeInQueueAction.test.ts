

import { IJenkinsAction          } from '../src/jenkins-ts-typings';
import { JenkinsTimeInQueueAction} from '../src/JenkinsTimeInQueueAction';

let resourceLocation:string = '../resource/action/TimeInQueueActionFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsTimeInQueueAction", () => {
    
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
        expect(action.data.size).toBe(2);
        
        expect(action.get("queuingDurationMillis")).toBe(jsonObject['queuingDurationMillis']);
        expect(action.get("totalDurationMillis")).toBe(jsonObject['totalDurationMillis']);
    });
    
    it("works if data property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(2);
        
        expect(action.get("queuingDurationMillis")).toBe(jsonObject['queuingDurationMillis']);
        expect(action.get("totalDurationMillis")).toBe(jsonObject['totalDurationMillis']);
    });
    
    it("works if queuingDurationMillis property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.getQueuingDurationMillis()).toBe(jsonObject["queuingDurationMillis"]);
    });
    
    it("works if queuingDurationMillis property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.getQueuingDurationMillis()).toBe(jsonObject["queuingDurationMillis"]);
    });
    
    it("works if totalDurationMillis property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.getTotalDurationMillis()).toBe(jsonObject["totalDurationMillis"]);
    });
    
    it("works if totalDurationMillis property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.getTotalDurationMillis()).toBe(jsonObject["totalDurationMillis"]);
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
    
    it("works if queuingDurationMillis property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.getQueuingDurationMillis()).toBe(0);
    });
    
    it("works if queuingDurationMillis property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.getQueuingDurationMillis()).toBe(0);
    });
    
    it("works if queuingDurationMillis property is not set on instantiation", () => {
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action.getQueuingDurationMillis()).toBe(0);
    });
    
    it("works if totalDurationMillis property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.getTotalDurationMillis()).toBe(0);
    });
    
    it("works if totalDurationMillis property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.getTotalDurationMillis()).toBe(0);
    });
    
    it("works if totalDurationMillis property is not set on instantiation", () => {
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action.getTotalDurationMillis()).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(2);
        expect(action.getQueuingDurationMillis()).toBe(jsonObject["queuingDurationMillis"]);
        expect(action.getTotalDurationMillis()).toBe(jsonObject["totalDurationMillis"]);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action._class).toBe(jsonObject['_class']);
        
        expect(action.data).toBeDefined();
        expect(action.data).toBeInstanceOf(Map);
        expect(action.data.size).toBe(2);
        expect(action.getQueuingDurationMillis()).toBe(jsonObject["queuingDurationMillis"]);
        expect(action.getTotalDurationMillis()).toBe(jsonObject["totalDurationMillis"]);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action._class).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
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
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action.isClass("")).toBeFalsy();
    });
    
    it("works if isTimeInQueueActionClass method returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJsonString(resourceLocation);
        
        expect(action.isTimeInQueueActionClass()).toBeTruthy();
    });
    
    it("works if isTimeInQueueActionClass method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.isTimeInQueueActionClass()).toBeTruthy();
    });
    
    it("works if isTimeInQueueActionClass method returns correct results with empty json (fromJsonString)", () => {
        let action:IJenkinsAction = getActionUsingFromJsonString(emptyResourceLocation);
        
        expect(action.isTimeInQueueActionClass()).toBeTruthy();
    });
    
    it("works if isTimeInQueueActionClass method returns correct results with empty json", () => {
        let action:IJenkinsAction = getActionUsingFromJson(emptyResourceLocation);
        
        expect(action.isTimeInQueueActionClass()).toBeTruthy();
    });
    
    it("works if isTimeInQueueActionClass method returns correct results after instantiation", () => {
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action.isTimeInQueueActionClass()).toBeTruthy();
    });
    
    it("works if has 'class' method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has("_class")).toBeFalsy();
    });
    
    it("works if has 'queuingDurationMillis' method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has("queuingDurationMillis")).toBeTruthy();
    });
    
    it("works if has 'totalDurationMillis' method returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let action:IJenkinsAction = getActionUsingFromJson(resourceLocation);
        
        expect(action.has("totalDurationMillis")).toBeTruthy();
    });
    
    it("works if isClass method returns correct results for after instantiation", () => {
        let action:IJenkinsAction = new JenkinsTimeInQueueAction();
        
        expect(action.isClass("jenkins.metrics.impl.TimeInQueueAction")).toBeFalsy();
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

    let action: IJenkinsAction = new JenkinsTimeInQueueAction();
    action.fromJsonString(jsonText);

    return action;
}

function getActionUsingFromJson(jsonLocation:string):IJenkinsAction {
    let json = getJSON(jsonLocation);

    let action: IJenkinsAction = new JenkinsTimeInQueueAction();
    action.fromJson(json);

    return action;
}