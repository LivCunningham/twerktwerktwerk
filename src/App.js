import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddEmployee from './page/AddEmployee'
import GetEmployee from './components/GetEmployee'
import SingleEmployee from './page/SingleEmployee'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={AddEmployee} />
            <Route path="/GetEmployee" exact component={GetEmployee} />
            <Route
              path="/SingleEmployee/:personID"
              exact
              component={SingleEmployee}
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
