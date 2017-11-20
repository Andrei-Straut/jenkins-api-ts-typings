

import { IJenkinsBuild }        from './jenkins-api-ts-typings'
import { IJenkinsChangeSet }    from './jenkins-api-ts-typings'
import { IJenkinsAction }       from './jenkins-api-ts-typings'

 export class JenkinsBuild implements IJenkinsBuild {
    jsonData:           JSON;
    
    _class:             string;
    number:             number;
    url:                string;

    displayName:        string;
    fullDisplayName:    string;
    description:        string;
    id:                 string;
    queueId:            string;
    result:             string;
    duration:           number;
    estimatedDuration:  number;
    timestamp:          number;
    date:               Date;
    building:           boolean;
    keepLog:            boolean;
    builtOn:            string;
    mavenVersionUsed:   string;
    
    changeSets:         Array<IJenkinsChangeSet>;
    actions:            Array<IJenkinsAction>;
    artifacts:          Array<any>;
    mavenArtifacts:     Array<any>;
    executor:           Array<any>;
    culprits:           Array<any>;

    constructor() {
        this.changeSets = new Array<IJenkinsChangeSet>();
        this.actions = new Array<any>();
        this.artifacts = new Array<any>();
        this.executor = new Array<any>();
        this.culprits = new Array<any>();
        this.mavenArtifacts = new Array<any>();
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
        
        if(data.hasOwnProperty("number")) {
            this.number = (data as any)["number"];
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
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("building")) {
            this.building = (data as any)["building"];
        }
        
        if(data.hasOwnProperty("duration")) {
            this.duration = (data as any)["duration"];
        }
        
        if(data.hasOwnProperty("estimatedDuration")) {
            this.estimatedDuration = (data as any)["estimatedDuration"];
        }
        
        if(data.hasOwnProperty("id")) {
            this.id = (data as any)["id"];
        }
        
        if(data.hasOwnProperty("keepLog")) {
            this.keepLog = (data as any)["keepLog"];
        }
        
        if(data.hasOwnProperty("queueId")) {
            this.queueId = (data as any)["queueId"];
        }
        
        if(data.hasOwnProperty("result")) {
            this.result = (data as any)["result"];
        }
        
        if(data.hasOwnProperty("timestamp")) {
            this.timestamp = (data as any)["timestamp"];
            this.date = new Date((data as any)["timestamp"]);
        }
        
        if(data.hasOwnProperty("builtOn")) {
            this.builtOn = (data as any)["builtOn"];
        }
        
        if(data.hasOwnProperty("artifacts")) {
            this.artifacts = (data as any)["artifacts"];
        }
        
        if(data.hasOwnProperty("executor")) {
            this.executor = (data as any)["executor"];
        }
        
        if(data.hasOwnProperty("culprits")) {
            this.culprits = (data as any)["culprits"];
        }
        
        if(data.hasOwnProperty("mavenVersionUsed")) {
            this.mavenVersionUsed = (data as any)["mavenVersionUsed"];
        }
        
        if(data.hasOwnProperty("mavenArtifacts")) {
            this.mavenArtifacts = (data as any)["mavenArtifacts"];
        }
    }
}