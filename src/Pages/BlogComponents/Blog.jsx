import React from 'react'
import GlobSec from '../../Components/GlobSec'
import Cards from './Cards'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const {t}  = useTranslation()
  return (
    <>
      <GlobSec title={t('globe.3')} loc={t('globe.3')}/>
      <Cards/>
    </>
  )
}

export default Blog