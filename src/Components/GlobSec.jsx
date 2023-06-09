import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const GlobSec = (props) => {
  return (
    <>
        <section id='glob'>
            <h1>{props.title}</h1>
            <p>
            <LinkContainer to={'/'}>
                <NavLink className={'home-link'}>
                Home
                </NavLink>
            </LinkContainer>
            - {props.loc}</p>
        </section>
    </>
  )
}

export default GlobSec