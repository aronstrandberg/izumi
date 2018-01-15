import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import css from './styles.css'

function About() {
  return (
    <div className={css.about}>
      <Header />
      <main className={css.main}>
        <div className={css.tabata}>
          <h3 className={css.headline}>
            About
          </h3>
          <p>
            Izumi was made by <a href="http://github.com/aronstrandberg">@aronstrandberg</a>
          </p>
          <h3 className={css.faq}>FAQ</h3>
          <h4 className={css.headline}>
            What is this?
          </h4>
          <p>
            Izumi is a Tabata timer. It's useful for high-intensity interval training, but I'm sure you can use it for other things as well.
          </p>
          <h4 className={css.headline}>
            Why is it called Izumi?
          </h4>
          <p>
            It's named after Izumi Tabata, one of the inventors of the the Tabata regimen.
          </p>
          <h4 className={css.headline}>
            Can i view the source code?
          </h4>
          <p>
            Yes! The source code is available at <a href="http://github.com/aronstrandberg/izumi">
              Github
            </a>.
          </p>
          <h4 className={css.headline}>
            Something is broken, or I have a suggestion
          </h4>
          <p>
            Open an issue at <a href="http://github.com/aronstrandberg/izumi/issues">
              Github
            </a>, and I'll take a look as soon as I can.
          </p>
        </div>
        <footer className={css.footer}>
          &times;
        </footer>
      </main>
    </div>
  )
}

export default About
