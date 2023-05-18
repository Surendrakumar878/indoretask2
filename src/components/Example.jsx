import { Button } from "antd";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Table } from "antd";

class ComponentToPrint extends React.Component {
  render() {
    const columns = [
      {
        title: "Title",
        dataIndex: "title"
      },
      {
        title: "Description",
        dataIndex: "description"
      }
    ];

    const data = [];
    for (let i = 1; i < 101; i++) {
      data.push({
        key: i,
        title: `Random Data here`,
        description: "this items does things",
        num: `${i}`
      });
    }
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>
                <div class="header-space"> Unclassified </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>
                  <div class="content">
                    {item?.title} {item?.description} {item?.num}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div class="footer-space"> Unclassified </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="header"></div>
        <div class="footer"></div>
      </React.Fragment>
    );
  }
}

const Example = () => {
  const printRef = useRef();
  const pageStyle = `
  @page { 
    size: auto;  margin: 0mm ; } @media print { body { -webkit-print-color-adjust: exact; } }
  @media print {
    div.page-footer {
    position: fixed;
    bottom:0mm;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #fff;
    /* For testing */
    background: red; 
    opacity: 0.5;
    
    page-break-after: always;
    }
    .page-number:before {
      /* counter-increment: page; */
      content: "Pagina "counter(page);
    }


  }
  body {
    marginBottom:50px
  }
  `;

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    removeAfterPrint: true,
    copyStyles: true
  });

  return (
    <div>
      <Button onClick={handlePrint} style={{ marginTop: "200px" }}>
        print
      </Button>
      <ComponentToPrint ref={printRef} />
    </div>
  );
};

export default Example;
