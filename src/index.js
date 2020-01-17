import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { StartSec, ReactSec, ReduxSec, ErrorSec } from './components'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      apiData: {},
      headline: '',
      tempRoutes: {
        reactRoute: '',
        reduxRoute: ''
      }
    }
  }

  componentDidMount () {
    fetch('https://cwpeng.github.io/live-records-samples/data/content.json')
      .then(res => res.json())
      .then(result =>
        this.setState({
          apiData: result
        })
      )
      .then(res => {
        this.setState({
          headline: this.state.apiData.headline,
          tempRoutes: {
            reactRoute: this.state.apiData.chapters[1].key,
            reduxRoute: this.state.apiData.chapters[2].key
          }
        })
      })
  }

  render () {
    let routes = this.state
    return (
      <div>
        <Link to='/'>快速開始</Link>
        <Link to={'/' + this.state.tempRoutes.reactRoute}>React 基礎</Link>
        <Link to={'/' + this.state.tempRoutes.reduxRoute}>Redux 基礎</Link>
        <Switch>
          <Route
            path='/'
            component={() => <StartSec title={this.state.headline} />}
            exact
          />
          <Route
            path={'/' + this.state.tempRoutes.reactRoute}
            component={ReactSec}
          />
          <Route
            path={'/' + this.state.tempRoutes.reduxRoute}
            component={ReduxSec}
          />
          <Route component={ErrorSec} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
