function generateQRCode() {
    const link = document.getElementById('link').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Clear previous QR code
    
    QRCode.toCanvas(link, { errorCorrectionLevel: 'H' }, function (error, canvas) {
        if (error) {
            console.error(error);
            alert('Неверная ссылка, попробуйте ещё.');
            return;
        }
        qrcodeContainer.appendChild(canvas);
        document.getElementById('downloadBtn').style.display = 'block';
    });
}

function downloadQRCode() {
    const canvas = document.querySelector('#qrcode canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qrcode.png';
    link.click();
}