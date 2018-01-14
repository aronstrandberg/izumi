import React from 'react'
import Status from 'components/Tabata/Status'
import Round from 'components/Tabata/Round'
import Countdown from 'components/Tabata/Countdown'
import css from './styles.css'

function Tabata() {
  return (
    <div className={css.tabata}>
      <div className={css.data}>
        <Round />
        <Status />
      </div>
      <Countdown />
    </div>
  )
}

export default Tabata
