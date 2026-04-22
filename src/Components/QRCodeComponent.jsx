import { QRCodeSVG } from 'qrcode.react';

const vCardData = "BEGIN:VCARD\nVERSION:3.0\nFN:Dylan BOLADO\nEMAIL:dylan.bolado@orange.fr\nURL:https://linkedin.com/in/dylan-bolado-56742426b\nURL:https://github.com/DyBobo\nNOTE:Développeur Front-End React — Étudiant M2I Promo 2025\nEND:VCARD";

const QRCodeComponent = () => {
  return (
    <div className="qrcode-wrapper">
      <QRCodeSVG
        value={vCardData}
        size={140}
        fgColor="#1E3A5F"
        level="H"
        includeMargin={true}
      />
      <p className="qrcode-label">Scannez pour enregistrer mon contact</p>
      <a
        href="/contact.vcf"
        download="Dylan_BOLADO.vcf"
        className="qrcode-download"
      >
        Telecharger la vCard
      </a>
    </div>
  );
};

export default QRCodeComponent;