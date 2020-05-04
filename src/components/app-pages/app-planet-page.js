import React, { Component } from 'react'
import AppErrorBoundry from '../app-error-boundry'
import Row from '../row'
import {
    PlanetList,
    PlanetDetails
} from "../sw-components"

export default class AppPlanetPage extends Component {
    state = {
        selectedItem: 2

    }

    onItemSelected = (id) => {
        this.setState(() => {
            return {
                selectedItem: +id
            }
        })
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <AppErrorBoundry>
                <Row
                    left={<PlanetList onItemSelected={this.onItemSelected} />}
                    right={<PlanetDetails selectedItem={selectedItem} />}
                />
            </AppErrorBoundry>
        )
    }
}