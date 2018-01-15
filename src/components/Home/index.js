import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Header from 'components/Header'
import Tabata from 'components/Tabata'
import Controls from 'components/Controls'
import css from './styles.css'

function Home({ active, resting, paused }) {
  const classes = classnames({
    [css.active]: active,
    [css.resting]: resting,
    [css.paused]: paused,
  }, css.home)
  return (
    <div className={classes}>
      <Header />
      <main className={css.main}>
        <Tabata />
        <Controls />
      </main>
    </div>
  )
}

function mapStateToProps({ timer }) {
  return {
    active: timer.active,
    resting: timer.resting,
    paused: timer.paused,
  }
}

export default connect(mapStateToProps)(Home)
