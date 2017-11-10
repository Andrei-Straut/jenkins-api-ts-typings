

import { IJenkinsNode           } from '../src/jenkins-ts-typings';
import { JenkinsNode            } from '../src/JenkinsNode';

let resourceLocation:string = '../resource/node/NodeFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsNode", () => {
    
    it("works if getJsonData returns correct results (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node._class).toBe(jsonObject['_class']);
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node._class).toBe(jsonObject['_class']);
    });
    
    it("works if displayName property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.displayName).toBe(jsonObject['displayName']);
    });
    
    it("works if displayName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.displayName).toBe(jsonObject['displayName']);
    });
    
    it("works if icon property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.icon).toBe(jsonObject['icon']);
    });
    
    it("works if icon property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.icon).toBe(jsonObject['icon']);
    });
    
    it("works if iconClassName property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.iconClassName).toBe(jsonObject['iconClassName']);
    });
    
    it("works if iconClassName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.iconClassName).toBe(jsonObject['iconClassName']);
    });
    
    it("works if idle property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.idle).toBe(jsonObject['idle']);
    });
    
    it("works if idle property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.idle).toBe(jsonObject['idle']);
    });
    
    it("works if jnlpAgent property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.jnlpAgent).toBe(jsonObject['jnlpAgent']);
    });
    
    it("works if jnlpAgent property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.jnlpAgent).toBe(jsonObject['jnlpAgent']);
    });
    
    it("works if launchSupported property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.launchSupported).toBe(jsonObject['launchSupported']);
    });
    
    it("works if launchSupported property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.launchSupported).toBe(jsonObject['launchSupported']);
    });
    
    it("works if loadStatistics property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.loadStatistics).toEqual(jsonObject['loadStatistics']);
    });
    
    it("works if loadStatistics property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.loadStatistics).toEqual(jsonObject['loadStatistics']);
    });
    
    it("works if manualLaunchAllowed property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.manualLaunchAllowed).toBe(jsonObject['manualLaunchAllowed']);
    });
    
    it("works if manualLaunchAllowed property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.manualLaunchAllowed).toBe(jsonObject['manualLaunchAllowed']);
    });
    
    it("works if monitorData property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.monitorData).toEqual(jsonObject['monitorData']);
    });
    
    it("works if monitorData property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.monitorData).toEqual(jsonObject['monitorData']);
    });
    
    it("works if numExecutors property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.numExecutors).toBe(jsonObject['numExecutors']);
    });
    
    it("works if numExecutors property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.numExecutors).toBe(jsonObject['numExecutors']);
    });
    
    it("works if offline property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.offline).toBe(jsonObject['offline']);
    });
    
    it("works if offline property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.offline).toBe(jsonObject['offline']);
    });
    
    it("works if offlineCause property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.offlineCause).toBe(jsonObject['offlineCause']);
    });
    
    it("works if offlineCause property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.offlineCause).toBe(jsonObject['offlineCause']);
    });
    
    it("works if offlineCauseReason property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.offlineCauseReason).toBe(jsonObject['offlineCauseReason']);
    });
    
    it("works if offlineCauseReason property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.offlineCauseReason).toBe(jsonObject['offlineCauseReason']);
    });
    
    it("works if temporarilyOffline property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.temporarilyOffline).toBe(jsonObject['temporarilyOffline']);
    });
    
    it("works if temporarilyOffline property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.temporarilyOffline).toBe(jsonObject['temporarilyOffline']);
    });
    
    it("works if oneOffExecutors property is correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.oneOffExecutors).toEqual(jsonObject['oneOffExecutors']);
    });
    
    it("works if oneOffExecutors property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.oneOffExecutors).toEqual(jsonObject['oneOffExecutors']);
    });
    
    it("works if _class property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node._class).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node._class).toBeUndefined();
    });
    
    it("works if displayName property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.displayName).toBeUndefined();
    });
    
    it("works if displayName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.displayName).toBeUndefined();
    });
    
    it("works if icon property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.icon).toBeUndefined();
    });
    
    it("works if icon property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.icon).toBeUndefined();
    });
    
    it("works if iconClassName property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.iconClassName).toBeUndefined();
    });
    
    it("works if iconClassName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.iconClassName).toBeUndefined();
    });
    
    it("works if idle property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.idle).toBeUndefined();
    });
    
    it("works if idle property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.idle).toBeUndefined();
    });
    
    it("works if jnlpAgent property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.jnlpAgent).toBeUndefined();
    });
    
    it("works if jnlpAgent property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.jnlpAgent).toBeUndefined();
    });
    
    it("works if launchSupported property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.launchSupported).toBeUndefined();
    });
    
    it("works if launchSupported property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.launchSupported).toBeUndefined();
    });
    
    it("works if loadStatistics property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.loadStatistics).toBeUndefined();
    });
    
    it("works if loadStatistics property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.loadStatistics).toBeUndefined();
    });
    
    it("works if manualLaunchAllowed property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.manualLaunchAllowed).toBeUndefined();
    });
    
    it("works if manualLaunchAllowed property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.manualLaunchAllowed).toBeUndefined();
    });
    
    it("works if monitorData property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.monitorData).toBeUndefined();
    });
    
    it("works if monitorData property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.monitorData).toBeUndefined();
    });
    
    it("works if numExecutors property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.numExecutors).toBeUndefined();
    });
    
    it("works if numExecutors property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.numExecutors).toBeUndefined();
    });
    
    it("works if offline property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.offline).toBeUndefined();
    });
    
    it("works if offline property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.offline).toBeUndefined();
    });
    
    it("works if offlineCause property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.offlineCause).toBeUndefined();
    });
    
    it("works if offlineCause property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.offlineCause).toBeUndefined();
    });
    
    it("works if offlineCauseReason property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.offlineCauseReason).toBeUndefined();
    });
    
    it("works if offlineCauseReason property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.offlineCauseReason).toBeUndefined();
    });
    
    it("works if temporarilyOffline property is not set when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.temporarilyOffline).toBeUndefined();
    });
    
    it("works if temporarilyOffline property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.temporarilyOffline).toBeUndefined();
    });
    
    it("works if oneOffExecutors property is empty when not present in JSON (fromJsonString)", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(emptyResourceLocation);
        
        expect(node.oneOffExecutors).toBeDefined();
        expect(node.oneOffExecutors).toBeInstanceOf(Array);
        expect(node.oneOffExecutors.length).toBe(0);
    });
    
    it("works if oneOffExecutors property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(emptyResourceLocation);
        
        expect(node.oneOffExecutors).toBeDefined();
        expect(node.oneOffExecutors).toBeInstanceOf(Array);
        expect(node.oneOffExecutors.length).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed (fromJsonString)", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJsonString(resourceLocation);
        
        expect(node.displayName).toBe(jsonObject['displayName']);
        expect(node._class).toBe(jsonObject['_class']);
        expect(node.idle).toBe(jsonObject['idle']);
        expect(node.jnlpAgent).toBe(jsonObject['jnlpAgent']);
        expect(node.icon).toBe(jsonObject['icon']);
        expect(node.iconClassName).toBe(jsonObject['iconClassName']);
        expect(node.launchSupported).toBe(jsonObject['launchSupported']);
        expect(node.manualLaunchAllowed).toBe(jsonObject['manualLaunchAllowed']);
        expect(node.numExecutors).toBe(jsonObject['numExecutors']);
        expect(node.offline).toBe(jsonObject['offline']);
        expect(node.offlineCauseReason).toBe(jsonObject['offlineCauseReason']);
        expect(node.temporarilyOffline).toBe(jsonObject['temporarilyOffline']);
        expect(node.executors).toEqual(jsonObject['executors']);
        expect(node.loadStatistics).toEqual(jsonObject['loadStatistics']);
        expect(node.monitorData).toEqual(jsonObject['monitorData']);
        expect(node.actions).toEqual(jsonObject['actions']);
        expect(node.oneOffExecutors).toEqual(jsonObject['oneOffExecutors']);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let node:IJenkinsNode = getNodeUsingFromJson(resourceLocation);
        
        expect(node.displayName).toBe(jsonObject['displayName']);
        expect(node._class).toBe(jsonObject['_class']);
        expect(node.idle).toBe(jsonObject['idle']);
        expect(node.jnlpAgent).toBe(jsonObject['jnlpAgent']);
        expect(node.icon).toBe(jsonObject['icon']);
        expect(node.iconClassName).toBe(jsonObject['iconClassName']);
        expect(node.launchSupported).toBe(jsonObject['launchSupported']);
        expect(node.manualLaunchAllowed).toBe(jsonObject['manualLaunchAllowed']);
        expect(node.numExecutors).toBe(jsonObject['numExecutors']);
        expect(node.offline).toBe(jsonObject['offline']);
        expect(node.offlineCauseReason).toBe(jsonObject['offlineCauseReason']);
        expect(node.temporarilyOffline).toBe(jsonObject['temporarilyOffline']);
        expect(node.executors).toEqual(jsonObject['executors']);
        expect(node.loadStatistics).toEqual(jsonObject['loadStatistics']);
        expect(node.monitorData).toEqual(jsonObject['monitorData']);
        expect(node.actions).toEqual(jsonObject['actions']);
        expect(node.oneOffExecutors).toEqual(jsonObject['oneOffExecutors']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let node:IJenkinsNode = new JenkinsNode();
        
        expect(node.name).toBeUndefined();
        expect(node.url).toBeUndefined();
        expect(node.displayName).toBeUndefined();
        expect(node._class).toBeUndefined();
        expect(node.idle).toBeUndefined();
        expect(node.jnlpAgent).toBeUndefined();
        expect(node.icon).toBeUndefined();
        expect(node.iconClassName).toBeUndefined();
        expect(node.launchSupported).toBeUndefined();
        expect(node.manualLaunchAllowed).toBeUndefined();
        expect(node.numExecutors).toBeUndefined();
        expect(node.offline).toBeUndefined();
        expect(node.offlineCauseReason).toBeUndefined();
        expect(node.temporarilyOffline).toBeUndefined();
        expect(node.loadStatistics).toBeUndefined();
        expect(node.monitorData).toBeUndefined();
        expect(node.offlineCause).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let node:IJenkinsNode = new JenkinsNode();
        
        expect(node.actions).toBeDefined();
        expect(node.actions).toBeInstanceOf(Array);
        expect(node.actions.length).toBe(0);
        
        expect(node.executors).toBeDefined();
        expect(node.executors).toBeInstanceOf(Array);
        expect(node.executors.length).toBe(0);
        
        expect(node.oneOffExecutors).toBeDefined();
        expect(node.oneOffExecutors).toBeInstanceOf(Array);
        expect(node.oneOffExecutors.length).toBe(0);
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

function getNodeUsingFromJsonString(jsonLocation:string):IJenkinsNode {
    let jsonText = getJSONString(jsonLocation);

    let node: IJenkinsNode = new JenkinsNode();
    node.fromJsonString(jsonText);

    return node;
}

function getNodeUsingFromJson(jsonLocation:string):IJenkinsNode {
    let json = getJSON(jsonLocation);

    let node: IJenkinsNode = new JenkinsNode();
    node.fromJson(json);

    return node;
}