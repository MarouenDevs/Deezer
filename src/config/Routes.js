import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout";
import Dashbord from "../pages/Dashbord";



const Routes = (props) => ( <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' render={() => (<Dashbord />)}/>

        </Switch>
    </Layout>
</BrowserRouter>);

export default Routes;