import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NavBar from './components/navbar'


function App() {
  return(
    <Router>
       <NavBar/>
      <Switch>
      <Route path="/about" exact>
        <h1>About</h1>
      </Route>
      <Route path="/login" exact>
        <h1>Login page</h1>
      </Route>
        <Route path="/" exact>  
        <h1>Homepage</h1>
      </Route>
      </Switch>
    </Router>
  )
}

export default App;