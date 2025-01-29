import React from 'react';
import { useParams } from 'react-router-dom';
import { shippingDetails } from '../../../assets/assets';
import QRCode from 'react-qr-code';

const DynamicPage = () => {
  const { pageId } = useParams(); 
  const shipment  = shippingDetails.find((item) => item.id === pageId);
  const trackingUrl = `${window.location.origin}/page/${shipment.id}`;

  return (
    <div>
      <h3>{pageId}</h3>
      {shipment.date}
      hey
      <QRCode value={trackingUrl} />
    </div>
  );
};

export default DynamicPage;
