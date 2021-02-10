import React, { Component, Suspense } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {


    render() {
        let state_of_state = localStorage["userData"];
        if (!state_of_state){
          let appState = {
            isLoggedIn: false,
            user: {}
          }; 
          localStorage["userData"] = JSON.stringify(appState);
        }
        let state = localStorage["userData"];
        let AppState = JSON.parse(state);
        // 3.2
        var Auth = {
          isLoggedIn: AppState.isLoggedIn,
          user: AppState
        };

        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });
        
        return (
          
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                      <Route path="/" render={props => Auth.isLoggedIn ? ((Auth.user.user.is_one_time_password==1) ? (<AdminLayout {...props} />):(<Redirect to={{pathname: "/change-password",state: {error: "You need to login first!"}}} />)) : (<Redirect to={{
          pathname: "/auth/signin",
          state: {
            prevLocation: '',
            error: "You need to login first!",
          },
         }}
         />
       )
     }
   />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
