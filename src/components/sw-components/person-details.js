import React from 'react'
import AppItemDetails, { Record } from '../app-item-details/app-item-details'
import { withSwapiServices } from '../app-higth-component'


const PersonDetails = ({...props}) => {
    return (
        <AppItemDetails
           {...props}>
            <Record field="gender" label="Gender: " />
            <Record field="birthYear" label="BirthYear: " />
            <Record field="eyeColor" label="EyeColor: " />
        </AppItemDetails>
    )
}

const mapMethodsToProps = (GotServices) => {
    return {
        getData: GotServices.getPerson,
        getImg: GotServices.getPersonImg
    }
}
export default withSwapiServices(PersonDetails, mapMethodsToProps);