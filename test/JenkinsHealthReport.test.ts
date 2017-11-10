

import { IJenkinsHealthReport   } from '../src/jenkins-ts-typings';
import { JenkinsHealthReport    } from '../src/JenkinsHealthReport';

let resourceLocation:string = '../resource/healthReport/HealthReportfFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsHealthReport", () => {
    
    it("works if getJsonData returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport._class).toBe(jsonObject['_class']);
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport._class).toBe(jsonObject['_class']);
    });
    
    it("works if description property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport.description).toBe(jsonObject['description']);
    });
    
    it("works if description property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport.description).toBe(jsonObject['description']);
    });
    
    it("works if iconClassName property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport.iconClassName).toBe(jsonObject['iconClassName']);
    });
    
    it("works if iconClassName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport.iconClassName).toBe(jsonObject['iconClassName']);
    });
    
    it("works if iconUrl property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport.iconUrl).toBe(jsonObject['iconUrl']);
    });
    
    it("works if score property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport.score).toBe(jsonObject['score']);
    });
    
    it("works if score property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(resourceLocation);
        
        expect(healthReport.score).toBe(jsonObject['score']);
    });
    
    it("works if _class property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(emptyResourceLocation);
        
        expect(healthReport._class).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(emptyResourceLocation);
        
        expect(healthReport._class).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(emptyResourceLocation);
        
        expect(healthReport.description).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(emptyResourceLocation);
        
        expect(healthReport.description).toBeUndefined();
    });
    
    it("works if iconClassName property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(emptyResourceLocation);
        
        expect(healthReport.iconClassName).toBeUndefined();
    });
    
    it("works if iconClassName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(emptyResourceLocation);
        
        expect(healthReport.iconClassName).toBeUndefined();
    });
    
    it("works if iconUrl property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(emptyResourceLocation);
        
        expect(healthReport.iconUrl).toBeUndefined();
    });
    
    it("works if iconUrl property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(emptyResourceLocation);
        
        expect(healthReport.iconUrl).toBeUndefined();
    });
    
    it("works if score property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(emptyResourceLocation);
        
        expect(healthReport.score).toBeUndefined();
    });
    
    it("works if score property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJson(emptyResourceLocation);
        
        expect(healthReport.score).toBeUndefined();
    });
    
    it("works if all JSON values are correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport._class).toBe(jsonObject['_class']);
        expect(healthReport.description).toBe(jsonObject['description']);
        expect(healthReport.iconClassName).toBe(jsonObject['iconClassName']);
        expect(healthReport.iconUrl).toBe(jsonObject['iconUrl']);
        expect(healthReport.score).toBe(jsonObject['score']);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let healthReport:IJenkinsHealthReport = getHealthReportUsingFromJsonString(resourceLocation);
        
        expect(healthReport._class).toBe(jsonObject['_class']);
        expect(healthReport.description).toBe(jsonObject['description']);
        expect(healthReport.iconClassName).toBe(jsonObject['iconClassName']);
        expect(healthReport.iconUrl).toBe(jsonObject['iconUrl']);
        expect(healthReport.score).toBe(jsonObject['score']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let healthReport:IJenkinsHealthReport = new JenkinsHealthReport();
        
        expect(healthReport._class).toBeUndefined();
        expect(healthReport.description).toBeUndefined();
        expect(healthReport.iconClassName).toBeUndefined();
        expect(healthReport.iconUrl).toBeUndefined();
        expect(healthReport.score).toBeUndefined();
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

function getHealthReportUsingFromJsonString(jsonLocation:string):IJenkinsHealthReport {
    let jsonText = getJSONString(jsonLocation);

    let healthReport: IJenkinsHealthReport = new JenkinsHealthReport();
    healthReport.fromJsonString(jsonText);

    return healthReport;
}

function getHealthReportUsingFromJson(jsonLocation:string):IJenkinsHealthReport {
    let json = getJSON(jsonLocation);

    let healthReport: IJenkinsHealthReport = new JenkinsHealthReport();
    healthReport.fromJson(json);

    return healthReport;
}