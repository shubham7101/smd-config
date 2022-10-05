import dotenv from "dotenv";
interface DotenvConfigOptions {
    path?: string;
    encoding?: string;
    debug?: boolean;
    override?: boolean;
}
declare const _default: {
    load: (options: DotenvConfigOptions) => dotenv.DotenvConfigOutput;
    set: (name: string, config: any) => any;
    get: (name: string) => any;
    gets: (names: string[]) => any[];
    all: () => any;
};
export = _default;
