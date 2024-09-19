import React from 'react';

const QuizQuestion = ({ question, currentQuestion, totalQuestions, onAnswer, timeLeft, onSkip, onExit, selectedAnswer }) => (
  <div className="quiz-question">
    <div className="quiz-header">
      <h1>QUIZ<span className="highlight">Mania</span></h1>
      <button className="exit-btn" onClick={onExit}>Exit Quiz</button>
    </div>
    
    <div className="quiz-progress">
      <span>{currentQuestion}/{totalQuestions}</span>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        ></div>
      </div>
      <span className="timer">{timeLeft}s</span>
    </div>
    
    <h2>{currentQuestion}. {question.question}</h2>
    
    <div className="options">
      {question.options.map((option, index) => (
        <button 
          key={index} 
          className={`option ${selectedAnswer === index ? 'selected' : ''}`}
          onClick={() => onAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
    
    <div className="action-buttons">
      <button className="next-btn" onClick={onSkip}>Next</button>
      <button className="skip-btn" onClick={onSkip}>Skip this question</button>
    </div>
  </div>
);

export default QuizQuestion;