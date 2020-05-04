import React, { Component } from 'react'
import AppErrorBoundry from '../app-error-boundry'
import Row from '../row'
import {
    PersonList,
    PersonDetails
} from "../sw-components"


export default class AppPeoplePage extends Component {
    state = {
        selectedItem: 1
    }


    onItemSelected = (id) => {
        console.log(id)
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
                    left={<PersonList onItemSelected={this.onItemSelected}/>}
                    right={<PersonDetails selectedItem={selectedItem} />}
                />
            </AppErrorBoundry>
        )
    }
}