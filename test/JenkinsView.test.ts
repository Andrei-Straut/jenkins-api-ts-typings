

import { IJenkinsView       } from '../src/jenkins-ts-typings';
import { JenkinsView        } from '../src/JenkinsView';

let resourceLocation:string = '../resource/view/ViewFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsView", () => {
    
    it("works if getJsonData returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if name property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.name).toBe(jsonObject['name']);
    });
    
    it("works if name property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.name).toBe(jsonObject['name']);
    });
    
    it("works if url property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.url).toBe(jsonObject['url']);
    });
    
    it("works if url property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.url).toBe(jsonObject['url']);
    });
    
    it("works if _class property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view._class).toBe(jsonObject['_class']);
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view._class).toBe(jsonObject['_class']);
    });
    
    it("works if description property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.description).toBe(jsonObject['description']);
    });
    
    it("works if description property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.description).toBe(jsonObject['description']);
    });
    
    it("works if property property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.property).toEqual(jsonObject['property']);
    });
    
    it("works if property property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.property).toEqual(jsonObject['property']);
    });
    
    it("works if name property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view.name).toBeUndefined();
    });
    
    it("works if name property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view.name).toBeUndefined();
    });
    
    it("works if url property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view.url).toBeUndefined();
    });
    
    it("works if url property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view.url).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view.description).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view.description).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view._class).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view._class).toBeUndefined();
    });
    
    it("works if _class property is empty when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view.jobs).toBeDefined();
        expect(view.jobs).toBeInstanceOf(Array);
        expect(view.jobs.length).toBe(0);
    });
    
    it("works if _class property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view.jobs).toBeDefined();
        expect(view.jobs).toBeInstanceOf(Array);
        expect(view.jobs.length).toBe(0);
    });
    
    it("works if property property is empty when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(emptyResourceLocation);
        
        expect(view.property).toBeDefined();
        expect(view.property).toBeInstanceOf(Array);
        expect(view.property.length).toBe(0);
    });
    
    it("works if property property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(emptyResourceLocation);
        
        expect(view.property).toBeDefined();
        expect(view.property).toBeInstanceOf(Array);
        expect(view.property.length).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJsonString(resourceLocation);
        
        expect(view.name).toBe(jsonObject['name']);
        expect(view.url).toBe(jsonObject['url']);
        expect(view._class).toBe(jsonObject['_class']);
        expect(view.description).toBe(jsonObject['description']);
        expect(view.property).toEqual(jsonObject['property']);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let view:IJenkinsView = getViewUsingFromJson(resourceLocation);
        
        expect(view.name).toBe(jsonObject['name']);
        expect(view.url).toBe(jsonObject['url']);
        expect(view._class).toBe(jsonObject['_class']);
        expect(view.description).toBe(jsonObject['description']);
        expect(view.property).toEqual(jsonObject['property']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let view:IJenkinsView = new JenkinsView();
        
        expect(view.jsonData).toBeUndefined();
        expect(view._class).toBeUndefined();
        expect(view.description).toBeUndefined();
        expect(view.name).toBeUndefined();
        expect(view.url).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let view:IJenkinsView = new JenkinsView();
        
        expect(view.jobs).toBeDefined();
        expect(view.jobs).toBeInstanceOf(Array);
        expect(view.jobs.length).toBe(0);
        
        expect(view.property).toBeDefined();
        expect(view.property).toBeInstanceOf(Array);
        expect(view.property.length).toBe(0);
    });
})

function getJSONString(jsonLocation:string):string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getJSON(jsonLocation:string):string {
    let json = require(jsonLocation);
    
    return json;
}

function getViewUsingFromJsonString(jsonLocation:string):IJenkinsUser {
    let jsonText = getJSONString(jsonLocation);

    let view: IJenkinsView = new JenkinsView();
    view.fromJsonString(jsonText);

    return view;
}

function getViewUsingFromJson(jsonLocation:string):IJenkinsUser {
    let json = getJSON(jsonLocation);

    let view: IJenkinsView = new JenkinsView();
    view.fromJson(json);

    return view;
}
