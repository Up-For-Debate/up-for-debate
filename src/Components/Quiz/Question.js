import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  return (
    <div className="question">
      <h2 style={{ marginLeft: "2.5rem" }}>{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
