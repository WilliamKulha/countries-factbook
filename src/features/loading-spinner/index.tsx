import React from 'react'
import './styles.css'

export const LoadingSpinner : React.FC<{}> = () => (
  <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)


