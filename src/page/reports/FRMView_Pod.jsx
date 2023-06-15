import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import r from "../rpt.module.css";
import ReactPaginate from "react-paginate";
import { Input } from "antd";
const FRMView_Pod = () => {
  const [data, setDate] = useState([]);
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);
  const [vehicle, setVehicle] = useState();
  const [booking_date, setbooking_date] = useState("");
  const [booking_no, setBooking_no] = useState();
  const [pod_no, setPod_no] = useState();
  const [report_date, setReport_date] = useState("");
  const [unloading_date, setunloading_date] = useState();
  const [pod_date, setpod_date] = useState("");
  console.log(vehicle);
  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:3004/booking")
        .then((res) => {
          setUserdata(res.data);
          setDate(res.data.slice(0, 100));
        })
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  useEffect(() => {
    setDate(userData.filter((res) => res.vehicle_no.includes(vehicle)));
  }, [vehicle]);
  useEffect(() => {
    setDate(userData.filter((res) => res.pod_no.includes(pod_no)));
  }, [pod_no]);

  useEffect(() => {
    setDate(userData.filter((res) => res.booking_no.includes(booking_no)));
  }, [booking_no]);
  useEffect(() => {
    setDate(userData.filter((res) => res.booking_date.includes(booking_date)));
  }, [booking_date]);
  useEffect(() => {
    setDate(
      userData.filter((res) => res.unloading_date.includes(unloading_date))
    );
  }, [unloading_date]);
  useEffect(() => {
    setDate(userData.filter((res) => res.pod_date.includes(pod_date)));
  }, [pod_date]);
  useEffect(() => {
    setDate(userData.filter((res) => res.report_date.includes(report_date)));
  }, [report_date]);

  console.log(userData);
  console.log(booking_date);
  const [pagenumber, setPagenumber] = useState(0);
  const perpage = 10;
  const pageclick = pagenumber * perpage;
  const countpage = Math.ceil(data.length / perpage);
  console.log(countpage);
  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };
  return (
    <div>
      <React.Fragment>
        <div className=" sm:w-[99%]  sm:m-auto ">
          <div className="">
            <div className="">
              <div
                ref={conponentPDF}
                className=" relative sm:w-full sm:m-auto w-full    border-black "
              >
                <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
                  {" "}
                  FRM View Pod{" "}
                </div>
                <div className="  pb-2">
                  <div className="  m-auto  w-full pb-3 md:w-full md:grid md:grid-cols-5 md:gap-2 sm:w-[90%] sm:m-auto grid grid-cols-2 gap-1 px-1 sm:grid sm:grid-cols-6 sm:gap-2 sm:py-3">
                    <div className="w-full ">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        Vehicle No :{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px]  w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        type="number"
                        placeholder="Search by Vehicle"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        Pod No :{" "}
                      </label>
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        type="number"
                        placeholder="Search by pod no"
                        value={pod_no}
                        onChange={(e) => setPod_no(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        {" "}
                        Booking No :{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        type="text"
                        placeholder="Search by booking no"
                        value={booking_no}
                        onChange={(e) => setBooking_no(e.target.value)}
                      />
                    </div>

                    <div className="w-full">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        Booking date/time :{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        max="2999-12-25T23:59"
                        type="datetime-local"
                        placeholder="Search by Vehicle"
                        value={booking_date}
                        onChange={(e) => setbooking_date(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        {" "}
                        Pod Date/time :{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        max="2999-12-25T23:59"
                        type="datetime-local"
                        placeholder="Search by Name"
                        value={pod_date}
                        onChange={(e) => setpod_date(e.target.value)}
                      />
                    </div>

                    <div className="w-full">
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        Report Date/time :{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 lg:w-full sm:w-32 sm:text-xs rounded-md"
                        max="2999-12-25T23:59"
                        type="datetime-local"
                        placeholder="Search by Vehicle"
                        value={report_date}
                        onChange={(e) => setReport_date(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className=" text-[10px] lg:text-[11px] sm:text-base ">
                        {" "}
                        Unloading Date:{" "}
                      </label>{" "}
                      <br />
                      <Input
                        className="border border-collapse p-1 sm:p-2 text-[12px] w-44 sm:w-32 sm:text-xs rounded-md"
                        type="date"
                        placeholder="Search by Name"
                        value={unloading_date}
                        onChange={(e) => setunloading_date(e.target.value)}
                      />
                    </div>
                  </div>
                  <table className=" w-full ">
                    <thead className="bg-[#151B54] w-full text-white">
                      <tr>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:p-2 sm:text-base  ">
                          Sr. No
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          {" "}
                          Pod Id
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Pod No{" "}
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Pod Date{" "}
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Booking No
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Booking Date
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Vehicle No{" "}
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Report Date
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Unloading Date
                        </th>
                        <th className="lg:text-[11px] text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  ">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.slice(pageclick, pageclick + perpage)
                        .map((uData, index) => (
                          <tr key={index}>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {index + 1}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                            {uData.booking_date}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {uData.pod_no}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {uData.booking_date}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {uData.booking_no}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {uData.booking_date}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                              {uData.vehicle_no}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                            {uData.booking_date}
                            </td>
                            <td className="sm:px-1 px-1 sm:text-base text-[8px] lg:text-[11px] ">
                            {uData.booking_date}
                            </td>

                            <td className="sm:px-3 px-2 sm:text-base text-base  lg:text-[11px] ">
                              <div className="  m-auto">
                                <button className=" center bg-[#151B54] sm:py-2 sm:px-2 w-16 m-auto sm:w-32 sm:text-base text-[6px] lg:text-[11px] rounded-md text-white ">
                                  Edit
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                  <div className="flex gap-4 m-auto text-center items-center  justify-center my-4  ">
                    <ReactPaginate
                      previousLable={"Previous"}
                      nextLable={"Next"}
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      pageCount={countpage}
                      onPageChange={changePage}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default FRMView_Pod;
