import config from './config';

export default class Data {
    api(path, method='GET', body=null) {
        const url = config.apiBaseUrl + path
        return fetch(url)
    }

    //method perform a sync operation that get an authenticated user
    async getUser(username, password){
        const response = await this.api('/users', 'GET', {username, password});
        if(response.status === 200){
            return response.json().then(data => data);
        }
        else if(response.status === 401){
            return null;
        }
        else{
            throw new Error();
            
        }
    }

    //method perform a sync operation that get an authenticated user
    async createUser(user){
        const response = await this.api('users', 'POST', user);
        if(response.status === 201){
            return [];
        }
        else if(response.status === 400){
            return response.json(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }
}