import React, { Component } from 'react'
import './app-error-boundry.css'
import AppError from '../app-error'


export default class AppErrorBoundry extends Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <AppError />
        }
        return this.props.children
    }
}