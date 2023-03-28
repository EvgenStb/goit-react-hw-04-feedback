import React, { useState } from 'react';
import './Feedback/Feedback.css';
import Section from './Feedback/Section';
import Statistic from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
     switch (e.target.name) {
      case 'good': 
          setGood(good+1);
          break;
      case 'neutral':
        setNeutral(neutral+1);
        break;
      case 'bad': 
        setBad(bad+1);
        break;
      default:
        return;
     }
    };
   
    const countTotalFeedback = (good + neutral + bad);
    const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <>
      <Section titel="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistic>
        )}
      </Section>
    </>
  );
}
