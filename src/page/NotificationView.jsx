import React, { useEffect, useRef, useState } from 'react'
import { Modal, message } from 'antd';
import jsPDF from "jspdf";
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

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
const NotificationView = () => {
    const [visible, setVisible] = useState(false);
    const [view, setView] = useState("");
    const [visible1, setVisible1] = useState(false);
    const showModal = (view1) => {
        setView(view1);
    
        // setVisible(true);
        setVisible1(true);
      };
      const showModal1 = (view1) => {
        setView(view1);
    
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

      const handleOk1 = (e) => {
        console.log(e);
        setVisible(false);
       
      };
    
      const handleCancel1 = (e) => {
        console.log(e);
        setVisible(false);
      
      };
      

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
    
      
    
     
    
    
    
      
     
    
    
     
  return (
    <div>
      <div className='w-[98%] m-auto'>
{/* <Report data={"example"}/> */}
<div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">  Notification View </div> 
    <div className='lg:grid lg:grid-cols-5 lg:gap-5 grid grid-cols-2 gap-2 text-[8px] lg:text-xs sm:grid sm:grid-cols-2 sm:gap-4' >

 
    {[1,2,3,4,5,6,6,8].map((e)=>(<div className="w-full mx-auto bg-white rounded-xl  shadow-2xl border-collapse border overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="p-2">
          {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div> */}
      <p className='bg-blue-900 rounded-md p-1 text-white text-center font-bold'>Notification id: 3654325 </p>
      <p>Notification Date/Time:</p>
      <p> Notification : </p>
      <p>  Message: </p>
     
      {/* <button className="text-center  btn btn-success bg-orange-500  px-1 w-full text-[8px]  p-1  rounded-lg text-white "   onClick={() => showModal("greentex")} >View</button> */}
      <img src="viewdetail.jpg" className='w-28 lg:w-40 sm:w-40 m-auto rounded-lg border' alt=""  onClick={() => showModal("greentex")}   />
        </div>
      </div>
    </div>))
      
      }
   
   
    
    
   
   
    
   

    
      
    </div>
    </div>

    <Modal
            title=""
            visible={visible1}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"90%"}
          >
            <p className='bg-blue-900 rounded-md p-1 text-white text-center font-bold'>Notification id: 3654325 </p>
      <span className='font-bold'>Notification Date/Time: </span><span>4/20/2023</span> 

      <br />
      
      <span className='font-bold'> Notification Type: </span><span>type</span> 
      <br />
      <span className='font-bold'> Message:
       </span><span>Lorram Medical Systems Private Limited is a Private incorporated on 06 March 2013. It is classified as Non-govt company and is registered at Registrar of Companies, Hyderabad. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 10,000,000. It is inolved in Manufacture of other chemical product</span> 
            

            <div className='flex gap-2 flex-wrap' >
                 <img src="Owner.jpg" alt="css"   className="btn btn-success  py-2 px-2 w-32 text-base mt-10 rounded-lg text-white " onClick={() => showModal1("greentex")} />
                <img  src="Owner.jpg" alt="css"   className="btn btn-success  py-2 px-2 w-32 text-base mt-10 rounded-lg text-white "  onClick={() => showModal1("greentex")} />
                <div className="btn btn-success bg-[#151B54] py-2 px-2 w-16 text-[10px] mt-10 rounded-lg text-white "  onClick={handleClick1}>PDF1</div>
                <div className="btn btn-success bg-[#151B54] py-2 px-2 w-16 text-[10px] mt-10 rounded-lg text-white   "  onClick={handleClick1}>PDF2</div>   </div>
          </Modal>
          
    <Modal
            title=""
            visible={visible}
            onOk={handleOk1}
            onCancel={handleCancel1}
            width={"50%"}
            okText="ok"
            cancelText="Close"
           
          >

            <img src="Owner.jpg" alt="css"  />
          </Modal>
    </div>
  )
}

export default NotificationView
