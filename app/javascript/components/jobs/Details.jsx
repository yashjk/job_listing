import React from "react";
import { DetailsContainer, DetailTags, DetailsImage } from "../../utils/StyledComponent";
import "antd/dist/antd.css";

const Details = (props) => {
  return (
    <div className="container">
      <DetailsContainer>
        <div className="d-flex justify-content-center pt-2">
          <DetailsImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk44_xOfnm3ctQGrL8S-aF8ycAioauTzfvGg&usqp=CAU"></DetailsImage>
        </div>
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
            <h4 className="heading mt-4">Job Title</h4>
            <p>{props.job_title}</p>
            <h4 className="heading mt-4">Job description</h4>
            <p>{props.job_description}</p>
            <h4 className="heading mt-4">Job Requirements</h4>
            <p>{props.job_requirements}</p>
            <h4 className="heading mt-4">Programming Languages</h4>
            <div className="row">
              {props.languages.map((language) => (
                <DetailTags>{language}</DetailTags>
              ))}
            </div>
            <h4 className="heading">Tools</h4>
            <div className="row">
              {props.tools.map((tool) => (
                <DetailTags>{tool}</DetailTags>
              ))}
            </div>
          </div>
          <button className="btn btn-primary col">APPLY NOW</button>
        </div>
      </DetailsContainer>
    </div>
  );
};

export default Details;
