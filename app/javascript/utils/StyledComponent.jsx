import { Card, Tag, Input, Select } from "antd";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAB1CAMAAADOZ57OAAAANlBMVEUAdP4EMv4ELP4Ad/4ELf4BY/4CW/4BXv4BYP4DWf4DV/4DVf4DTv4BXP4DUv4DUP4BZf4DS/5B5NwOAAACFElEQVR4nO3VCU4DMRBEUU8cAtkI3P+yBAgiyWy2R5qukv4/gaWnaqduQZtjTrRuS7gOcK0eXF7B5RVcXrVy7eEKiXV5xbq8gssruLyCyyu4vKrm2sEVGevyinV5BZdXcHkFl1dweVXOdYZLINblFVxecQy9gssruLyCy6sCrle4dGJdXsHlFcfQK7i8gssruLya4nqDSy7W5RVcXnEMvYLLK7i8gssruLyCyyu4vILLqx7XC1zKPXFtWZd2rMsruLx6OIZwyQeXVxxDr+DyimPoFVxecQydyol1GZV3CS6f8nmTOIY2Xbm6q9fmAy6HvrmuXlu4LPrh6hJcHv1ydYm/y6IbVxf9Dirqjwsvi/LuxoWXQ/9ceBl0x4WXfvdceMmX93dceKn3sC681Hviwku7x2OIl3g9LryU63PhJdwAF1665UOfCy/ZBrnwUm3oGOIl2/C68BJtjAsvyUa58FJsnAsvwfJxlAsvvaa48JJr4hjipdfkuvBSa4YLL63muPCSapYLL6XmufASqoALL51KuPCSqYgLL5XyewkXXiIVcuGlUSkXXhIVc+GlUDkXXgJVcOEVXw0XXuHlSwUXXtHVceEVXCUXXrHVcuEVWjUXXpHVc+EVWAMXXnHlUz0XXmHl07aeC6+omtaFV1SNXHjF1HYM8QqqmQuviNq58ApoARde67eEC6/VW8SF19rlzyVc3RceLRWbBjPEzQAAAABJRU5ErkJggg==");
  font-family: "Spartan", sans-serif !important;
  font-weight: 700 !important;
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  box-shadow: 3px 3px 18px -4px rgba(0, 0, 0, 0.47) !important;
  margin-bottom: 4rem !important;
  font-family: "Spartan", sans-serif !important;
`;

export const BodyWrapper = styled.div`
  background-color: hsl(180, 52%, 96%) !important;
  height: 100vh && 100%;
  font-family: "Spartan", sans-serif !important;
  font-size: 15px;
`;

export const FormContainerWrapper = styled.div`
  padding: 4rem !important;
  background-color: #fff !important;
  box-shadow: 3px 3px 18px -4px rgba(0, 0, 0, 0.47) !important;
`;

export const InputWrapper = styled(Input)`
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
`;

export const SelectWrapper = styled(Select)`
  border-bottom: 1px solid #d9d9d9 !important;
`;

export const HeadingWrapper = styled.h3`
  font-size: 15px !important;
  font-weight: 700 !important;
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
`;

export const ListImageWrapper = styled.img`
  height: 5rem !important;
  width: 5rem !important;
  border-radius: 50% !important;
`;

export const NewTagWrapper = styled(Tag)`
  background-color: hsl(180, 8%, 52%) !important;
  color: #fff !important;
  height: 1.2rem !important;
  border-radius: 10px !important;
  margin-left: 0.5rem !important;
`;

export const FeaturedTagWrapper = styled(Tag)`
  border-radius: 10px !important;
  background-color: hsl(180, 14%, 20%) !important;
  color: #fff !important;
  height: 1.2rem !important;
  margin-left: 0.5rem !important;
`;

export const TagsWrapper = styled(Tag)`
  background-color: hsl(180, 31%, 95%) !important;
  color: hsl(180, 8%, 52%) !important;
  font-weight: 700 !important;
  margin-top: 1rem !important;
  padding: 0.5rem !important;
  border: none !important;
`;

export const Separator = styled.hr`
  color: hsl(180, 31%, 95%) !important;
  width: 100% !important;
`;

export const DetailTags = styled(Tag)`
  background-color: hsl(180, 31%, 95%) !important;
  color: hsl(180, 8%, 52%) !important;
  font-weight: 500 !important;
  margin: 1rem !important;
  padding: 1rem !important;
  border: none !important;
  border-radius: 10px !important;
`;

export const DetailsContainer = styled.div`
  box-shadow: 3px 3px 18px -4px rgba(0, 0, 0, 0.47);
  background-color: #fff;
`;

export const DetailsCoverImage = styled.img`
  width: 100%;
  height: 15rem;
`;
export const DetailsProfileImage = styled.img`
  margin-left: 2rem !important;
  margin-top: -4rem !important;
  height: 8rem !important;
  width: 8rem !important;
  border-radius: 50% !important;
  border: 2px solid #fff;
`;

export const JobInfoCard = styled.div`
  background-color: hsl(180, 31%, 95%) !important;
  padding: 0.7rem;
  width: 20rem;
  margin: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  font-weight: 700;
`;
