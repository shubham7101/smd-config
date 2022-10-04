// All configs
let configs: any= {};

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

const all = () => {
    return configs;
}

export = {
    set, get, all
}
