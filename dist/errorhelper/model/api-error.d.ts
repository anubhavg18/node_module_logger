export declare class ApiError {
    code: string;
    message: string;
    target: string;
    details: Detail[];
    constructor(code: string, message: string, target: string);
}
declare class Detail {
    code: string;
    target: string;
    message: string;
}
export {};
