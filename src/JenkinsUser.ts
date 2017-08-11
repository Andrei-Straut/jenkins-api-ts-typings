

import { IJenkinsUser }         from './jenkins-api-ts-typings';

export class JenkinsUser implements IJenkinsUser {
    jsonData:           string;
    
    _class:             string;
    fullName:           string;
    absoluteUrl:        string;
    
    description:        string;
    id:                 string;
    property:           Array<any>;
    
    constructor() {
        this.property = new Array<any>();
    }
    
    getJsonData(): string {
        return this.jsonData;
    }
    
    fromJsonString(json: string): void {
        this.jsonData = json;
        let data:JSON = JSON.parse(json);
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("fullName")) {
            this.fullName = (data as any)["fullName"];
        }
        
        if(data.hasOwnProperty("absoluteUrl")) {
            this.absoluteUrl = (data as any)["absoluteUrl"];
        }
        
        if(data.hasOwnProperty("description")) {
            this.description = (data as any)["description"];
        }
        
        if(data.hasOwnProperty("id")) {
            this.id = (data as any)["id"];
        }
        
        if(data.hasOwnProperty("property")) {
            this.property = (data as any)["property"];
        }
    }
}