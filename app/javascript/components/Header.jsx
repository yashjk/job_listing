import React from "react";
import "../../assets/stylesheets/application.css";

export default function Header() {
  return (
    <div
      className="d-flex justify-content-end p-2"
      style={{
        backgroundImage:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAB1CAMAAADOZ57OAAAANlBMVEUAdP4EMv4ELP4Ad/4ELf4BY/4CW/4BXv4BYP4DWf4DV/4DVf4DTv4BXP4DUv4DUP4BZf4DS/5B5NwOAAACFElEQVR4nO3VCU4DMRBEUU8cAtkI3P+yBAgiyWy2R5qukv4/gaWnaqduQZtjTrRuS7gOcK0eXF7B5RVcXrVy7eEKiXV5xbq8gssruLyCyyu4vKrm2sEVGevyinV5BZdXcHkFl1dweVXOdYZLINblFVxecQy9gssruLyCy6sCrle4dGJdXsHlFcfQK7i8gssruLya4nqDSy7W5RVcXnEMvYLLK7i8gssruLyCyyu4vILLqx7XC1zKPXFtWZd2rMsruLx6OIZwyQeXVxxDr+DyimPoFVxecQydyol1GZV3CS6f8nmTOIY2Xbm6q9fmAy6HvrmuXlu4LPrh6hJcHv1ydYm/y6IbVxf9Dirqjwsvi/LuxoWXQ/9ceBl0x4WXfvdceMmX93dceKn3sC681Hviwku7x2OIl3g9LryU63PhJdwAF1665UOfCy/ZBrnwUm3oGOIl2/C68BJtjAsvyUa58FJsnAsvwfJxlAsvvaa48JJr4hjipdfkuvBSa4YLL63muPCSapYLL6XmufASqoALL51KuPCSqYgLL5XyewkXXiIVcuGlUSkXXhIVc+GlUDkXXgJVcOEVXw0XXuHlSwUXXtHVceEVXCUXXrHVcuEVWjUXXpHVc+EVWAMXXnHlUz0XXmHl07aeC6+omtaFV1SNXHjF1HYM8QqqmQuviNq58ApoARde67eEC6/VW8SF19rlzyVc3RceLRWbBjPEzQAAAABJRU5ErkJggg==')",
        fontFamily: "'Spartan', sans-serif",
        
      }}
    >
      <a href="/" className="btn btn-primary">
        Job List
      </a>
      <a href="/jobs/new" className="btn btn-primary ml-3">
        Add Job
      </a>
    </div>
  );
}
