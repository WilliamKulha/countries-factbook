import React from 'react'
import './styles.scss'
import { CountryCard } from '../country-card/index'

type CountriesProps = { 
  countries : Array<any>;
  captureClickedCountry : any
}

export const CountriesList =(CountriesProps) => {
  return (
  <div className="countries-wrapper">
  {
    CountriesProps.countries.map(
      (country => 
        <CountryCard country={country} key={country.numericCode} captureClickedCountry={CountriesProps.captureClickedCountry} moreThanThreeLanguages={country.languages.length >= 3 ? true : false}/>
      ))
  }
  </div>
  )
}
