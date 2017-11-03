export { JenkinsUser        } from './JenkinsUser';
export { JenkinsNode        } from './JenkinsNode';
export { JenkinsChangeSet   } from './JenkinsChangeSet';
export { JenkinsBuild       } from './JenkinsBuild';
export { JenkinsJob         } from './JenkinsJob';
export { JenkinsView        } from './JenkinsView';

export interface IJenkinsData {
    jobs:               Array<IJenkinsJob>;
    builds:             Map<IJenkinsJob, Array<IJenkinsBuild>>;
    users:              Array<IJenkinsUser>;
    views:              Array<IJenkinsView>;
    nodes:              Array<IJenkinsNode>;
    changeSets:         Map<IJenkinsBuild, Array<IJenkinsChangeSet>>;
 };

export interface IJenkinsObject {
    _class:             string;
    getJsonData():      string;
    fromJson(json:JSON): void;
    fromJsonString(json:string): void;
};

export interface IJenkinsUser extends IJenkinsObject {
    fullName:           string;
    absoluteUrl:        string;
    
    description:        string;
    id:                 string;
    property:           Array<any>;
};

export interface IJenkinsNode extends IJenkinsObject {
    name:               string;
    url:                string;
    
    displayName:        string;
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
};

export interface IJenkinsUser extends IJenkinsObject {
    fullName:           string;
    absoluteUrl:        string;
    
    description:        string;
    id:                 string;
    
    property:           Array<any>;
};

export interface IJenkinsJob extends IJenkinsObject {
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
    lastUnsuccessfulBuild:IJenkinsBuild;
    
    actions:            Array<any>;
    healthReport:       Array<any>;
    property:           Array<any>;
    queueItem:          any;
    downstreamProjects: Array<any>;
    upstreamProjects:   Array<any>;
    scm:                any;
    modules:            Array<any>;
};

 export interface IJenkinsBuild extends IJenkinsObject {
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
    changeSets:         Array<IJenkinsChangeSet>;
    
    actions:            Array<any>;
    artifacts:          Array<any>;
    executor:           Array<any>;
    culprits:           Array<any>;
};

export interface IJenkinsChangeSet extends IJenkinsObject {
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
};

export interface IJenkinsHealthReport extends IJenkinsObject {
    description:        string;
    iconClassName:      string;
    iconUrl:            string;
    score:              number;
};

export interface IJenkinsView extends IJenkinsObject {
    name:               string;
    url:                string;
    
    description:        string;
    jobs:               Array<IJenkinsJob>;
    
    property:           Array<any>;
};
