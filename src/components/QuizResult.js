import React from 'react';
import { Frown } from 'lucide-react';

const QuizResult = ({ correct, incorrect, notAnswered, percentage, totalQuestions, onRetake }) => {
  const isGoodScore = percentage >= 60;

  return (
    <div className="quiz-result">
      <div className="quiz-header">
        <h1>QUIZ<span className="highlight">Mania</span></h1>
      </div>
      
      <div className="result-content">
        <div className="failure-icon"><Frown size={48} /></div>
        <h2>KEEP PRACTICING!</h2>
        <p>You successfully completed the Quiz but you need to</p>
        
        <div className="score-circle">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-label">Your Score</div>
        </div>
        
        <div className="score-details">
          <p>Out of {totalQuestions} questions</p>
          <div className="score-breakdown">
            <span className="correct">{correct} Correct</span>
            <span className="incorrect">{incorrect} Incorrect</span>
            <span className="not-answered">{notAnswered} Not answered</span>
          </div>
        </div>
        
        <button className="retake-btn" onClick={onRetake}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default QuizResult;