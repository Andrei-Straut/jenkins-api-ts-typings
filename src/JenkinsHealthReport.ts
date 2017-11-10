
import { IJenkinsHealthReport } from './jenkins-api-ts-typings';

export class JenkinsHealthReport implements IJenkinsHealthReport {
    jsonData:           JSON;
    
    _class:             string;
    description:        string;
    iconClassName:      string;
    iconUrl:            string;
    score:              number;
    
    getJsonData(): string {
        return JSON.stringify(this.jsonData);
    }
    
    public fromJsonString(json: string): void {
        let data:JSON = JSON.parse(json);
        this.jsonData = data;
        
        this.fromJson(data);
    }
    
    public fromJson(data: JSON): void {
        this.jsonData = data;
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("description")) {
            this.description = (data as any)["description"];
        }
        
        if(data.hasOwnProperty("iconClassName")) {
            this.iconClassName = (data as any)["iconClassName"];
        }
        
        if(data.hasOwnProperty("iconUrl")) {
            this.iconUrl = (data as any)["iconUrl"];
        }
        
        if(data.hasOwnProperty("score")) {
            this.score = (data as any)["score"];
        }
    }
    
}