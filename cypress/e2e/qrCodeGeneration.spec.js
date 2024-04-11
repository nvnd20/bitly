import {QRCodeGenerationDefaultSettings,
QRCodeWithCustomColor, QRCodeDownload} from "../scenarios/qrCodeGenerationScenarios"

describe('QR Code Smoke Tests', () => {
    it('Generates a QR code with default settings', () => {
      QRCodeGenerationDefaultSettings()
    })

    it('Generates a QR code with a custom color', () => {
        QRCodeWithCustomColor()
    })

    it('Generates and downloads the QR code', () => {
        QRCodeDownload()
    });
  })