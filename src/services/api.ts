import Axios from 'axios';

let instance: any = Axios.create({});

const init = (options: any) => {
    instance.defaults.timeout = 2500;
    instance.defaults.headers = {
        common: {
            Authorization: options.token ? `Bearer ${options.token}` : '',
            'Accept-Language': options.locale,
        },
    };
};

class Api {
    api = instance;
}

export { Api, init };