import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header'
import AppRandomPlanet from '../app-random-planet'
import AppErrorButton from '../app-error-button'
import GotServices from '../../services/got-services'
import AppErrorBoundry from '../app-error-boundry'
import {
    AppPeoplePage,
    AppPlanetPage,
    AppStarshipsPage
} from '../app-pages'
import { SwapiServiceProvider } from '../swapi-service-context'

import { BrowserRouter as Router, Route } from 'react-router-dom'



export default class App extends Component {
    state = {
        toggleRandom: true,
        selectedItem: 5
    }
    GotServices = new GotServices();

    onToggleRandom = () => {
        this.setState(() => {
            return {
                toggleRandom: !this.state.toggleRandom
            }
        })
    }



    render() {
        const { toggleRandom } = this.state;
        const randomBlock = toggleRandom ? <AppRandomPlanet /> : null

        return (
            <SwapiServiceProvider value={this.GotServices}>
                <Router>
                    <AppErrorBoundry>
                        <div >
                            <AppHeader />
                            {randomBlock}
                            <button
                                className="toggle-planet btn btn-warning btn-lg"
                                onClick={this.onToggleRandom}>
                                Toggle Random Planet
                            </button>
                            <AppErrorButton />
                          <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>
                          <Route path="/people" component={AppPeoplePage}/>
                          <Route path="/planet" component={AppPlanetPage}/>
                          <Route path="/starships" component={AppStarshipsPage}/>
                        </div>
                    </AppErrorBoundry>
                </Router>
            </SwapiServiceProvider>
        )
    }
}