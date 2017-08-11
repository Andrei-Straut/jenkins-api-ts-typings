

import { IJenkinsView}          from './jenkins-api-ts-typings';
import { IJenkinsJob }          from './jenkins-api-ts-typings';

export class JenkinsView implements IJenkinsView {
    jsonData:           string;
    
    name:               string;
    url:                string;
    
    description:        string;
    _class:             string;
    jobs:               Array<IJenkinsJob>;
    
    property:           Array<any>;
    
    constructor() {
        this.jobs = new Array<IJenkinsJob>();
        this.property = new Array<any>();
    }
    
    getJsonData(): string {
        return this.jsonData;
    }
    
    public fromJsonString(json: string) {
        this.jsonData = json;
        let data:JSON = JSON.parse(json);
        
        if(data.hasOwnProperty("name")) {
            this.name = (data as any)["name"];
        }
        
        if(data.hasOwnProperty("url")) {
            this.url = (data as any)["url"];
        }
        
        if(data.hasOwnProperty("description")) {
            this.description = (data as any)["description"];
        }
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("property")) {
            this.property = (data as any)["property"];
        }
    }
}



