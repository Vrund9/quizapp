import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';
import QuizRulesModal from './components/QuizRulesModal';
import QuizQuestion from './components/QuizQuestion';
import FullNameInput from './components/FullNameInput';
import QuizResult from './components/QuizResult';
import { questionsByTopic } from './dummyData/questionsByTopic';
import { categories } from './dummyData/Categories';



const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [answers, setAnswers] = useState([]);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);


  useEffect(() => {
    if (screen === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [screen, timeLeft]);
  const handleStartQuiz = () => {
    if (selectedTopic && fullName) {
      const topicQuestions = questionsByTopic[selectedTopic];
      setQuestions(topicQuestions);
      setAnswers(new Array(topicQuestions.length).fill(null));
      setScreen('quiz');
      setTimeLeft(10);
      setCurrentQuestion(0);
    }
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10); 
      setSelectedAnswer(null);
    } else {
      setScreen('result');
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedTopic(null);
    setTimeLeft(10);
    setQuestions([]);
    setAnswers([]);
  };
  const handleExitQuiz = () => {
    setScreen('welcome');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedTopic(null);
    setTimeLeft(10);
    setQuestions([]);
    setTotalQuestionsAnswered(0);
  };

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 

  const handleFullNameChange = useCallback((newFullName) => {
    setFullName(newFullName);
  }, []);

  const WelcomeScreen = ({ onOpenModal, onTopicSelect, onStartQuiz, fullName, setFullName }) => (
    <div className="quiz-mania">
      <h1>Welcome to <span className="highlight">QUIZ</span>Mania</h1>

      <div className="rules-section">
        <p>Please read all the rules about this quiz before you start.</p>
        <button className="quiz-rules-btn" onClick={onOpenModal}>Quiz rules</button>
      </div>

      <FullNameInput initialFullName={fullName} onFullNameChange={handleFullNameChange} />

      <div className="form-group">
        <label>Please select topic to continue</label>
        <div className="topic-grid">
          {categories.map((topic) => (
            <label key={topic.id} className="topic-option">
              <input
                type="radio"
                name="topic"
                value={topic.id}
                checked={selectedTopic === topic.id}
                onChange={() => onTopicSelect(topic.id)}
              />
              <span>{topic.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        className="start-quiz-btn"
        disabled={!fullName || !selectedTopic}
        onClick={onStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let notAnswered = 0;

    answers.forEach((answer, index) => {
      if (answer === null) {
        notAnswered++;
      } else if (answer === questions[index].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const totalAnswered = correct + incorrect;
    const percentage = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;

    return { correct, incorrect, notAnswered, percentage, totalQuestions: questions.length };
  };



  return (
    <div className="container">
      {screen === 'welcome' && (
        <WelcomeScreen
          onOpenModal={openModal}
          onTopicSelect={setSelectedTopic}
          onStartQuiz={handleStartQuiz}
          fullName={fullName}
          setFullName={setFullName}
        />
      )}
      {screen === 'quiz' && (
        <QuizQuestion
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          timeLeft={timeLeft}
          onSkip={handleNextQuestion}
          onExit={handleExitQuiz}
          selectedAnswer={selectedAnswer}
        />
      )}
      {screen === 'result' && (
        <QuizResult
          totalQuestions={questions.length}
          {...calculateResults()}
          onRetake={() => {
            resetQuiz();
            setScreen('welcome');
          }}
        />
      )}
      {isModalOpen && <QuizRulesModal onClose={closeModal} />}
    </div>
  );
};

export default App;
