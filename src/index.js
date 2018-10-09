import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import './index.css';
import Header from './Header';
import Home from './containers/home/home'
import Content from './containers/content/content'
import Contact from './containers/contact/contact'
import Login from './containers/login/login'
import registerServiceWorker from './registerServiceWorker';

// react-dom (what we'll use here)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route path='/content' component={Content}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
