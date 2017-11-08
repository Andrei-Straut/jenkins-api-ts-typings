

import { IJenkinsNode }         from './jenkins-api-ts-typings';

export class JenkinsNode implements IJenkinsNode{
    jsonData:           JSON;
    
    name:               string;
    url:                string;
    
    displayName:        string;
    _class:             string;
    idle:               boolean;
    jnlpAgent:          boolean;
    icon:               string;
    iconClassName:      string;
    launchSupported:    boolean;
    manualLaunchAllowed:boolean;
    numExecutors:       number;
    offline:            boolean;
    offlineCauseReason: string;
    temporarilyOffline: boolean;
    
    actions:            Array<any>;
    executors:          Array<any>;
    loadStatistics:     any;
    monitorData:        any;
    offlineCause:       any;
    oneOffExecutors:    Array<any>;
    
    constructor() {
        this.actions = new Array<any>();
        this.executors = new Array<any>();
        this.oneOffExecutors = new Array<any>();
    }
    
    getJsonData(): string {
        return JSON.stringify(this.jsonData);
    }
    
    public fromJsonString(json: string) {
        let data:JSON = JSON.parse(json);
        this.jsonData = data;
        
        this.fromJson(data);
    }
    
    public fromJson(data: JSON) {
        this.jsonData = data;
        
        if(data.hasOwnProperty("displayName")) {
            this.displayName = (data as any)["displayName"];
        }
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("idle")) {
            this.idle = (data as any)["idle"];
        }
        
        if(data.hasOwnProperty("jnlpAgent")) {
            this.jnlpAgent = (data as any)["jnlpAgent"];
        }
        
        if(data.hasOwnProperty("icon")) {
            this.icon = (data as any)["icon"];
        }
        
        if(data.hasOwnProperty("iconClassName")) {
            this.iconClassName = (data as any)["iconClassName"];
        }
        
        if(data.hasOwnProperty("launchSupported")) {
            this.launchSupported = (data as any)["launchSupported"];
        }
        
        if(data.hasOwnProperty("manualLaunchAllowed")) {
            this.manualLaunchAllowed = (data as any)["manualLaunchAllowed"];
        }
        
        if(data.hasOwnProperty("numExecutors")) {
            this.numExecutors = (data as any)["numExecutors"];
        }
        
        if(data.hasOwnProperty("offline")) {
            this.offline = (data as any)["offline"];
        }
        
        if(data.hasOwnProperty("offlineCauseReason")) {
            this.offlineCauseReason = (data as any)["offlineCauseReason"];
        }
        
        if(data.hasOwnProperty("temporarilyOffline")) {
            this.temporarilyOffline = (data as any)["temporarilyOffline"];
        }
        
        if(data.hasOwnProperty("temporarilyOffline")) {
            this.temporarilyOffline = (data as any)["temporarilyOffline"];
        }
        
        if(data.hasOwnProperty("actions")) {
            this.actions = (data as any)["actions"];
        }
        
        if(data.hasOwnProperty("executors")) {
            this.executors = (data as any)["executors"];
        }
        
        if(data.hasOwnProperty("loadStatistics")) {
            this.loadStatistics = (data as any)["loadStatistics"];
        }
        
        if(data.hasOwnProperty("monitorData")) {
            this.monitorData = (data as any)["monitorData"];
        }
        
        if(data.hasOwnProperty("offlineCause")) {
            this.offlineCause = (data as any)["offlineCause"];
        }
        
        if(data.hasOwnProperty("oneOffExecutors")) {
            this.oneOffExecutors = (data as any)["oneOffExecutors"];
        }
    }
}