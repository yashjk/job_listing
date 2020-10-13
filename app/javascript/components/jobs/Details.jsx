import React from "react";
import { Tag } from "antd";
import "antd/dist/antd.css";

const Details = (props) => {
  return (
    <div
      className="container"
      style={{
        fontFamily: "'Spartan', sans-serif",
        boxShadow: "3px 3px 18px -4px rgba(0,0,0,0.47)",
      }}
    >
      <div className="mb-3  p-3">
        <div className="card-body">
          <h5 className="card-title heading-2" style={{ fontWeight: "700" }}>
            {props.company_name}
          </h5>
          <p className="card-text">{props.location}</p>
          <div className="row justify-content-between">
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Role</p>
              <h5>{props.role}</h5>
            </div>
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Level</p>
              <h5>{props.level}</h5>
            </div>
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Contract</p>
              <h5>{props.contract}</h5>
            </div>
          </div>
          <h4 className="heading mt-3">Job Title</h4>
          <p>{props.job_title}</p>
          <h4 className="heading mt-3">Job description</h4>
          <p>{props.job_description}</p>
          <h4 className="heading mt-3">Job Requirements</h4>
          <p>{props.job_requirements}</p>
          <h4 className="heading mt-3">Programming Languages</h4>
          <div className="row">
            {props.languages.map((language) => (
              <Tag
                style={{
                  backgroundColor: "hsl(180, 31%, 95%)",
                  color: "hsl(180, 8%, 52%)",
                  fontWeight: 700,
                  margin: "1rem",
                }}
              >
                {language}
              </Tag>
            ))}
          </div>
          <h4 className="heading">Tools</h4>
          <div className="row">
            {props.tools.map((tool) => (
              <Tag
                style={{
                  backgroundColor: "hsl(180, 31%, 95%)",
                  color: "hsl(180, 8%, 52%)",
                  fontWeight: 700,
                  margin: "1rem",
                }}
              >
                {tool}
              </Tag>
            ))}
          </div>
        </div>
        <button className="btn btn-primary col">APPLY NOW</button>
      </div>
    </div>
  );
};

export default Details;
