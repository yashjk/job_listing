import React from "react";
import {
  BodyWrapper,
  DetailsContainer,
  DetailTags,
  DetailsCoverImage,
  DetailsProfileImage,
  JobInfoCard,
} from "../../utils/StyledComponent";
import "antd/dist/antd.css";
import ReactHtmlParser from "react-html-parser";

const Details = (props) => {
  // const reducedArray = ReactHtmlParser(
  //   props.job_description
  // )[0].props.children;

  // const reducedArray2 = reducedArray.map((elm) => elm.props);

  // console.log(reducedArray2.map());

  return (
    <BodyWrapper>
      <div className="container">
        <DetailsContainer>
          <div className="d-flex justify-content-center">
            <DetailsCoverImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTku7E3WZrhfawnWa3_08aHZUOhXaHo9wpRPQ&usqp=CAU"></DetailsCoverImage>
          </div>
          <div>
            <DetailsProfileImage src="https://lh3.googleusercontent.com/proxy/zL4WdEG3cG15yqOpSzvhqnckcOBp2XGOAwPEPPTwNGOG4lL8Etbp8EIG0LB6z-pcTXlRPVVyXCoY6OO_Y9KQRA"></DetailsProfileImage>
          </div>
          <div className="mb-3  p-4">
            <div className="card-body">
              <h5
                className="card-title heading-2"
                style={{ fontWeight: "700" }}
              >
                {props.company_name}
              </h5>
              <p className="card-text">{props.address}</p>
              <div className="row justify-content-around">
                <JobInfoCard>
                  <p className="text-muted mt-2">Role</p>
                  <h4 className="mt-1">{props.role} Developer</h4>
                </JobInfoCard>
                <JobInfoCard>
                  <p className="text-muted mt-2">Level</p>
                  <h4 className="mt-1">{props.level}</h4>
                </JobInfoCard>
                <JobInfoCard>
                  <p className="text-muted mt-2">Contract</p>
                  <h4 className="mt-1">{props.contract} Employee</h4>
                </JobInfoCard>
              </div>
              <h4 className="heading2 mt-6">Job Title</h4>
              {props.job_title}
              <h4 className="heading2 mt-4">Job description</h4>
              <p>{ReactHtmlParser(props.job_description)}</p>
              <h4 className="heading2 mt-4">Job Requirements</h4>
              <p>{props.job_requirements}</p>
              <h4 className="heading2 mt-4">Programming Languages</h4>
              <div className="row">
                {props.languages.map((language) => (
                  <DetailTags>{language}</DetailTags>
                ))}
              </div>
              <h4 className="heading2">Tools</h4>
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
      </BodyWrapper>
  );
};

export default Details;
