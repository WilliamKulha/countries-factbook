import React from 'react';
import './App.css';
import { API_COUNTRIES } from './config/config'
import { LoadingSpinner }from './features/loading-spinner/index'
import { CountriesList } from './features/countries-list/index'
import CountryDetail from './features/country-detail/index'

type IState = {
  countriesList : Array<any>
  currentCountry : any
  listLoaded : boolean
  error : boolean
}

class App extends React.Component<{}, IState> {
  state : IState = {
    countriesList : [],
    currentCountry : {},
    listLoaded : false,
    error : false  
  }


  fetchCountriesToState = (API_KEY : string) => {
    fetch(API_KEY) 
    .then(response => response.json())
      .then( results => this.setState({ countriesList : results}))
  }

  captureClickedCountry = (countryCode: string) => {
    console.log(this.state.countriesList.find(desired => desired.numericCode === countryCode))
    this.setState({
      currentCountry : this.state.countriesList.find(desired => desired.numericCode === countryCode)
    })
  }
  
  componentWillMount() {
    this.fetchCountriesToState(API_COUNTRIES)
  }

  componentDidMount() {
    this.setState({ listLoaded : true})
  }

  render() {
      {
        if (this.state.listLoaded === false) {
          return (
            <div className="App">
              <LoadingSpinner />
            </div>
          )
        } else if (this.state.listLoaded === true) {
          return (
            <div className="App">
              <div className="top-half">
                <CountriesList countries={this.state.countriesList} captureClickedCountry={this.captureClickedCountry}/>
              </div>
              <div className="bottom-half">
                <CountryDetail country={this.state.currentCountry} />
              </div>
            </div>
          )
        }
      }
  }
}

export default App;
