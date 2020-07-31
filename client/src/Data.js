import config from './config';

export default class Data {
    /**
     * api helper method is used to make the GET and POST requests to the REST API
     * It accepts an API endpoint as its first argument (path), followed by the HTTP method, and body
     * which will contain any data associated with the request.  
     * @param {string} path 
     * @param {string} method 
     * @param {object} body 
     * @param {boolean} requiresAuth 
     * @param {object} credentials 
     * @returns {function} fetch api to make a promise based request 
     */

    api(path, method='GET', body=null, requiresAuth=false, credentials=null) {
        const url = config.apiBaseUrl + path;

        //send a request with the HTTP method and the request header 
        const options = {
            method,
            headers: {
                'Content-Type': 'application/jason; charset=utf-8',
            },
        };

        //stringified the body if the body if provided
        if(body !== null) {
            options.body = JSON.stringify(body);
        }

        //check if the auth is required
        if(requiresAuth){
            const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
        return fetch(url)
    }

    //method perform a sync operation that get an authenticated user
    async getUser(username, password){
        const response = await this.api('/users', 'GET', null, true, {username, password});
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