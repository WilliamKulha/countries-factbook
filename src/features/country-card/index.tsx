import React from 'react'
import './styles.scss'

type cardProps = {
  country : any
  key : String
  captureClickedCountry : any
  moreThanThreeLanguages : boolean
}

export const CountryCard = (cardProps) => (
  <div className="card-wrapper" onClick={() => cardProps.captureClickedCountry(cardProps.country.numericCode)} >
    <div className="country-name">
      <h3>{cardProps.country.name}</h3>
    </div>
    <div className="country-flag">
      <img src={cardProps.country.flag} alt={cardProps.country.name}/> 
    </div>
    <div className={cardProps.moreThanThreeLanguages === true ? 'long-language' : 'country-language'}>
      {
        cardProps.country.languages.map(
          (language =>
            <p key={language.iso639_1}>{language.name}</p>
        ))
      }
    </div>
  </div>
)