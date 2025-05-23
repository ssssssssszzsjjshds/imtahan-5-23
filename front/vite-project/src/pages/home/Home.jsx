import React from 'react'
import styles from "./Home.module.css"
import SecOne from './components/secOne/SecOne'
import SecTwo from './components/secTwo/SecTwo'
import SecThree from './components/secThree/SecThree'
import SecFour from './components/SecFour/SecFour'
import SecFive from './components/secFive/SecFive'

const Home = () => {
  return (
    <div>
        <SecOne/>
        <SecTwo/>
        <SecThree/>
        <SecFour/>
        <SecFive/>
    </div>  
  )
}

export default Home