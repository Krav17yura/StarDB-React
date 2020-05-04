import React from 'react'
import AppItemDetails, { Record } from '../app-item-details/app-item-details'
import { withSwapiServices } from '../app-higth-component'



const StarshipsDetails = ({ ...props }) => {
    return (
        <AppItemDetails
            {...props}>

            <Record field="model" label="Model: " />
            <Record field="manufacturer" label="Manufacturer: " />
            <Record field="diameconstInCreditster" label="ConstInCredits:" />
            <Record field="length" label="Length: " />
            <Record field="diameter" label="Diameter: " />
            <Record field="crew" label="Crew: " />
            <Record field="passengers" label="Passengers: " />
            <Record field="cargoCapacity" label="CargoCapacity: " />
        </AppItemDetails>
    )
}
const mapMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getStarships,
        getImg: GotServices.getStarshipsImg
    }
}

export default withSwapiServices(StarshipsDetails, mapMethodsToProps)