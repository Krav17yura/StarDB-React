export default class GotServices {

    _apiBase = 'https://swapi.dev/api'
    _apiBaseImg = `https://starwars-visualguide.com/assets/img`

    getResource = async (url ) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}``, received ${res.status}`)
        }
        return await res.json();
    }

     getAllPeople = async() => {
        const res = await this.getResource('/people/')
        return res.results.map(this.transformPerson)
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this.transformPerson(person);
    }

    getAllPlanets =  async () => {
        const res = await this.getResource('/planets/')
        return res.results.map(this.transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this.transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource('/starships/')
        return res.results.map(this.transformStarship);
    }

    getStarships = async (id) => {
        const starships = await this.getResource(`/starships/${id}`)
        return this.transformStarship(starships)
    }

    getPersonImg = ({id})  => {
        return  `${this._apiBaseImg}/characters/${id}.jpg`
    }

    getPlanetImg =  ({id})  => {
        return  `${this._apiBaseImg}/planets/${id}.jpg`
    }
    getStarshipsImg =  ({id})  => {
        return  `${this._apiBaseImg}/starships/${id}.jpg`
    }

    _extractId(item){
        const idRegExp  = /\/([0-9]*)\/$/;
        return  item.url.match(idRegExp)[1];
    }

    transformPlanet = (planet)  =>{
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformStarship = (starships) => {
        return{
            id: this._extractId(starships),
            name: starships.name,
            model: starships.model,
            manufacturer: starships.manufacturer,
            constInCredits: starships.constInCredits,
            length: starships.length,
            crew: starships.crew,
            passengers: starships.passengers,
            cargoCapacity: starships.cargoCapacity
        }
    }

    transformPerson = (person) =>{
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,

        }
    }


}