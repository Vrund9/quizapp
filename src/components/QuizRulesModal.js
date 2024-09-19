import React from 'react';

const QuizRulesModal = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>Quiz Rules</h2>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="modal-body">
        <div className="rule-section">
          <h3>10-Second Timer</h3>
          <ul>
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don't answer within the time limit, the app will automatically move to the next question.</li>
          </ul>
        </div>
        <div className="rule-section">
          <h3>Manual Navigation</h3>
          <ul>
            <li>You can navigate to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you're ready before the timer runs out.</li>
          </ul>
        </div>
        <div className="rule-section">
          <h3>Final Score and Performance Message</h3>
          <ul>
            <li>After all questions are answered, your final score will be displayed.</li>
            <li>Based on your performance, you will receive a personalized message:
              <ul>
                <li>Great job!: If you score above 80%.</li>
                <li>Well done!: If you score between 60% and 80%.</li>
                <li>Keep practicing!: If you score below 60%.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-footer">
        <button className="got-it-btn" onClick={onClose}>Got it!</button>
      </div>
    </div>
  </div>
);

export default QuizRulesModal;