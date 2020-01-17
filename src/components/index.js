import React from 'react'
import { Link } from 'react-router-dom'

class StartSec extends React.Component {
  render () {
    return <h1>{this.props.title}</h1>
  }
}

class ReactSec extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>React Element</li>
          <li>React Component</li>
          <li>React Lifecycle</li>
        </ul>
        <Link to='/'>回到首頁</Link>
      </div>
    )
  }
}

class ReduxSec extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>Redux 簡介</li>
          <li>Redux 核心操作</li>
          <li>React Redux</li>
        </ul>
        <Link to='/'>回到首頁</Link>
      </div>
    )
  }
}

class ErrorSec extends React.Component {
  render () {
    return <h2>這位朋友，您輸入的網址有誤喔！</h2>
  }
}

export { StartSec, ReactSec, ReduxSec, ErrorSec }
