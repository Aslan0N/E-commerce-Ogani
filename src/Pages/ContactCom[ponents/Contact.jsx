import React from 'react'
import GlobSec from '../../Components/GlobSec'
import MinCard from './MinCard'
import Map from './Map'
import Message from './Message'

const Contact = () => {
  return (
    <>
      <GlobSec title={"Contact Us"} loc={"Contact Us"} />
      <MinCard/>
      <Map/>
      <Message/>
    </>
  )
}

export default Contact