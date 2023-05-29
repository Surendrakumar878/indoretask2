import { Col, Input, Radio, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
// import Report from "react-data-report"
import schedule from "../page/reports/scheduleview.module.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
const FRMVehicle_View_Owner = () => {
  const [data, setData] = useState([]);
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);
  const [vehicle, setVehicle] = useState();
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [demand_by, setdemand_by] = useState("");
  const [vehicle_type, setvehicle_type] = useState();
  const [goods_name, setgoods_name] = useState();
  const [vehicle_body_type, setvehicle_body_type] = useState();
  const [vehicle_capacity, setvehicle_capacity] = useState();
  const [owner, setOwner] = useState("");
  console.log(vehicle);
  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:3004/vehicle")
        .then((res) => {
          setUserdata(res.data);
          setData(res.data.slice(0, 100));
        })
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  useEffect(() => {
    setData(userData.filter((res) => res.from.includes(from)));
  }, [from]);
  useEffect(() => {
    setData(userData.filter((res) => res.to.includes(to)));
  }, [to]);
  useEffect(() => {
    setData(userData.filter((res) => res.demand_by.includes(demand_by)));
  }, [demand_by]);
  useEffect(() => {
    setData(userData.filter((res) => res.vehicle_type.includes(vehicle_type)));
  }, [vehicle_type]);

  useEffect(() => {
    setData(userData.filter((res) => res.goods_name.includes(goods_name)));
  }, [goods_name]);
  useEffect(() => {
    setData(
      userData.filter((res) =>
        res.vehicle_body_type.includes(vehicle_body_type)
      )
    );
  }, [vehicle_body_type]);

  useEffect(() => {
    setData(
      userData.filter((res) => res.vehicle_capacity.includes(vehicle_capacity))
    );
  }, [vehicle_capacity]);

  const [pagenumber, setPagenumber] = useState(0);
  const perpage = 10;
  const pageclick = pagenumber * perpage;
  const countpage = Math.ceil(data.length / perpage);
  console.log(countpage);
  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };
  return (
    <div className="w-[98%] m-auto">
      {/* <Report data={"example"}/> */}

      <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">
        {" "}
        FRM Vehicle View Owner{" "}
      </div>
      <div className="flex flex-wrap gap-2 m-auto justify-center py-4">
        
        <div className="">
          <label style={{ paddingLeft: "10px" }}>Station From </label>
          <br />
          <select
            className="px-10 w-40 py-1 outline-0 border border-collapse rounded-md"
            onChange={(e) => setfrom(e.target.value)}
            value={from}
            placeholder="form"
          >
            <option className="px-10 py-1 " value={""}>
              {"city"}
            </option>
            <option className="px-10 py-1" value={"indore"}>
              {"indore"}
            </option>
            <option className="px-10 py-1" value={"bhopal"}>
              {"bhopal"}
            </option>
            <option className="px-10 py-1" value={"opton3"}>
              {"sehore"}
            </option>
          </select>
        </div>
       
        <div>
          <label style={{ paddingLeft: "10px" }}>Station To </label>
          <br />
          <select
            className="px-10 py-1 w-40 outline-0 border border-collapse rounded-md"
            onChange={(e) => setto(e.target.value)}
            value={to}
            placeholder="to"
          >
            <option className="px-10 py-1" value={"opton1"}>
              {"city"}
            </option>
            <option className="px-10 py-1" value={"indore"}>
              {"indore"}
            </option>
            <option className="px-10 py-1" value={"bhopal"}>
              {"bhopal"}
            </option>
            <option className="px-10 py-1" value={"opton1"}>
              {"sehore"}
            </option>
          </select>
        </div>

        <div>
          <label style={{ paddingLeft: "10px" }}>Demand BY</label>
          <br />
          <select
            className="px-10 py-1 w-40 outline-0 border border-collapse rounded-md"
            onChange={(e) => setdemand_by(e.target.value)}
            value={demand_by}
            placeholder="form"
          >
            <option className="px-10 py-1" value={"option1"}>
              {"option1"}
            </option>
            <option className="px-10 py-1" value={"option2"}>
              {"option2"}
            </option>
          </select>
        </div>

        <div>
          <label style={{ paddingLeft: "10px" }}> Vahicle Type </label>
          <br />
          <select
            className="px-10 py-1 w-40 outline-0 border border-collapse rounded-md"
            onChange={(e) => setvehicle_type(e.target.value)}
            value={vehicle_type}
            placeholder="form"
          >
            <option className="px-10 py-1" value={"bus"}>
              {"bus"}
            </option>
            <option className="px-10 py-1" value={"car"}>
              {"car"}
            </option>
          </select>
        </div>
        
       
       
        <div>
          <label style={{ paddingLeft: "10px" }}> Vehicle Body Type </label>
          <br />
          <select
            className="px-10 py-1 w-40 outline-0 border border-collapse rounded-md"
            onChange={(e) => setvehicle_body_type(e.target.value)}
            value={vehicle_body_type}
            placeholder="form"
          >
            <option className="px-10 py-1" value={"option1"}>
              {"option1"}
            </option>
            <option className="px-10 py-1" value={"option2"}>
              {"option2"}
            </option>
          </select>
        </div>
       
        <div>
          <label style={{ paddingLeft: "10px" }}>Vehicle Capacity</label>
          <br />
          <select
            className="px-10 py-1 w-40 outline-0 border border-collapse rounded-md"
            onChange={(e) => setvehicle_capacity(e.target.value)}
            value={vehicle_capacity}
            placeholder="form"
          >
            {/* {state.map((items) => ( */}
            <option className="px-10 py-1" value={"option1"}>
              {"option1"}
            </option>
            <option className="px-10 py-1" value={"option2"}>
              {"option2"}
            </option>
            {/* ))} */}
          </select>
        </div>
        <div>
          <label style={{ paddingLeft: "10px" }}>Goods Name</label>
          <br />
          <input
            className="px-10 py-1 w-80 outline-0 border border-collapse rounded-md"
            type="text"
            placeholder="Search by goods_name"
            value={goods_name}
            onChange={(e) => setgoods_name(e.target.value)}
          />
        </div>
     
      </div>

      <div className="lg:grid lg:grid-cols-5 lg:gap-5 grid grid-cols-1 p-4 gap-2 text-[11px] lg:text-xs sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-2">
        {data?.slice(pageclick, pageclick + perpage).map((e) => (
          <div className="w-full mx-auto bg-white rounded-xl  shadow-2xl border-collapse border overflow-hidden md:max-w-2xl">
            <div className="">
              <div className="">
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div> */}
                <p className="bg-blue-900  p-1 text-white text-center font-extrabold">
                  Enq id: {e.enq_id}{" "}
                </p>
                <div className="p-2">
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Enq date/time: </span>{" "}
                      {e.enq_id}
                    </span>
                    <span>
                      {" "}
                      <span className="font-bold"> From:</span>
                      {e.from}{" "}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold"> To: </span> {e.to}
                    </span>
                    <span>
                      <span className="font-bold">Demand by:</span>{" "}
                      {e.demand_by}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Vehicle type:</span>
                      {e.vehicle_type}
                    </span>
                    <span>Vehicle Height:{e.vehicle_height}</span>{" "}
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold"> Vehicle size:</span>
                      {e.vehicle_size}
                    </span>
                    <span>
                      <span className="font-bold"> Vehicle capacity:</span>
                      {e.vehicle_capacity}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      {" "}
                      <span className="font-bold">Vehicle body type:</span>{" "}
                      {e.vehicle_body_type}
                    </span>
                    <span>
                      {" "}
                      <span className="font-bold">Goods name:</span>
                      {e.goods_name}
                    </span>{" "}
                  </div>
                  <div className="flex gap-2">
                    <span>
                      {" "}
                      <span className="font-bold">Total weight:</span>{" "}
                      {e.total_weight}
                    </span>{" "}
                  </div>

                  {/* <button className="text-center  btn btn-success bg-orange-500  px-1 w-full text-[8px]  p-1  rounded-lg text-white " >Apply</button> */}
                  <img
                    src="providevahicle.jpg"
                    className="w-28 lg:w-40 sm:w-40 m-auto rounded-lg border"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
          //   previousLinkClassName={"previousBttn"}
          //   nextLinkClassName={"nextBttn"}
          activeClassName={"active"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          //   disabledClassName={"paginationDisabled"}
        />
      </div>
    </div>
  );
};

export default FRMVehicle_View_Owner;
