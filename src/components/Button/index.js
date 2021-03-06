import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'

function Button({ children, ...props }) {
  return (
    <button className={css.button} type="button" {...props}>
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
