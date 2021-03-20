import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  CardWrapper,
  BodyWrapper,
  ListImageWrapper,
  NewTagWrapper,
  FeaturedTagWrapper,
  TagsWrapper,
  Separator,
} from "../../utils/StyledComponent";
import { createGlobalStyle } from "styled-components";

export default function List(props) {
  const [activeList, setActiveList] = useState(props.jobs || []);
  const lessThanHalfHourAgo = (date) => {
    const created_at = new Date(date);
    const now = new Date();
    const timeAgo = now - created_at;
    return timeAgo < 1000 * 60 * 30;
  };

  const timeAgo = (date) => {
    const created_at = new Date(date);
    const now = new Date();
    const elapsedTime = Math.floor((now - created_at) / (1000 * 60 * 60 * 24));

    return elapsedTime < 1
    ? "New"
    : elapsedTime >= 2
    ? elapsedTime + " days ago"
    : "1 day ago";
  };
  const handleActiveTag = (value, key) => {
    const filteredList = props.jobs.filter((job) => job[key].includes(value));
    setActiveList(filteredList);
  };

  const renderShowPage = (id) => {
    window.location.href = `/jobs/${id}`;
  };

  return (
    <BodyWrapper>
      <div className="container">
        <button
          className="btn btn-link"
          onClick={() => {
            setActiveList(props.jobs);
          }}
        >
          clear active list
        </button>
        <div>
          {activeList.map((job, i) => (
            console.log(job, i, `Job ${i +1}`),
            <CardWrapper key={job.id}>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-2">
                <div>
                  <div className="col">
                    <div className="row" onClick={() => renderShowPage(job.id)}>
                      <div className="col-1 d-flex justify-content-center align-items-center ml-3">
                        <ListImageWrapper src="data:image/png;base64,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"></ListImageWrapper>
                      </div>
                      <div className="ml-5">
                        <div className="row">
                          <p className="redirect">{job.company_name}</p>
                          {lessThanHalfHourAgo(job.created_at) && (
                            <NewTagWrapper>New</NewTagWrapper>
                          )}
                          {job.featured && (
                            <FeaturedTagWrapper>Featured</FeaturedTagWrapper>
                          )}
                        </div>
                        <div className="row">
                          <p className="heading2">{job.job_title}</p>
                        </div>
                        <div className="row text-muted align-items-center">
                          <small>{timeAgo(job.created_at)}</small>
                          <p className="m-2">.</p>
                          <small>{job.contract}</small>
                          <p className="m-2">.</p>
                          <small>{job.location}</small>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                </div>
                <div className="col justify-content-center align-items-center">
                  <div className="row justify-content-center mt-3">
                    <TagsWrapper
                      key={job.role}
                      onClick={(e) => handleActiveTag(job.role, "role")}
                    >
                      {job.role}
                    </TagsWrapper>
                    <TagsWrapper
                      onClick={(e) => handleActiveTag(job.level, "level")}
                    >
                      {job.level}
                    </TagsWrapper>
                    {job.languages.map((language) => (
                      <TagsWrapper
                        key={language}
                        onClick={(e) => handleActiveTag(language, "languages")}
                      >
                        {language}
                      </TagsWrapper>
                    ))}
                    {job.tools.map((tool) => (
                      <TagsWrapper
                        key={tool}
                        onClick={(e) => handleActiveTag(tool, "tools")}
                      >
                        {tool}
                      </TagsWrapper>
                    ))}
                  </div>
                </div>
              </div>
            </CardWrapper>
          ))}
        </div>
      </div>
    </BodyWrapper>
  );
}
