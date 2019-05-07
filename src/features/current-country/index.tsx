import React from 'react'
import { WIKI_API_ADD_COUNTRY } from '../../config/config'
import './styles.css'

interface IProps { 
  country : any 
}

interface IState {
  isLoaded : boolean
  isError : boolean
  currentURL : string
}

export default class CountryDetail extends React.Component<IProps, IState>  {
  state : IState = {
    isLoaded : false,
    isError : false,
    currentURL : ''
  }

  public fetchCountryWikipedia = () => {
    console.log(WIKI_API_ADD_COUNTRY + this.props.country.name)
  }

  componentWillMount() {
    this.fetchCountryWikipedia()
  }
  
  componentDidMount() {

  }

  public render() {
    const { country } = this.props
    return (
      <div className="country-info-wrapper">
      
      </div>
    )

  }
}