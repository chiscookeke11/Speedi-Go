import React from 'react'
import QRCode from 'react-qr-code'

const QRcodePage = () => {
  return (
    <div>QRcodePage


      <QRCode
      size={200}
      bgColor='white'
      fgColor='black'
      value='Subscribe to WebStylePress'
      />
    </div>
  )
}

export default QRcodePage