

import { IJenkinsJob }          from './jenkins-api-ts-typings';
import { IJenkinsBuild }        from './jenkins-api-ts-typings';
import { IJenkinsHealthReport } from './jenkins-api-ts-typings';

export class JenkinsJob implements IJenkinsJob {
    jsonData:           JSON;
    
    _class:             string;    
    name:               string;
    url:                string;

    displayName:        string;
    fullDisplayName:    string;
    description:        string;
    color:              string;
    buildable:          boolean;
    inQueue:            boolean;
    keepDependencies:   boolean;
    nextBuildNumber:    number;
    concurrentBuild:    boolean;
    displayNameOrNull:  string;
    fullName:           string;
    numberOfBuilds:     number;
    builds:             Array<IJenkinsBuild>;
    firstBuild:         IJenkinsBuild;
    lastBuild:          IJenkinsBuild;
    lastCompletedBuild: IJenkinsBuild;
    lastFailedBuild:    IJenkinsBuild;
    lastStableBuild:    IJenkinsBuild;
    lastSuccessfulBuild:IJenkinsBuild;
    lastUnstableBuild:  IJenkinsBuild;
    lastUnsuccessfulBuild: IJenkinsBuild;
    healthReport:       Array<IJenkinsHealthReport>;
    
    actions:            Array<any>;
    property:           Array<any>;
    queueItem:          any;
    downstreamProjects: Array<any>;
    upstreamProjects:   Array<any>;
    scm:                any;
    modules:            Array<any>;

    constructor() {
        this.builds = new Array<IJenkinsBuild>();
        this.downstreamProjects = new Array<JenkinsJob>();
        this.upstreamProjects = new Array<JenkinsJob>();
        this.actions = new Array<any>();
        this.healthReport = new Array<any>();
        this.property = new Array<any>();
        this.modules = new Array<any>();
    }
    
    getJsonData(): string {
        return JSON.stringify(this.jsonData);
    }
    
    public fromJsonString(json: string): void {
        const data:JSON = JSON.parse(json);
        this.jsonData = data;
        
        this.fromJson(data);
    }
    
    public fromJson(data: JSON): void {
        this.jsonData = data;
        
        if(data.hasOwnProperty("name")) {
            this.name = (data as any)["name"];
        }
        
        if(data.hasOwnProperty("url")) {
            this.url = (data as any)["url"];
        }
        
        if(data.hasOwnProperty("displayName")) {
            this.displayName = (data as any)["displayName"];
        }
        
        if(data.hasOwnProperty("fullDisplayName")) {
            this.fullDisplayName = (data as any)["fullDisplayName"];
        }
        
        if(data.hasOwnProperty("description")) {
            this.description = (data as any)["description"];
        }
        
        if(data.hasOwnProperty("color")) {
            this.color = (data as any)["color"];
        }
        
        if(data.hasOwnProperty("buildable")) {
            this.buildable = (data as any)["buildable"];
        }
        
        if(data.hasOwnProperty("inQueue")) {
            this.inQueue = (data as any)["inQueue"];
        }
        
        if(data.hasOwnProperty("keepDependencies")) {
            this.keepDependencies = (data as any)["keepDependencies"];
        }
        
        if(data.hasOwnProperty("nextBuildNumber")) {
            this.nextBuildNumber = (data as any)["nextBuildNumber"];
        }
        
        if(data.hasOwnProperty("concurrentBuild")) {
            this.concurrentBuild = (data as any)["concurrentBuild"];
        }
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("displayNameOrNull")) {
            this.displayNameOrNull = (data as any)["displayNameOrNull"];
        }
        
        if(data.hasOwnProperty("fullName")) {
            this.fullName = (data as any)["fullName"];
        }
        
        if(data.hasOwnProperty("actions")) {
            this.actions = (data as any)["actions"];
        }
        
        if(data.hasOwnProperty("healthReport")) {
            this.healthReport = (data as any)["healthReport"];
        }
        
        if(data.hasOwnProperty("property")) {
            this.property = (data as any)["property"];
        }
        
        if(data.hasOwnProperty("queueItem")) {
            this.queueItem = (data as any)["queueItem"];
        }
        
        if(data.hasOwnProperty("scm")) {
            this.scm = (data as any)["scm"];
        }
        
        if(data.hasOwnProperty("modules")) {
            this.modules = (data as any)["modules"];
        }
    }
}



