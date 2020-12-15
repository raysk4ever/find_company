import { Redirect, Route, Switch } from 'react-router-dom';
import App from './App'
import List from './components/List';

function Routes() {
    return (
        <div className='main-container'>
            <Switch>
                <Route path='/list' component={List}></Route>
                <Route path='/' component={App}></Route>
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Routes;