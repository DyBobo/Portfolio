import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  // Remplace par tes vraies infos pour ta vCard
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:BOBO Dy
TEL:0606060606
EMAIL:dylan.bolado@orangef=.fr
END:VCARD`;

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <p>📱 Scannez pour m'ajouter :</p>
      <QRCodeSVG value={vCardData} size={150} />
    </div>
  );
};

export default QRCodeComponent;