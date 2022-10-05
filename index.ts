import dotenv from "dotenv";

// All configs
let configs: any= {};

interface DotenvConfigOptions {
    path?: string;
    encoding?: string;
    debug?: boolean;
    override?: boolean;
}

const load = (options: DotenvConfigOptions) => {
    return dotenv.config(options)
}

const set = (name:string,config:any) => {
    configs[`${name}`] = config;
    return configs[`${name}`];
}

const get = (name:string) => {
    if(!configs.hasOwnProperty(`${name}`) ) {
	return;
    }
    return configs[`${name}`];
}

const gets = (names: string[]) => {
    return names.map((name)=>{
	return get(name);
    })
}

const all = () => {
    return configs;
}

export = {
    load, set, get, gets, all
}
