
import { JenkinsAction }       from './jenkins-api-ts-typings';

export class JenkinsTimeInQueueAction extends JenkinsAction {
    private queuingDurationMillis:  number = 0;
    private totalDurationMillis:    number = 0;
    
    constructor() {
        super();
    }
    
    public isTimeInQueueActionClass() {
        return true;
    }
    
    public getQueuingDurationMillis(): number {
        return this.queuingDurationMillis;
    }
    
    public getTotalDurationMillis(): number {
        return this.totalDurationMillis
    }
    
    public fromJsonString(json: string) {
        const data:JSON = JSON.parse(json);
        this.jsonData = data;
        
        this.fromJson(data);
    }
    
    public fromJson(data: JSON) {
        super.fromJson(data);
        
        if(data.hasOwnProperty("queuingDurationMillis")) {
            this.queuingDurationMillis = ((data as any)["queuingDurationMillis"]);
        }
        
        if(data.hasOwnProperty("totalDurationMillis")) {
            this.totalDurationMillis = ((data as any)["totalDurationMillis"]);
        }
    }
}