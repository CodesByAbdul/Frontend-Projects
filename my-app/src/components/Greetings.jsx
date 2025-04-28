import React from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) => {
      return(props.isLoggedIn ? <h2 className='welcome'>Welcome {props.name}</h2> : <h2 className='login'>Please Log In.</h2>)

}

Greetings.propTypes = {
 isLoggedIn : PropTypes.bool,
 name : PropTypes.string
}

Greetings.defaultProps = {
  isLoggedIn: false,
  name: "Guest"
}


export default Greetings