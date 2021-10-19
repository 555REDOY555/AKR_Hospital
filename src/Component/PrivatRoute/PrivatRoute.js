import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const PrivatRoute = ({ children, ...rest }) => {
     const { user, loading } = useAuth();
     if (loading) return 'loading';
     return (
          <Route
               {...rest}
               render={({ location }) => user?.accessToken ? children : <Redirect
                    to={{
                         pathname: "/login",
                         state: { from: location }
                    }}
               ></Redirect>}
          >

          </Route>
     );
};

export default PrivatRoute;