import React, { useState } from "react";
import Card from "../components/Card";
import { servicelist } from "../components/servicelist";

const Services = () => {
  const [service, setservice] = useState(servicelist);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container-fluid gy-3 mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {service.map((s) => {
                return <Card serv={s} key={s.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
