import React from 'react';
import { create } from 'react-dom';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Register fonts for pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const   DownloadableContent = () => {
    // Define the content that you want to include in the PDF
    const content = [
      { text: 'This is a sample PDF content', style: 'header' },
      { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
      // Add more text or components as needed
    ];
  
    const downloadPDF = () => {
      // Define the PDF document structure
      const docDefinition = {
        content: content,
        styles: {
          header: {
            fontSize: 18,
            bold: true
          }
        }
      };
  
      // Generate the PDF document
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.download('downloadable-content.pdf');
    };
  
    return (
      <div>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    );
  };
  export default DownloadableContent