import React from 'react'
import QRCode from 'react-qr-code'
import { shippingDetails } from '../../../assets/assets' 

const QRcodePage = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center' >


      <QRCode
      size={200}
      bgColor='white'
      fgColor='black'
      value="https://app.onlydust.com/"
      />
    </div>
  )
}

export default QRcodePage