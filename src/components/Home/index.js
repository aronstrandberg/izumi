import React from 'react'
import Header from 'components/Header'
import Tabata from 'components/Tabata'
import Controls from 'components/Controls'
import css from './styles.css'

function Home() {
  return (
    <div className={css.home}>
      <Header />
      <main className={css.main}>
        <Tabata />
        <Controls />
      </main>
    </div>
  )
}

export default Home
