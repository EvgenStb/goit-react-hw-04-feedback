import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

const FeedbackOptions = ({options ,onLeaveFeedback}) =>{
  const optionsArr = Object.keys(options)

    return (
      <div className="Feedback__controls">
        {optionsArr.map(item => (
          <button
            key={nanoid()}
            type="button"
            className="Feedback__batton"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
      </div>
    );
}


FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;


