import React, { useState } from 'react';
import { Formik, Field, FieldArray } from "formik";
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const JobCreation = () => {
  const [editorState, setEditor] = useState(EditorState.createEmpty());
  const [job_description, setJobDescription] = useState('')
  const onEditorStateChange = (editorState) => {
    setEditor(editorState)
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    setJobDescription(value);
  };

  return (
    <div>
      <Formik
        initialValues={{
          company_name: '',
          job_title: '',
          address: '',
          job_requirements: '',
          role: '',
          level: '',
          contract: '',
          location: '',
          languages: [],
          tools: [],
          featured: false
        }}
        validate={values => {
          const errors = {};
          if (!values.company_name) {
            errors.company_name = "Company Name should be present."
          }

          if (!values.job_title) {
            errors.job_title = "Job title should be present."
          }

          if (!values.address) {
            errors.address = "Address should be present."
          }

          if (!values.job_requirements) {
            errors.job_requirements = "Job requirements should be present."
          }

          if (!values.role) {
            errors.role = "Role should be present."
          }

          if (!values.level) {
            errors.level = "Level should be present."
          }

          if (!values.contract) {
            errors.contract = "Contract should be present."
          }

          if (!valueslocation) {
            errors.location = "Location should be present."
          }

          if (values.languages.length == 0) {
            errors.languages="Atleast one language should be present."
          }

          if (values.tools.length == 0) {
            errors.tools = "Atleast one tool should be present."
          }
          return errors;
        }}
      >{
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
              <form className="container " onSubmit={handleSubmit}>
                <div className="row align-items-center">
                  <a href="/">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                  </a>
                  <h1 className="ml-3">Job Creation</h1>
                </div>
                <div className="container mt-3">
                  <h2>Company Info</h2>
                  <div className="row justify-content-around mb-3">
                    <input
                      className="form-control border-top-0 border-right-0 border-left-0 border-bottom col-5"
                      name="company_name"
                      placeholder="Company Name"
                      value={values.company_name}
                      onChange={handleChange}
                    />
                    {errors.company_name && <p className="invalid-feedback">{errors.company_name}</p>}
                    <input
                      className="form-control border-top-0 border-right-0 border-left-0 border-bottom col-5"
                      name="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.job_title && <p className="invalid-feedback">{errors.job_title}</p>}
                  </div>
                  <h2>Job Info</h2>
                  <div className="row justify-content-around">
                    <input
                      className="form-control border-top-0 border-right-0 border-left-0 border-bottom col-5"
                      name="job_title"
                      placeholder="Job Title"
                      value={values.job_title}
                      onChange={handleChange}
                    />
                    {errors.job_title && <p className="invalid-feedback">{errors.job_title}</p>}
                    <select name="level" id="level" onChange={handleChange} className="form-control border-top-0 border-right-0 border-left-0 border-bottom col-5">
                      <option selected disabled>Level</option>
                      <option value="0">Fresher</option>
                      <option value="1">Junior</option>
                      <option value="2">Midweight</option>
                      <option value="3">Senior</option>
                    </select>
                    {errors.level && <p className="invalid-feedback">{errors.level}</p>}
                  </div>
                  <div className="mb-3">
                    <div className="row justify-content-around">
                      <div className="col-5">
                        <select name="role" id="role" onChange={handleChange} className="form-control border-top-0 border-right-0 border-left-0 border-bottom">
                          <option selected disabled>Role</option>
                          <option value="0">Frontend</option>
                          <option value="1">Backend</option>
                          <option value="2">FullStack</option>
                          <option value="3">Intern</option>
                        </select>
                        {errors.role && <p className="invalid-feedback">{errors.role}</p>}
                      </div>
                      <div className="col-5">
                        <select name="contract" id="contract" onChange={handleChange} className="form-control border-top-0 border-right-0 border-left-0 border-bottom">
                          <option selected disabled>Contract</option>
                          <option value="0">Full Time</option>
                          <option value="1">Part Time</option>
                          <option value="2">Contract</option>
                        </select>
                        {errors.contract && <p className="invalid-feedback">{errors.contract}</p>}
                      </div>
                    </div>
                    <div className="row justify-content-around">
                      <select name="location" id="location" onChange={handleChange} className="form-control border-top-0 border-right-0 border-left-0 border-bottom col-5">
                        <option selected disabled>Location</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Dharamsala">Dharamsala</option>
                        <option value="Hubli">Hubli</option>
                        <option value="Indore">Indore</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Lucknow">Patna</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Patna">Patna</option>
                        <option value="Pune">Pune</option>
                        <option value="Silvassa">Silvassa</option>
                        <option value="Surat">Surat</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Vadodra">Vadodra</option>
                      </select>
                      {errors.location && <p className="invalid-feedback">{errors.location}</p>}
                      <div className="col-5"></div>
                    </div>
                  </div>
                  <h2>Job Overview</h2>
                  <textarea
                    maxLength="500"
                    className="row form-control border-top-0 border-right-0 border-left-0 border-bottom mt-2"
                    name="job_requirements"
                    placeholder="Job requirements"
                    value={values.job_requirements}
                    onChange={handleChange}
                  />
                  {errors.job_requirements && <p class Name="invalid-feedback">{errors.job_requirements}</p>}
                  <div>
                    <Editor
                      editorState={editorState}
                      wrapperClassName="mt-3"
                      placeholder="Job description"
                      onEditorStateChange={onEditorStateChange}
                    />
                    {errors.job_requirements && <p className="invalid-feedback">{errors.job_requirements}</p>}
                  </div>
                  <FieldArray
                    name="tools"
                    render={arrayHelpers => (
                      <div>
                        {values.tools && values.tools.length > 0 ? (
                          values.tools.map((tool, index) => (
                            <div key={index}>
                              <Field placeholder="Add a language" className="form-control border-top-0 border-right-0 border-left-0 border-bottom mt-2" name={`tools.${index}`} />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => arrayHelpers.insert(index, '')}
                              >
                                +
                              </button>
                            </div>
                          ))
                        ) : (
                            <input type="text" placeholder="Add a tool" className="form-control border-top-0 border-right-0 border-left-0 border-bottom mt-2" onClick={() => arrayHelpers.push('')} />
                          )}
                        <div>
                          <button className="btn btn-primary mt-2" type="submit">Add</button>
                        </div>
                      </div>
                    )}
                  />
                  {errors.tools && <p className="invalid-feedback">{errors.tools}</p>}
                  <FieldArray
                    name="languages"
                    render={arrayHelpers => (
                      <div>
                        {values.languages && values.languages.length > 0 ? (
                          values.languages.map((language, index) => (
                            <div key={index}>
                              <Field placeholder="Add a language" className="form-control border-top-0 border-right-0 border-left-0 border-bottom mt-2" name={`languages.${index}`} />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => arrayHelpers.insert(index, '')}
                              >
                                +
                              </button>
                            </div>
                          ))
                        ) : (
                            <input type="text" placeholder="Add a language" className="form-control border-top-0 border-right-0 border-left-0 border-bottom mt-2" onClick={() => arrayHelpers.push('')} />
                          )}
                        <div>
                          <button className="btn btn-primary mt-2" type="submit">Add</button>
                        </div>
                      </div>
                    )}
                  />
                  {errors.languages && <p className="invalid-feedback">{errors.languages}</p>}
                  <div className="row align-items-baseline mt-3">
                    <label htmlFor="featured">Featured:</label>
                    <input className="ml-2" name="featured" type="checkbox" onChange={handleChange} value={values.featured}/>
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}className="btn btn-primary col mb-3">CREATE JOB</button>
              </form>
            )
        }
      </Formik>
    </div>
  )
}

export default JobCreation;