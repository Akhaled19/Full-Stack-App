import React,{Component} from 'react';
import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        //authenticatedUser state property is assigned null or to the cookie authenticatedUser
        authenticatedUser: null
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
                signOut: this.signOut  
            }
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
    //sign in function checks if user has credentials and set the authenticatedUser state to the user
    sigIn = async (emailAddress, password) => {
        const user = await this.data.getUser(emailAddress, password);
        if(user === 200){
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
        }
        return user
    }
    //sign out function loges out the user and sets the authenticatedUser state back to null
    signOut() {
        this.setState(() => {
            return {
                authenticatedUser: null
            }
        })
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