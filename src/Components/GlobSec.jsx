import React from 'react'
import { useTranslation } from 'react-i18next'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const GlobSec = (props) => {
  const {t}= useTranslation()
  return (
    <>
        <section id='glob'>
            <h1>{props.title}</h1>
            <p>
            <LinkContainer to={'/'}>
                <NavLink className={'home-link'}>
                {t("globe.0")}
                </NavLink>
            </LinkContainer>
            - {props.loc}</p>
        </section>
    </>
  )
}

export default GlobSec