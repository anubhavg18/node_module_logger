export declare const prefixesForLoggers: string[];
export declare function Logger(prefix?: string): (target: object, key: string | symbol, index?: number) => void;
