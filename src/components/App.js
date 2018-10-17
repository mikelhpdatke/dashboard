import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home/Home'
import LogManagement from './LogManagement/LogManagement'
import ServiceManagement from './ServiceManagement/ServiceManagement'
import Setting from './SettingManagement/Setting'
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/log_management' component={LogManagement}/>
      <Route path='/service_management' component={ServiceManagement}/>
      <Route path='/setting' component={Setting}/>
    </Switch>
  </main>
)

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  )
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)



export default App;
