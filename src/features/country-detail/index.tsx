import React from 'react'
import { WIKI_API_ADD_COUNTRY } from '../../config/config'
import { LoadingSpinner }from '../loading-spinner/index'
import './styles.scss'

interface IProps { 
  country : any 
}

interface IState {
  isLoaded : boolean
  isError : boolean
  wikiData : any

}

export default class CountryDetail extends React.Component<IProps, IState>  {
  state : IState = {
    isLoaded : false,
    isError : false,
    wikiData : {}
  }

  private isEmpty(object : any) {
      for(let key in object) {
          if(object.hasOwnProperty(key))
              return false;
      }
      return true;
  }

  private removePunctuation = (stringToScrub : string) => {
   return stringToScrub.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  }

  public fetchCountryWikipedia = (countryName : string) => {
    let scrubbed = this.removePunctuation(countryName)
    let request = WIKI_API_ADD_COUNTRY + scrubbed.replace(/ /g,"_")
    
    fetch(request)
      .then(response => response.json())
        .then(results => this.setState({
          wikiData : results
        }))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.country!==this.props.country){
      this.fetchCountryWikipedia(this.props.country.name)
      this.setState({
        isLoaded : true
      })
    }
  }


  public render() {
    if (this.isEmpty(this.state.wikiData) === true) {
      return (
        <div className="spinner-container">
          <LoadingSpinner />
        </div>
      )
    } else if (this.isEmpty(this.state.wikiData) === false) {
      return (
        <div className="country-info-wrapper">
          <h1> {this.props.country.name} </h1>
          <div className="wikipedia-data-wrapper">
            <div dangerouslySetInnerHTML={{ __html : this.state.wikiData.parse.text['*']}} />
          </div>
        </div>
      )
    }


  }
}