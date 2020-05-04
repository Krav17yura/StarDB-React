import React from "react"
import AppItemList from '../app-item-list'
import { withData, withSwapiServices } from '../app-higth-component'

const mapPersonMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getAllPeople
    }
}
const mapPlanetsMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getAllPlanets
    }
}
const mapStarshipsMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getAllStarships
    }
}

const withChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped >
        )
    }
}

withChildrenFunction(AppItemList, ({ name }) => <span>{name}</span>)
const renderNmae = ({ name }) => <span>{name}</span>

const PersonList = withSwapiServices(withData(
    withChildrenFunction(AppItemList, renderNmae)), mapPersonMethodsToProps);

const PlanetList = withSwapiServices(withData(
    withChildrenFunction(AppItemList, renderNmae)), mapPlanetsMethodsToProps);

const StarshipsList = withSwapiServices(withData(
    withChildrenFunction(AppItemList, renderNmae)), mapStarshipsMethodsToProps);

export {
    PlanetList,
    PersonList,
    StarshipsList
}