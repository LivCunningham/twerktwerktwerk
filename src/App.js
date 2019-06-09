import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddEmployee from './page/AddEmployee'
import GetEmployee from './components/GetEmployee'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={AddEmployee} />
            <Route path="/employee/:employee.id" component={GetEmployee} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
