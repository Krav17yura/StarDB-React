
import React, { Component } from 'react'
import AppErrorBoundry from '../app-error-boundry'
import Row from '../row'
import {
    StarshipsList,
    StarshipsDetails
} from "../sw-components"

export default class AppStarshipsPage extends Component {
    state = {
        selectedItem: 9

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
                    left={<StarshipsList onItemSelected={this.onItemSelected} />}
                    right={<StarshipsDetails selectedItem={selectedItem} />}
                />
            </AppErrorBoundry>
        )
    }
}