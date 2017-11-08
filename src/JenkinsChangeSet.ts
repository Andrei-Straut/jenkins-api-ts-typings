

import { IJenkinsChangeSet }    from './jenkins-api-ts-typings';
import { IJenkinsUser }         from './jenkins-api-ts-typings';

export class JenkinsChangeSet implements IJenkinsChangeSet {
    jsonData:           JSON;
    
    _class:             string;
    affectedPaths:      Array<string>;
    commitId:           string;
    timestamp:          number;
    authorEmail:        string;
    comment:            string;
    date:               Date;
    id:                 string;
    msg:                string;
    
    paths:              Array<any>;
    authorData:         any;
    author:             IJenkinsUser;
    
    constructor() {
        this.affectedPaths = new Array<string>();
        this.paths = new Array<string>();
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
        
        if(data.hasOwnProperty("_class")) {
            this._class = (data as any)["_class"];
        }
        
        if(data.hasOwnProperty("affectedPaths")) {
            let paths:Array<string> = ((data as any)["affectedPaths"]) as Array<string>;
            
            for(let affectedPath of paths) {
                this.affectedPaths.push(affectedPath);
            }
        }
        
        if(data.hasOwnProperty("commitId")) {
            this.commitId = (data as any)["commitId"];
        }
        
        if(data.hasOwnProperty("timestamp")) {
            this.timestamp = (data as any)["timestamp"];
        }
        
        if(data.hasOwnProperty("authorEmail")) {
            this.authorEmail = (data as any)["authorEmail"];
        }
        
        if(data.hasOwnProperty("comment")) {
            this.comment = (data as any)["comment"];
        }
        
        if(data.hasOwnProperty("date")) {
            this.date = new Date((data as any)["date"]);
        }
        
        if(data.hasOwnProperty("id")) {
            this.id = (data as any)["id"];
        }
        
        if(data.hasOwnProperty("msg")) {
            this.msg = (data as any)["msg"];
        }
        
        if(data.hasOwnProperty("author")) {
            this.authorData = (data as any)["author"];
        }
        
        if(data.hasOwnProperty("paths")) {
            this.paths = (data as any)["paths"];
        }
    }
}