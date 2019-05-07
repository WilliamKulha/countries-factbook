import React from 'react'
import * as AlternateUrls from '../../config/modifiedCountries'
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
   return stringToScrub.replace(/[.\/#!$%\^&\*;:{}=\_`~]/g,"")
  }

  private fetchWikiData = (endUrlToFetch : string) => {
    fetch(endUrlToFetch)
    .then(response => response.json())
      .then(results => this.setState({
        wikiData : results
      }))
  }

  public fetchCountryWikipedia = (countryName : string) => {
    switch(countryName) {
      case "Bolivia (Plurinational State of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.BOLIVIA)
        break
      case "Bonaire, Sint Eustatius and Saba" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.BONAIRE)
        break
      case "Virgin Islands (U.S.)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.US_VIRGIN_ISLANDS)
        break
      case "Virgin Islands (British)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.UK_VIRGIN_ISLANDS)
        break
      case "Brunei Darussalam" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.BRUNEI_DARUSSALAM)
        break
      case "Cabo Verde" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.CABO_VERDE)
        break
      case "Congo (Democratic Republic of the)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.CONGO)
        break
      case "Falkland Islands (Malvinas)" : 
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.FALKLAND_ISLANDS)
        break
      case "French Southern Territories" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.FRENCH_SOUTHERN)
        break
      case "Côte d'Ivoire" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.COTE_D_IVOIRE)
        break
      case "Iran (Islamic Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.IRAN)
        break
      case "Lao People's Democratic Republic" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.LAOS)
        break
      case "Macedonia (the former Yugoslav Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.MACEDONIA)
        break
      case "Micronesia (Federated States of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.MICRONESIA)
        break
      case "Moldova (Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.MOLDOVA)
        break
      case "Korea (Democratic People's Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.NORTH_KOREA)
        break
      case "Korea (Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.SOUTH_KOREA)
        break
      case "Palestine, State of" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.PALESTINE)
        break
      case "Republic of Kosovo" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.KOSOVO)
        break
      case "Russian Federation" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.RUSSIA)
        break
      case "Saint Martin (French part)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.FRENCH_SAINT_MARTIN)
        break
      case "Sint Maarten (Dutch part)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.DUTCH_SAINT_MARTIN)
        break
      case  "Sao Tome and Principe" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.SAO_TOME)
        break
      case "Syrian Arab Republic" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.SYRIA)
        break
      case "Swaziland" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.SWAZILAND)
        break
      case "United States of America" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.USA)
        break
      case "United Kingdom of Great Britain and Northern Ireland" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.UK)
        break
      case "Viet Nam" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.VIETNAM)
        break
      case "Venezuela (Bolivarian Republic of)" :
        this.fetchWikiData(WIKI_API_ADD_COUNTRY + AlternateUrls.VENEZUELA)
        break
      default :
        let scrubbed = this.removePunctuation(countryName)
        let request = WIKI_API_ADD_COUNTRY + scrubbed.replace(/ /g,"_") 
        this.fetchWikiData(request)
    }
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
          <div className='wikipedia-data-wrapper' dangerouslySetInnerHTML={{ __html : this.state.wikiData.parse.text['*']}} />
        </div>
      )
    }


  }
}