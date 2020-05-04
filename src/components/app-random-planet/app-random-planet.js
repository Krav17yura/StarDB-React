import React, { Component } from 'react';

import './app-random-planet.css';
import GotServices from '../../services/got-services';
import Spinner from '../spinner'
import AppError from '../app-error'

export default class AppRandomPlanet extends Component {
  state = {
    planet: {},
    loading: true
  }
  GotServices = new GotServices();

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error:false })
  }

  componentDidMount(){
    this.updatePlanet();
    this.inerval = setInterval(this.updatePlanet, 1500)
  }

  componentWillUnmount(){
    clearInterval(this.inerval);
  }

  onError = () => {
    this.setState({error:true, loading:false})
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 16 + 3);
    this.GotServices.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;
     const errorMessage = (error)? <AppError/> : null
     const spinner = (loading)? <Spinner/> : null;
     const content = !(loading || error)? <PlanetView planet={planet}/> : null
    return (
      <div className="random-planet jumbotron rounded">
         {spinner}
         {content}
         {errorMessage}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
     <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
      </React.Fragment>
  )
}