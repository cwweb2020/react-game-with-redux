import React from 'react'
import { Heading } from '../styled/Heading'

const Header = () => {
  return (
    <>
      <header>
         <div className="header-wrapper">
            <Heading color='yellow' size='2rem'>The Color Game</Heading>
         </div>
      </header>
    </>
  )
}

export default Header
