import React from 'react'

function Coin({name,price,symbol,icon}) {
  return (
    <div className="coin">
        <h1>Name:{name} </h1>
        <img src={icon} alt='coin-logo'/>
        <h2>Price:{price}</h2>
        <h2>symbol:{symbol}</h2>
    </div>
  )
}

export default Coin