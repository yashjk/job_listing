import React, { useState } from "react";
import { Formik, Field, FieldArray } from "formik";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import "antd/dist/antd.css";
import { Form, Input, Select, Checkbox } from "antd";
import cities from "../../utils/cities";
import { fetchApi } from "../../utils/API";

const JobCreation = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [editorState, setEditor] = useState(EditorState.createEmpty());
  const [job_description, setJobDescription] = useState("");
  const [initialValues, setInitialValues] = useState({
    company_name: "",
    job_title: "",
    address: "",
    job_requirements: "",
    role: "",
    level: "",
    contract: "",
    location: "",
    languages: [],
    tools: [],
    featured: false,
  });

  const style = {
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  };

  const handleChange = ({ target: { name, value } }) => {
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };

  const onEditorStateChange = (editorState) => {
    setEditor(editorState);
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
    setJobDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      company_name,
      job_title,
      address,
      job_requirements,
      role,
      level,
      contract,
      location,
      languages,
      tools,
      featured,
    } = initialValues;
    const job = {
      company_name: company_name,
      job_title: job_title,
      job_description: job_description,
      job_requirements: job_requirements,
      address: address,
      role: role,
      level: level,
      contract: contract,
      location: location,
      languages: languages,
      tools: tools,
      featured: featured,
    };
    if (
      company_name &&
      job_title &&
      address &&
      job_requirements &&
      role &&
      level &&
      contract &&
      location &&
      languages.length > 0 &&
      tools.length > 0
    ) {
      fetchApi({
        url: "/jobs",
        method: "POST",
        body: { job },
        onError: (error) => console.log(error),
        onSuccess: (response) => console.log(response),
        successcallBack: () => (window.location.href = "/"),
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "hsl((180, 8%, 52%)",
        width: "100vw",
      }}
    >
      <div
        className="container"
        style={{
          fontFamily: "'Spartan', sans-serif",
          boxShadow: "3px 3px 18px -4px rgba(0,0,0,0.47)",
        }}
      >
        <div className="row align-items-center">
          <a href="/" className="ml-1">
            <svg
              width="1rem"
              height="1rem"
              fontWeight="700"
              viewBox="0 0 16 16"
              className="bi bi-arrow-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </a>
          <h1 className="m-3">Job Creation</h1>
        </div>
        <Form form={form} name="company_info">
          <h2 className="heading">Company Info:</h2>
          <div className="row">
            <div className="col-6">
              <Form.Item
                name="company_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your company name!",
                  },
                ]}
              >
                <Input
                  name="company_name"
                  placeholder="Company Name"
                  value={initialValues.company_name}
                  style={{
                    borderRight: "none",
                    borderLeft: "none",
                    borderTop: "none",
                  }}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input address!",
                  },
                ]}
              >
                <Input
                  type="address"
                  name="address"
                  placeholder="Address"
                  style={style}
                  value={initialValues.address}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
        <h2 className="heading">Job Info:</h2>
        <Form form={form} name="job_info" width="100%">
          <div className="row">
            <div className="col-6">
              <Form.Item
                name="job_title"
                rules={[
                  {
                    required: true,
                    message: "Please input your job title!",
                  },
                ]}
              >
                <Input
                  name="job_title"
                  placeholder="Job Title"
                  style={style}
                  value={initialValues.job_title}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item
                name="level"
                rules={[
                  {
                    required: true,
                    message: "Please select a level!",
                  },
                ]}
              >
                <Select
                  bordered={false}
                  style={{ borderBottom: "1px solid #d9d9d9" }}
                  placeholder="Level"
                  name="level"
                  onChange={(e) =>
                    setInitialValues({
                      ...initialValues,
                      level: e,
                    })
                  }
                >
                  <Option value="Fresher">Fresher</Option>
                  <Option value="Junior">Junior</Option>
                  <Option value="Midweight">Midweight</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </Form>
        <Form form={form} name="job_info">
          <div className="row">
            <div className="col-6">
              <Form.Item
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please select a role!",
                  },
                ]}
              >
                <Select
                  name="role"
                  placeholder="Role"
                  bordered={false}
                  style={{ borderBottom: "1px solid #d9d9d9" }}
                  onChange={(e) =>
                    setInitialValues({
                      ...initialValues,
                      role: e,
                    })
                  }
                >
                  <Option value="Frontend">Frontend</Option>
                  <Option value="Backend">Backend</Option>
                  <Option value="FullStack">Full Stack</Option>
                  <Option value="Intern">Intern</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item
                name="contract"
                rules={[
                  {
                    required: true,
                    message: "Please select a contract!",
                  },
                ]}
              >
                <Select
                  name="contract"
                  placeholder="contract"
                  bordered={false}
                  style={{ borderBottom: "1px solid #d9d9d9" }}
                  onChange={(e) =>
                    setInitialValues({
                      ...initialValues,
                      contract: e,
                    })
                  }
                >
                  <Option value="FullTime">Full Time</Option>
                  <Option value="PartTime">Part Time</Option>
                  <Option value="Contract">Contract</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </Form>
        <Form form={form} name="job_info">
          <div className="row">
            <div className="col-6">
              <Form.Item
                name="location"
                rules={[
                  {
                    required: true,
                    message: "Please select a location!",
                  },
                ]}
              >
                <Select
                  name="location"
                  placeholder="Location"
                  bordered={false}
                  style={{ borderBottom: "1px solid #d9d9d9" }}
                  onChange={(e) =>
                    setInitialValues({
                      ...initialValues,
                      location: e,
                    })
                  }
                >
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="col-6"></div>
          </div>
        </Form>
        <h2 className="heading">Job Overview:</h2>
        <Form form={form} name="job-overview" layout="vertical">
          <Form.Item
            name="job_requirements"
            rules={[
              {
                required: true,
                message: "Please input Job requirements!",
              },
              {
                max: 500,
                message: "Job requirements should be maximum 500 characters.",
              },
            ]}
          >
            <Input.TextArea
              type="job_requirements"
              name="job_requirements"
              style={style}
              placeholder="Job Requirements"
              value={initialValues.job_requirements}
              onChange={handleChange}
            />
          </Form.Item>
          <Editor
            editorState={editorState}
            wrapperClassName="mt-3"
            editorClassName="border-top-0 border-right-0 border-left-0 border-bottom"
            placeholder="Job description here..."
            onEditorStateChange={onEditorStateChange}
          />
          <h2 className="heading">Languages</h2>
          <Form.Item
            name="languages"
            className="mt-2"
            rules={[
              {
                required: true,
                message: "Please select atleast one language!",
              },
            ]}
          >
            <Select
              mode="multiple"
              name="languages"
              bordered={false}
              style={{ borderBottom: "1px solid #d9d9d9" }}
              allowClear
              placeholder="Please select languages"
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  languages: e,
                })
              }
            >
              <Option value="HTML">HTML</Option>
              <Option value="CSS">CSS</Option>
              <Option value="JavaScript">JavaScript</Option>
              <Option value="Ruby">Ruby</Option>
              <Option value="Python">Python</Option>
            </Select>
          </Form.Item>
          <h2 className="heading">Tools</h2>
          <Form.Item
            name="tools"
            rules={[
              {
                required: true,
                message: "Please select atleast one tool!",
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select tools"
              bordered={false}
              style={{ borderBottom: "1px solid #d9d9d9" }}
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  tools: e,
                })
              }
            >
              <Option value="React">React</Option>
              <Option value="Vue js">Vue js</Option>
              <Option value="Django">Django</Option>
              <Option value="Tailwind CSS">Tailwind CSS</Option>
              <Option value="ROR">ROR (Ruby on Rails)</Option>
            </Select>
          </Form.Item>
        </Form>
        <div>
          <Checkbox name="featured" onChange={handleChange}>
            Featured
          </Checkbox>
        </div>
        <button className="btn btn-primary col mb-2" onClick={handleSubmit}>
          CREATE JOB
        </button>
      </div>
    </div>
  );
};

export default JobCreation;
