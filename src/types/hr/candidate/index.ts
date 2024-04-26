export type CandidateState = {
    loading: boolean;
    candidates: CandidateType[] | null;
    errorMessage: string | null;
};
export type CandidateType = {
    _id?: string;
    name: string,
    status: string,
    contact: Contact,
    interviewInformation: InterviewInformation,
    dob: string,
    universityMajor: string,
    projectExperience: string,
    skillsSummary: string,
    certificate: string,
}
export type InterviewInformation = {
    dateTime: string,
    linkGmeet: string,
}
export type Contact = {
    email: string,
    phone: string,
}