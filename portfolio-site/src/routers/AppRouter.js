import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from './../components/NotFoundPage'
import Header from './../components/Header'
import WelcomePage from './../components/WelcomePage'
import Showcase from './../components/Showcase'
import Contact from './../components/Contact'
import Things from './../components/Things'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={WelcomePage} exact={true} />
                <Route path="/showcase" exact={true} component={Showcase} />
                <Route path="/showcase/:id" component={Things} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>    
    </BrowserRouter> 
)

export default AppRouter