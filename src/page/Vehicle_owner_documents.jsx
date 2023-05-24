import { Button, Card, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useReactToPrint } from "react-to-print";
import v from "./Vehicle_owner_documents.module.css";
import jsPDF from "jspdf";

// all download
function convertImagesToPdf(images) {
  return new Promise((resolve, reject) => {
    const pdf = new jsPDF();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let totalHeight = 0;
    const maxWidth = pdf.internal.pageSize.getWidth();
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const img = new Image();
      img.onload = function () {
        const ratio = img.width / img.height;
        const height = maxWidth / ratio;
        totalHeight += height;
        canvas.width = maxWidth;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, maxWidth, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(
          dataUrl,
          "JPEG",
          0,
          totalHeight - height,
          maxWidth,
          height
        );
        if (i === images.length - 1) {
          resolve(pdf);
        }
      };
      img.onerror = function () {
        reject(new Error(`Failed to load image at ${image}`));
      };
      img.src = image;
    }
  });
}
// single download
function getDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}
const Vehicle_owner_documents = () => {
  function handleClick1() {
    const images = [
      "Owner.jpg",
      "tds.jpg",
      "tds.jpg",
      "Owner.jpg",
      "tds.jpg",
      "tds.jpg",
      "Owner.jpg",
      "tds.jpg",
      "tds.jpg",
    ];
    convertImagesToPdf(images)
      .then((pdf) => {
        pdf.save("allimages.pdf");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // const urls = ['Owner.jpg', 'logo512.png', 'tds.jpg'];
  function handleClick(view) {
    console.log(view);
    getDataUrl(`${view}.jpg`, function (dataUrl) {
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
      pdf.save(`${view}.pdf`);
    });
  }

  <button onClick={handleClick}>Download PDF</button>;

  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:4000/Vehicle")
        .then((res) => setUserdata(res.data.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  console.log(userData);

  const [visible, setVisible] = useState(false);
  const [view, setView] = useState("");
  const [visible1, setVisible1] = useState(false);

  const showModal = (view1) => {
    setView(view1);

    // setVisible(true);
    setVisible1(true);
  };
  const showModal1 = () => {
    // setVisible(true);

    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
    setVisible1(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
    setVisible1(false);
  };
  console.log(view);
  return (
    <div className=" m-auto  ">
      <div className="mt-2 bg-[#151B54] mb-2 text-center text-fuchsia-50 w-full">
        {" "}
        Vehicle / owner Documents{" "}
      </div>
      <div className=" py-4  w-[60%] m-auto center">
        <Card
          className="w-[90%] m-auto shadow-lg"
          hoverable
          bodyStyle={{ padding: "0" }}
        >
          {/* Owner */}

          <div className={`${v.card_menu} py-0 rounded-t-lg `}>
            <div className="py-0">
              {" "}
              <img
                className=" w-72 rounded-lg border m-auto "
                src="ownerdocument.jpg"
                alt="weqw"
              />{" "}
            </div>{" "}
          </div>

          <div className="w-[96%] m-auto   flex flex-col gap-5">
            <div>
              <div
                className="w-80  m-auto
                "
                onClick={() => showModal("owneradharcard")}
              >
                {" "}
                <img
                  className="w-60 m-auto"
                  src="owneradharcard.jpg"
                  alt=""
                />{" "}
              </div>
            </div>

            <div>
              <div className="w-80  m-auto" onClick={() => showModal("tds")}>
                {" "}
                <img className="w-60 m-auto" src="tds.jpg" alt="" />{" "}
              </div>
            </div>

            <div>
              <div
                className="w-80  m-auto"
                onClick={() => showModal("driverslicense")}
              >
                {" "}
                <img
                  className="w-60 m-auto"
                  src="driverslicense.jpg"
                  alt=""
                />{" "}
              </div>
            </div>

            <div>
              <div className="w-80  m-auto" onClick={() => showModal("ownerpancard")}>
                {" "}
                <img
                  className="w-60 m-auto"
                  src="ownerpancard.jpg"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>

          {/* vehicleducuments */}

          <div className={`${v.card_menu} py-5 rounded-t-lg `}>
            <div className="py-0">
              {" "}
              <img
           className=" w-72 rounded-lg border m-auto "
                src="vehicleducuments.jpg"
                alt=""
              />{" "}
            </div>{" "}
          </div>

          <div>
            <div className="w-[96%] m-auto  flex-col flex gap-3 text-center  ">
              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("vehiclepicture")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="vehiclepicture.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("fasttag")}
                >
                  {" "}
                  <img className="w-60 m-auto" src="fasttag.jpg" alt="" />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("vehiclerc")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="vehiclerc.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80 m-auto"
                  onClick={() => showModal("puccertificate")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="puccertificate.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto
                "
                  onClick={() => showModal("roadtax")}
                >
                  {" "}
                  <img className="w-60 m-auto" src="roadtax.jpg" alt="" />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("allindiapermit")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="allindiapermit.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("statepermit")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="statepermit.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>

              <div>
                <div
                  className="w-80  m-auto"
                  onClick={() => showModal("greentex")}
                >
                  {" "}
                  <img className="w-60 m-auto" src="greentex.jpg" alt="" />{" "}
                </div>
              </div>
              <div>
                <div
                  className="w-80  m-auto "
                  onClick={() => showModal("insurance")}
                >
                  {" "}
                  <img
                    className="w-60 m-auto"
                    src="insurance.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            {/* <div className="w-full m-auto text-center my-5">
              <Button
                className="m-auto w-40" // onClick={()=> showModal1()}
               
              >
                {" "}
                {" "}

                <img src="alldocument.jpg" alt="" />
              </Button>
            </div> */}

            <div className={`${v.card_menu} py-0 rounded-t-lg `}>
            <div className="py-0">
              {" "}
              <img
               onClick={handleClick1}
                className=" w-72 rounded-lg border m-auto "
                src="alldocument.jpg"
                alt="weqw"
              />{" "}
            </div>{" "}
          </div>
          </div>
          <Modal
            title=""
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"80%"}
          >
            <div ref={conponentPDF}>
              {" "}
              <img src="owneradharcard.jpg" alt="transduniya" />
              <img src="driverslicense.jpg" alt="transduniya" />
              <img src="owneradharcard.jpg" alt="transduniya" />
              <img src="tds.jpg" alt="transduniya" />
              <img src="greentex.jpg" alt="transduniya" />
              <img src="insurance.jpg" alt="transduniya" />
              <img src="statepermit.jpg" alt="transduniya" />
              <img src="allindiapermit.jpg" alt="transduniya" />
              <img src="puccertificate.jpg" alt="puccertificate" />
              <img src="roadtax.jpg" alt="transduniya" />
              <img src="vehiclerc.jpg" alt="transduniya" />
              <img src="fasttag.jpg" alt="transduniya" />
              <img src="vehiclepicture.jpg" alt="transduniya" />
            </div>
            <div className="text-center flex gap-4 justify-center">
              <button
                className="btn btn-success bg-[#151B54] py-3 px-2 w-44 text-xl mt-10 rounded-lg text-white "
                onClick={handleClick1}
              >
                Download{" "}
              </button>
              <button
                className="btn text-center btn-success bg-[#151B54] py-3 px-2 w-28 text-xl mt-10 rounded-lg text-white "
                onClick={generatePDF}
              >
                Print
              </button>
            </div>
          </Modal>

          <Modal
            title=""
            visible={visible1}
            // onOk={handleOk}
            onCancel={handleCancel}
            width={"80%"}
          >
            <div ref={conponentPDF}>
              {view == "ownerpancard" && <img src="ownerpancard.jpg" alt="transduniya" />}
              {view == "driverslicense" && (
                <img src="driverslicense.jpg" alt="transduniya" />
              )}
              {view == "owneradharcard" && (
                <img src="owneradharcard.jpg" alt="transduniya" />
              )}
              {view == "tds" && <img src="tds.jpg" alt="transduniya" />}

              {view == "greentex" && (
                <img src="greentex.jpg" alt="transduniya" />
              )}
              {view == "insurance" && (
                <img src="insurance.jpg" alt="transduniya" />
              )}
              {view == "statepermit" && (
                <img src="statepermit.jpg" alt="transduniya" />
              )}
              {view == "allindiapermit" && (
                <img src="allindiapermit.jpg" alt="transduniya" />
              )}
              {view == "puccertificate" && (
                <img src="puccertificate.jpg" alt="puccertificate" />
              )}
              {view == "roadtax" && <img src="roadtax.jpg" alt="transduniya" />}
              {view == "vehiclerc" && (
                <img src="vehiclerc.jpg" alt="transduniya" />
              )}

              {view == "fasttag" && <img src="fasttag.jpg" alt="transduniya" />}
              {view == "vehiclepicture" && (
                <img src="vehiclepicture.jpg" alt="transduniya" />
              )}
            </div>
            <div className="text-center flex gap-4 justify-center">
              <button
                className="btn btn-success bg-[#151B54] py-3 px-2 w-28 text-xl mt-10 rounded-lg text-white "
                onClick={generatePDF}
              >
                Print
              </button>

              <button
                className="btn btn-success bg-[#151B54] py-3 px-2 w-44 text-xl mt-10 rounded-lg text-white "
                onClick={() => handleClick(view)}
              >
                Download{" "}
              </button>
            </div>
          </Modal>
        </Card>
      </div>
    </div>
  );
};

export default Vehicle_owner_documents;
