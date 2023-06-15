import {
  Button,
  Input,
  Form,
  Row,
  Radio,
  Col,
  Upload,
  Card,
  Select,
  DatePicker,
  Checkbox,
  Watermark,
} from "antd";
import { React, useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
// import './Register.css'

import TextArea from "antd/es/input/TextArea";
import n from "../Notification.module.css";
import { Option } from "antd/es/mentions";

const FRMNews = () => {
  const [verfied, setVerifed] = useState(false);

  function onChange() {
    setVerifed(true);
  }
  const [fileList1, setFile1] = useState([]);
  const fileProps1 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList1.indexOf(file);
      const newFileList = fileList1.slice();
      newFileList.splice(index, 1);
      setFile1(newFileList);
    },

    beforeUpload: (file) => {
      setFile1([...fileList1, file]);
    },

    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const [fileList2, setFile2] = useState([]);
  const fileProps2 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList2.indexOf(file);
      const newFileList = fileList2.slice();
      newFileList.splice(index, 1);
      setFile2(newFileList);
    },

    beforeUpload: (file) => {
      setFile2([...fileList2, file]);
    },

    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const saveData = async (values) => {
    const reg_data = {
      news_id: values.news_id,
      news_date_time: values.news_date_time,
      news_end_date_time: values.news_end_date_time,
      news_messages: values.news_messages,
      image1: values.image1,
      image2: values.image2,
    };
    alert("success");
    console.log(reg_data);
  };

  return (
    <>
      <h2 id={n.heading}> Admin News</h2>
      <div className={n.mainForm}>
        <Card hoverable bodyStyle={{ padding: "0" }}>
          <Form layout="vertical" autoComplete="off" onFinish={saveData}>
            <h3 className={n.card_menu}>News </h3>
            <Row>
              <Col className={n.select_option_col}>
                <Form.Item
                  name="News_id"
                  label={<lable style={{ fontSize: "15px" }}>News id</lable>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your News id !",
                    },
                  ]}
                  style={{ width: "96%", marginBottom: "10px" }}
                  hasFeedback
                >
                  <Input placeholder="News" tabIndex={1} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className={n.select_option_col}>
                <Form.Item
                  name="News_date_time"
                  label={
                    <label style={{ fontSize: "15px" }}>News Date/time</label>
                  }
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{ width: "96%", marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <input
                    max="2099-12-25T23:59"
                    //  value={"hire_date_time"}
                    //  onChange={(e)=>sethire_date_time(e.target.value)}

                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="datetime-local"
                    name="search"
                  />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className={n.select_option_col}>
                <Form.Item
                  name="news_end_date_time"
                  label={
                    <label style={{ fontSize: "15px" }}>
                      news End Date/time
                    </label>
                  }
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback
                  style={{ width: "96%", marginBottom: "10px" }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  <input
                    max="2099-12-25T23:59"
                    //  value={"hire_date_time"}
                    //  onChange={(e)=>sethire_date_time(e.target.value)}

                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-[90%] border border-slate-300 rounded-md py-1 pl-1 sm:pl-9 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="datetime-local"
                    name="search"
                  />

                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col className={n.select_option_col}>
                <Form.Item
                  name="news_Heading"
                  label={
                    <label style={{ fontSize: "15px" }}>News Heading</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Heading !",
                    },
                  ]}
                  hasFeedback
                  style={{
                    paddingLeft: "0px",
                    width: "96%",
                    marginBottom: "10px",
                  }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
              
                  <TextArea placeholder="News Heading" tabIndex={1}  showCount maxLength={50}  />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className={n.select_option_col}>
                <Form.Item
                  name="news_messages"
                  label={
                    <label style={{ fontSize: "15px" }}>News Messages</label>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your news Messages!",
                    },
                  ]}
                  hasFeedback
                  style={{
                    paddingLeft: "0px",
                    width: "96%",
                    marginBottom: "10px",
                  }}
                >
                  {/* <Tooltip title="Enter Your Address" > */}
                  
                  {/* </Tooltip> */}
                  <TextArea placeholder="News Messages" tabIndex={2}  showCount maxLength={500}  />
                </Form.Item>
              </Col>
            </Row>

            <h3 className={`${n.card_menu} my-4`}>DOCUMENTS</h3>
            <Row>
              <Col className={n.upload_col}>
                <Form.Item
                  name="image1"
                  label={<label style={{ fontSize: "15px" }}> Image1 </label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "image1!",
                    },
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps1}>
                    <Button icon={<UploadOutlined />} tabIndex={17}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col className={n.upload_col}>
                <Form.Item
                  name="image2"
                  label={<label style={{ fontSize: "15px" }}>Image2</label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "image2!",
                    },
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps2}>
                    <Button icon={<UploadOutlined />} tabIndex={18}>
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <div className="center">
              <Row>
                <Form.Item className="w-40 m-auto pb-4">
                  <button
                    type="submit"
                    // disabled={!verfied}
                    style={{
                      marginTop: "20px",
                    }}
                    className="button m-auto w-40 bg-[#151B54] rounded-lg p-2 text-white hover:text-white "
                  >
                    Submit
                  </button>
                </Form.Item>
              </Row>
            </div>
          </Form>
        </Card>
      </div>
      {/* <Footer /> */}
      {/* <Watermark
      // className="bg-no-repeat "
  height={30}
  width={130}
  // content="Ant Design"
  image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
>
  <div style={{ height: 500 }} />
</Watermark> */}
    </>
  );
};
export default FRMNews;
