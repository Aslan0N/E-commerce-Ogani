import React from 'react'
import Vegetable from '../HomeComponents/Vegetable'
import GlobSec from '../../Components/GlobSec'
import Department from './Department'
import { useTranslation } from 'react-i18next'

const Shop = () => {
  const {t}=useTranslation()
  return (
    <>
      <Vegetable/>
      <GlobSec title={t("globe.1")} loc={t("globe.2")}/>
      <Department/>
    </>
  )
}

export default Shop