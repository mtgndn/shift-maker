function downloadPNG() {
  const captureArea = document.getElementById("capture-area");
  html2canvas(captureArea).then(canvas => {
    const link = document.createElement("a");
    link.download = "mesai-tablosu.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
