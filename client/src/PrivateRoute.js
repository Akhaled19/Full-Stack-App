import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

/**
 * The PrivateRoute component server as a high-order component for any routes that you want to protect and make accessible to authenticated users only
 * The component uses ternary operator to either allow the user to contunie to the specified private component 
 * OR redirected to the sign in page if they are not logged in
 * 
 * Inside the parentheses, destructure and rename the component prop 
 * the parameter now collect any props that get passed to it in a ...rest variable 
 */
export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          render={props => context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Redirect to= {{
                pathname: '/signin',
                state: { from: props.location}, //you can access from via this.props.location.state.from within the UserSignIn component
              }}/>
            )
          }
        />
      )}
    </Consumer>
  );
};