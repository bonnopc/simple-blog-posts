import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
