

import { IJenkinsAction }       from './jenkins-api-ts-typings';

export class JenkinsAction implements IJenkinsAction {
    jsonData:           JSON;
    
    _class:             string;
    data:               Map<string, any>;
    
    private readonly timeInQueueClassName:string = "jenkins.metrics.impl.TimeInQueueAction";
    
    constructor() {
        this.data = new Map<string, any>();
    }
    
    getJsonData(): string {
        return JSON.stringify(this.jsonData);
    }
    
    public isClass(className: string):boolean {
        if (!this._class) {
            return false;
        }
        if (!className) {
            return false;
        }
        return this._class.toLowerCase().trim() === className.toLowerCase().trim();
    }
    
    public isTimeInQueueActionClass() {
        return this.isClass(this.timeInQueueClassName);
    }
    
    public has(keyName:string):boolean {
        if (!keyName) {
            return false;
        }
        return this.data.has(keyName);
    }
    
    public get(keyName:string):any {
        if (!keyName) {
            return undefined;
        }
        return this.data.get(keyName);
    }
    
    public fromJsonString(json: string) {
        const data:JSON = JSON.parse(json);
        this.jsonData = data;
        
        this.fromJson(data);
    }
    
    public fromJson(data: JSON) {
        this.jsonData = data;
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        const objectData:Map<string, any> = new Map<string, any>();
        Object.keys(data).filter(key => key !== "_class").forEach(function(key) {
            objectData.set(key, (data as any)[key]);
        });
        
        this.data = objectData;
    }
}