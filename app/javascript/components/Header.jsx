import React from "react";
import "../../assets/stylesheets/application.css";
import { HeaderWrapper } from "../utils/StyledComponent";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="d-flex justify-content-end pt-2 pb-2">
          <a href="/" className="btn btn-primary">
            Job List
          </a>
          <a href="/jobs/new" className="btn btn-primary ml-3">
            Add Job
          </a>
        </div>
      </div>
    </HeaderWrapper>
  );
}
