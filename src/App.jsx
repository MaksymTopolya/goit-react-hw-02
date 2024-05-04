import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const localStorageFeedback = () => {
    const savedFeedback = localStorage.getItem("feedback");
  if (savedFeedback === null) {
       return {
        good: 0,
        neutral: 0,
        bad: 0
    }; 
  }
  return JSON.parse(savedFeedback);
   
};

function App() {
    const [feedback, setFeedback] = useState(localStorageFeedback);

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({ ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 }));
    };

    const reset = () => {
        const resetFeedback = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        setFeedback(resetFeedback);
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
        <div>
            <Description />
            <Options OnFeedback={updateFeedback} totalFeedbacks={totalFeedback} onReset={reset} />
            {totalFeedback > 0 ?
                <Feedback feedback={feedback} totalFeedback={totalFeedback} />
                :
                <Notification message="No feedback given yet" />
            }
        </div>
    );
}

export default App;

