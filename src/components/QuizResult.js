import React from 'react';
import { Frown, Check } from 'lucide-react';

const QuizResult = ({ score, totalQuestions, correctAnswers, incorrectAnswers, notAnswered, onRetake }) => {
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const isGoodScore = percentage >= 60;

  return (
    <div className="quiz-result">
      <div className="quiz-header">
        <h1>QUIZ<span className="highlight">Mania</span></h1>
      </div>
      
      <div className="result-content">
        {isGoodScore ? (
          <>
            <div className="success-icon"><Check size={48} /></div>
            <h2>C O N G R A T U L A T I O N</h2>
            <p>You successfully completed the Quiz and holds</p>
          </>
        ) : (
          <>
            <div className="failure-icon"><Frown size={48} /></div>
            <h2>KEEP PRACTICING!</h2>
            <p>You successfully completed the Quiz but you need to</p>
          </>
        )}
        
        <div className="score-circle">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-label">Your Score</div>
        </div>
        
        {isGoodScore && <div className="score-message">Great job!</div>}
        
        <div className="score-details">
          <p>Out of {totalQuestions} questions</p>
          <div className="score-breakdown">
            <span className="correct">{correctAnswers} Correct</span>
            <span className="incorrect">{incorrectAnswers} Incorrect</span>
            <span className="not-answered">{notAnswered} Not answered</span>
          </div>
        </div>
        
        <button className="retake-btn" onClick={onRetake}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default QuizResult;