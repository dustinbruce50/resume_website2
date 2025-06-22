import React, { useState } from "react";
import PdfModal from "./PdfModal";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const PdfViewer = ({ pdfFiles }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setModalOpen(true);
  };

  return (
    <>
      {pdfFiles.map(({ id, file, analysis }) => (
        <div
          key={id}
          className={`space-x-5 ${
            modalOpen ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={() => openModal(file)}
        >
          <Document file={file} loading="Loading PDF...">
            <Page pageNumber={1} width={680} />
          </Document>

          <p>{analysis}</p>
        </div>
      ))}

      {modalOpen && (
        <PdfModal file={selectedPdf} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default PdfViewer;
