import React,{Component} from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        //authenticatedUser state property is assigned null or to the cookie authenticatedUser
        authenticatedUser: Cookies.getJSON('authenticatedUser') || null
    }

    constructor(){
        super();
        this.data = new Data();
    }
    
    render() {
        const  {authenticatedUser} = this.state;

        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                signIn: this.sigIn,
                signOut: this.signOut,  
            },
        };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }

    /***
     * 'signIn' method takes two parameters 'emailAddress' and 'passwors' as the credentials 
     *  If the HTTP response is 200, the user from the response is assigned to the authenticatedUser state property and the authenticatedUser cookie
     *  Else, returns an empty 'user' 
    */
    sigIn = async (emailAddress, password) => {
        const user = await this.data.getUser(emailAddress, password);
        const encodedPassword = btoa(password)
        if(user !== null){
            user.password = encodedPassword;
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
        }
        return user
    }
    /***
     * 'signOut' method 
     *  It sets the authenticatedUser state property to null
     * And it removes the authenticatedUser cookie
    */
    signOut = () => {
        this.setState( () => {
            return {authenticatedUser: null};
          });
        Cookies.remove('authenticatedUser');
    }
}

export const Consumer = Context.Consumer;
/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
export default function withContext(Component){
    return function ContextCommponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
}