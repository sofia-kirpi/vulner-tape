window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const invoice = this.document.getElementById("content");
    const opt = {
      margin: [0.2, 0.1, 0.4, 0.1],
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      filename: "report.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(invoice).set(opt).save();
  });
};
