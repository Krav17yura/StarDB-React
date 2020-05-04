import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiServices = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (<SwapiServiceConsumer>
            {
                (GotServices) => {
                    const serviceProps = mapMethodsToProps(GotServices);
                    return (
                        <Wrapped {...props}  {...serviceProps} />
                    )
                }
            }
        </SwapiServiceConsumer>)
    }
}

export default withSwapiServices