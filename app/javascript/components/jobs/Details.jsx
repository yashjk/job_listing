import React from 'react'

const Details = () => {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Company Name</h5>
          <p className="card-text">Address</p>
          <div className="row justify-content-between">
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Role</p>
              <h5>Frontend Developer</h5>
            </div>
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Level</p>
              <h5>Midweight</h5>
            </div>
            <div className="bg-light col-3 rounded">
              <p className="text-muted mt-3">Contract</p>
              <h5>Fulltime Employee</h5>
            </div>
          </div>
          <h5 className="mt-3">Job description</h5>
          <h5 className="mt-3">Job Requirements</h5>
          <h5 className="mt-3">Programming Languages</h5>
          <div className="row">
            <span className="bg-light rounded text-muted ml-2">HTML</span>
            <span className="bg-light rounded text-muted ml-2">CSS</span>
            <span className="bg-light rounded text-muted ml-2">JavaScript</span>
            <span className="bg-light rounded text-muted ml-2">Ruby</span>
          </div>
          <h5>Tools</h5>
          <div className="row">
            <span className="bg-light rounded text-muted ml-2">React</span>
            <span className="bg-light rounded text-muted ml-2">Vue js</span>
            <span className="bg-light rounded text-muted ml-2">Bootstrap</span>
            <span className="bg-light rounded text-muted ml-2">TailwindCSS</span>
          </div>
        </div>
      </div>
      <button className="btn btn-primary col">APPLY NOW</button>
    </div>
    )
}

export default Details;
