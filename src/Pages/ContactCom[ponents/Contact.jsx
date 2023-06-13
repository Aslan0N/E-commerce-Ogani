import React from 'react'
import GlobSec from '../../Components/GlobSec'
import MinCard from './MinCard'
import Map from './Map'
import Message from './Message'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t}= useTranslation()
  return (
    <>
      <GlobSec title={t("globe.4")} loc={t("globe.4")} />
      <MinCard/>
      <Map/>
      <Message/>
    </>
  )
}

export default Contact