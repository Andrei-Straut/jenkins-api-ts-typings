

import { IJenkinsJob            } from '../src/jenkins-ts-typings';
import { JenkinsJob             } from '../src/JenkinsJob';

let resourceLocation:string = '../resource/job/JobFullResponse.json';
let emptyResourceLocation:string = '../resource/EmptyResponse.json';

describe("Test JenkinsJob fromJsonString", () => {
    
    it("works if getJsonData returns correct results", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.getJsonData()).toEqual(JSON.stringify(jsonObject));
    });
    
    it("works if _class property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job._class).toBe(jsonObject['_class']);
    });
    
    it("works if actions property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.actions).toEqual(jsonObject['actions']);
    });
    
    it("works if description property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.description).toBe(jsonObject['description']);
    });
    
    it("works if displayName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.displayName).toBe(jsonObject['displayName']);
    });
    
    it("works if displayNameOrNull property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.displayNameOrNull).toBe(jsonObject['displayNameOrNull']);
    });
    
    it("works if fullDisplayName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.fullDisplayName).toBe(jsonObject['fullDisplayName']);
    });
    
    it("works if fullName property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.fullName).toBe(jsonObject['fullName']);
    });
    
    it("works if name property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.name).toBe(jsonObject['name']);
    });
    
    it("works if url property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.url).toBe(jsonObject['url']);
    });
    
    it("works if buildable property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.buildable).toBe(jsonObject['buildable']);
    });
    
    it("works if color property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.color).toBe(jsonObject['color']);
    });
    
    it("works if healthReport property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.healthReport).toEqual(jsonObject['healthReport']);
    });
    
    it("works if inQueue property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.inQueue).toBe(jsonObject['inQueue']);
    });
    
    it("works if keepDependencies property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.keepDependencies).toBe(jsonObject['keepDependencies']);
    });
    
    it("works if nextBuildNumber property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.nextBuildNumber).toBe(jsonObject['nextBuildNumber']);
    });
    
    it("works if property property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.property).toEqual(jsonObject['property']);
    });
    
    it("works if queueItem property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.queueItem).toEqual(jsonObject['queueItem']);
    });
    
    it("works if concurrentBuild property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.concurrentBuild).toBe(jsonObject['concurrentBuild']);
    });
    
    it("works if scm property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.scm).toEqual(jsonObject['scm']);
    });
    
    it("works if modules property is correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job.modules).toEqual(jsonObject['modules']);
    });
    
    it("works if name property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.name).toBeUndefined();
    });
    
    it("works if url property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.url).toBeUndefined();
    });
    
    it("works if _class property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job._class).toBeUndefined();
    });
    
    it("works if displayName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.displayName).toBeUndefined();
    });
    
    it("works if fullDisplayName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.fullDisplayName).toBeUndefined();
    });
    
    it("works if description property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.description).toBeUndefined();
    });
    
    it("works if color property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.color).toBeUndefined();
    });
    
    it("works if buildable property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.buildable).toBeUndefined();
    });
    
    it("works if inQueue property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.inQueue).toBeUndefined();
    });
    
    it("works if keepDependencies property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.keepDependencies).toBeUndefined();
    });
    
    it("works if nextBuildNumber property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.nextBuildNumber).toBeUndefined();
    });
    
    it("works if concurrentBuild property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.concurrentBuild).toBeUndefined();
    });
    
    it("works if displayNameOrNull property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.displayNameOrNull).toBeUndefined();
    });
    
    it("works if fullName property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.fullName).toBeUndefined();
    });
    
    it("works if numberOfBuilds property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.numberOfBuilds).toBeUndefined();
    });
    
    it("works if builds property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.builds).toBeDefined();
        expect(job.builds).toBeInstanceOf(Array);
        expect(job.builds.length).toBe(0);
    });
    
    it("works if firstBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.firstBuild).toBeUndefined();
    });
    
    it("works if lastBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastBuild).toBeUndefined();
    });
    
    it("works if lastCompletedBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastCompletedBuild).toBeUndefined();
    });
    
    it("works if lastFailedBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastFailedBuild).toBeUndefined();
    });
    
    it("works if lastStableBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastStableBuild).toBeUndefined();
    });
    
    it("works if lastSuccessfulBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastSuccessfulBuild).toBeUndefined();
    });
    
    it("works if lastUnstableBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastUnstableBuild).toBeUndefined();
    });
    
    it("works if lastUnsuccessfulBuild property is not set from JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.lastUnsuccessfulBuild).toBeUndefined();
    });
    
    it("works if actions property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.actions).toBeDefined();
        expect(job.actions).toBeInstanceOf(Array);
        expect(job.actions.length).toBe(0);
    });
    
    it("works if healthReport property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.healthReport).toBeDefined();
        expect(job.healthReport).toBeInstanceOf(Array);
        expect(job.healthReport.length).toBe(0);
    });
    
    it("works if property property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.property).toBeDefined();
        expect(job.property).toBeInstanceOf(Array);
        expect(job.property.length).toBe(0);
    });
    
    it("works if queueItem property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.queueItem).toBeUndefined();
    });
    
    it("works if downstreamProjects property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.downstreamProjects).toBeDefined();
        expect(job.downstreamProjects).toBeInstanceOf(Array);
        expect(job.downstreamProjects.length).toBe(0);
    });
    
    it("works if upstreamProjects property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.upstreamProjects).toBeDefined();
        expect(job.upstreamProjects).toBeInstanceOf(Array);
        expect(job.upstreamProjects.length).toBe(0);
    });
    
    it("works if scm property is not set when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.scm).toBeUndefined();
    });
    
    it("works if modules property is empty when not present in JSON", () => {
        let jsonObject = require(emptyResourceLocation);
        let job:IJenkinsJob = getJob(emptyResourceLocation);
        
        expect(job.modules).toBeDefined();
        expect(job.modules).toBeInstanceOf(Array);
        expect(job.modules.length).toBe(0);
    });
    
    it("works if all JSON values are correctly parsed", () => {
        let jsonObject = require(resourceLocation);
        let job:IJenkinsJob = getJob(resourceLocation);
        
        expect(job._class).toBe(jsonObject['_class']);
        expect(job.name).toBe(jsonObject['name']);
        expect(job.url).toBe(jsonObject['url']);
        expect(job.displayName).toBe(jsonObject['displayName']);
        expect(job.fullDisplayName).toBe(jsonObject['fullDisplayName']);
        expect(job.description).toBe(jsonObject['description']);
        expect(job.color).toBe(jsonObject['color']);
        expect(job.buildable).toBe(jsonObject['buildable']);
        expect(job.inQueue).toBe(jsonObject['inQueue']);
        expect(job.keepDependencies).toBe(jsonObject['keepDependencies']);
        expect(job.nextBuildNumber).toBe(jsonObject['nextBuildNumber']);
        expect(job.concurrentBuild).toBe(jsonObject['concurrentBuild']);
        expect(job.displayNameOrNull).toBe(jsonObject['displayNameOrNull']);
        expect(job.fullName).toBe(jsonObject['fullName']);
        expect(job.numberOfBuilds).toBe(jsonObject['numberOfBuilds']);
        expect(job.actions).toEqual(jsonObject['actions']);
        expect(job.healthReport).toEqual(jsonObject['healthReport']);
        expect(job.property).toEqual(jsonObject['property']);
        expect(job.queueItem).toEqual(jsonObject['queueItem']);
        expect(job.scm).toEqual(jsonObject['scm']);
        expect(job.modules).toEqual(jsonObject['modules']);
    });
    
    it("works if all non-array-type class values are undefined on instantiation", () => {
        
        let job:IJenkinsJob = new JenkinsJob();
        
        expect(job.jsonData).toBeUndefined();
        expect(job._class).toBeUndefined();
        expect(job.name).toBeUndefined();
        expect(job.url).toBeUndefined();
        expect(job.displayName).toBeUndefined();
        expect(job.fullDisplayName).toBeUndefined();
        expect(job.description).toBeUndefined();
        expect(job.color).toBeUndefined();
        expect(job.buildable).toBeUndefined();
        expect(job.inQueue).toBeUndefined();
        expect(job.keepDependencies).toBeUndefined();
        expect(job.nextBuildNumber).toBeUndefined();
        expect(job.concurrentBuild).toBeUndefined();
        expect(job.displayNameOrNull).toBeUndefined();
        expect(job.fullName).toBeUndefined();
        expect(job.numberOfBuilds).toBeUndefined();
        expect(job.lastBuild).toBeUndefined();
        expect(job.firstBuild).toBeUndefined();
        expect(job.lastCompletedBuild).toBeUndefined();
        expect(job.lastFailedBuild).toBeUndefined();
        expect(job.lastStableBuild).toBeUndefined();
        expect(job.lastSuccessfulBuild).toBeUndefined();
        expect(job.lastUnstableBuild).toBeUndefined();
        expect(job.lastUnsuccessfulBuild).toBeUndefined();
        expect(job.queueItem).toBeUndefined();
        expect(job.scm).toBeUndefined();
    });
    
    it("works if all array-type class values are defined and empty on instantiation", () => {
        
        let job:IJenkinsJob = new JenkinsJob();
        
        expect(job.builds).toBeDefined();
        expect(job.builds).toBeInstanceOf(Array);
        expect(job.builds.length).toBe(0);
        
        expect(job.actions).toBeDefined();
        expect(job.actions).toBeInstanceOf(Array);
        expect(job.actions.length).toBe(0);
        
        expect(job.healthReport).toBeDefined();
        expect(job.healthReport).toBeInstanceOf(Array);
        expect(job.healthReport.length).toBe(0);
        
        expect(job.property).toBeDefined();
        expect(job.property).toBeInstanceOf(Array);
        expect(job.property.length).toBe(0);
        
        expect(job.downstreamProjects).toBeDefined();
        expect(job.downstreamProjects).toBeInstanceOf(Array);
        expect(job.downstreamProjects.length).toBe(0);
        
        expect(job.upstreamProjects).toBeDefined();
        expect(job.upstreamProjects).toBeInstanceOf(Array);
        expect(job.upstreamProjects.length).toBe(0);
        
        expect(job.modules).toBeDefined();
        expect(job.modules).toBeInstanceOf(Array);
        expect(job.modules.length).toBe(0);
    });
});

function getJSON(jsonLocation: string): string {
    let jsonObject = require(jsonLocation);
    let jsonText = JSON.stringify(jsonObject);
    
    return jsonText;
}

function getJob(jsonLocation:string):IJenkinsNode {
    let jsonText = getJSON(jsonLocation);

    let job: IJenkinsJob = new JenkinsJob();
    job.fromJsonString(jsonText);

    return job;
}