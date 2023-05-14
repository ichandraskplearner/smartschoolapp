export interface AdmissionDetails {
    fullname : string,
    gender: string,
    fees: FeeDetails[]
}

export interface FeeDetails {
    name : string;
    amount : number;
}