import React, { useState, useRef, useEffect } from "react";
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

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {pdfFiles.map(({ id, file, analysis }) => (
        <div
          key={id}
          className={`space-x-5 ${
            modalOpen ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={() => openModal(file)}
          ref={containerRef}
        >
          <Document file={file} loading="Loading PDF...">
            <Page pageNumber={1} width={width} />
          </Document>

          <div>{analysis}</div>
        </div>
      ))}

      {modalOpen && (
        <PdfModal file={selectedPdf} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default PdfViewer;
