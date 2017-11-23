

export const JenkinsBuildStatus = {
    Aborted: 'ABORTED' as 'ABORTED',
    Failure: 'FAILURE' as 'FAILURE',
    Unstable: 'UNSTABLE' as 'UNSTABLE',
    Success: 'SUCCESS' as 'SUCCESS',
}
export type JenkinsBuildStatus = (typeof JenkinsBuildStatus)[keyof typeof JenkinsBuildStatus];