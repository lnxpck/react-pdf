import React, { Component, Fragment } from "react";
import {
  BlobProvider,
  PDFDownloadLink,
  PDFViewer,
  Document,
  pdf,
  Page,
  usePDF,
} from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";
import { saveAs } from "file-saver";

import "./App.css";

const MyDoc = (
  <Document>
    <Page size="A4">// My document data</Page>
  </Document>
);

function App() {
  const clickHandler = async () => {
    // alert("Go !");
    const blob = await pdf(<Invoice invoice={invoice} />).toBlob();
    saveAs(blob, "document.pdf");
  };

  return (
    <div>
      <button onClick={clickHandler}>Télécharger</button>
      <PDFViewer width="1000" height="800" className="app">
        <Invoice invoice={invoice} />
      </PDFViewer>

      {/* <BlobProvider document={<Invoice invoice={invoice} />}>
        {({ blob, url, loading, error }) => {
          // Do whatever you need with blob here

          if (loading) return <div>Loading ...</div>;

          if (error) return <div>Something went wrong: {error}</div>;
          saveAs(blob, "document.pdf");
          return <div>There's something going on on the fly</div>;
        }}
      </BlobProvider> */}
    </div>
  );
}

export default App;
