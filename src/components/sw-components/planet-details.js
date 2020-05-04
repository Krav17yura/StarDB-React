import React from 'react'
import AppItemDetails, { Record } from '../app-item-details/app-item-details'
import { withSwapiServices } from '../app-higth-component'


const PlanetDetails = ({...props}) => {
    return (
        <AppItemDetails
          {...props}>

            <Record field="population" label="population" />
            <Record field="rotationPeriod" label="rotationPeriod" />
            <Record field="diameter" label="diameter" />

        </AppItemDetails>


    )
}
const mapMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getPlanet,
        getImg: GotServices.getPlanetImg
    }
}
export default withSwapiServices(PlanetDetails, mapMethodsToProps);