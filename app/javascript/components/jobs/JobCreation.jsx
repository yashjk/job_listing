import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Form, Input, Select, Checkbox } from "antd";
import { fetchApi } from "../../utils/API";
import {
  BodyWrapper,
  FormContainerWrapper,
  InputWrapper,
  SelectWrapper,
  HeadingWrapper,
} from "../../utils/StyledComponent";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "antd/dist/antd.css";
import cities from "../../utils/cities";

const JobCreation = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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

  const handleChange = ({ target: { name, value } }) => {
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };

  const handleChecked = ({target: {name, checked}}) => {
    setInitialValues({
      ...initialValues,
      [name]: checked,
    });
  }
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setJobDescription(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    // const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    // const value = blocks
    //   .map((block) => (!block.text.trim() && "\n") || block.text)
    //   .join("\n");
    // setJobDescription(value);
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
    <BodyWrapper>
      <div className="container">
        <FormContainerWrapper>
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
            <HeadingWrapper>Company Info:</HeadingWrapper>
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
                  <InputWrapper
                    name="company_name"
                    placeholder="Company Name"
                    value={initialValues.company_name}
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
                  <InputWrapper
                    type="address"
                    name="address"
                    placeholder="Address"
                    value={initialValues.address}
                    onChange={handleChange}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
          <HeadingWrapper>Job Info:</HeadingWrapper>
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
                  <InputWrapper
                    name="job_title"
                    placeholder="Job Title"
                    value={initialValues.job_title}
                    onChange={handleChange}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
          <Form form={form} name="job_info">
            <div className="row">
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
                  <SelectWrapper
                    bordered={false}
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
                  </SelectWrapper>
                </Form.Item>
              </div>
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
                  <SelectWrapper
                    name="role"
                    placeholder="Role"
                    bordered={false}
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
                  </SelectWrapper>
                </Form.Item>
              </div>
            </div>
          </Form>
          <Form form={form} name="job_info">
            <div className="row">
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
                  <SelectWrapper
                    name="contract"
                    placeholder="contract"
                    bordered={false}
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
                  </SelectWrapper>
                </Form.Item>
              </div>
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
                  <SelectWrapper
                    name="location"
                    placeholder="Location"
                    bordered={false}
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
                  </SelectWrapper>
                </Form.Item>
              </div>
            </div>
          </Form>
          <HeadingWrapper>Job Overview:</HeadingWrapper>
          <Form form={form} name="job-overview" layout="vertical">
            <Form.Item
              name="job_requirements"
              className="mt-2 mb-2"
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
                placeholder="Job Requirements"
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                }}
                value={initialValues.job_requirements}
                onChange={handleChange}
              />
            </Form.Item>
            <Editor
              editorState={editorState}
              wrapperClassName="mt-5"
              editorClassName="pt-5 pl-1 border-right border-left border-bottom"
              placeholder="Job description here..."
              onEditorStateChange={onEditorStateChange}
            />
            <HeadingWrapper>Languages</HeadingWrapper>
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
              <SelectWrapper
                mode="multiple"
                name="languages"
                bordered={false}
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
              </SelectWrapper>
            </Form.Item>
            <HeadingWrapper>Tools</HeadingWrapper>
            <Form.Item
              name="tools"
              rules={[
                {
                  required: true,
                  message: "Please select atleast one tool!",
                },
              ]}
            >
              <SelectWrapper
                mode="multiple"
                allowClear
                placeholder="Please select tools"
                bordered={false}
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
              </SelectWrapper>
            </Form.Item>
          </Form>
          <div>
            <Checkbox name="featured" onChange={handleChecked}>
              Featured
            </Checkbox>
          </div>
          <button
            className="btn btn-primary col mt-2 mb-2"
            onClick={handleSubmit}
          >
            CREATE JOB
          </button>
        </FormContainerWrapper>
      </div>
    </BodyWrapper>
  );
};

export default JobCreation;
