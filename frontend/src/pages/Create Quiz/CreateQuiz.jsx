import React, {useState} from 'react'
import './createQuiz.css';

const CreateQuiz = () => {

    const [quizData, setQuizData] = useState({
        title: "",
        description: "",
        questions: [{ questionText: '', options: ['', '', ''], correctOption: 0 }],
        expirationDate: "",
        createdBy: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuizData({ ...quizData, [name]: value });
    };

    const addQuestion = () => {
        const newQuestion = { questionText: '', options: ['', '', ''], correctOption: 0 };
        setQuizData({ ...quizData, questions: [...quizData.questions, newQuestion] });
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...quizData.questions];
        updatedQuestions[index][field] = value;
        setQuizData({ ...quizData, questions: updatedQuestions });
    };
    
    const handleCorrectOptionChange = (questionIndex, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].correctOption = value;
    setQuizData({ ...quizData, questions: updatedQuestions });
    };
    
    const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuizData({ ...quizData, questions: updatedQuestions });
    };


    // const handleOptionChange = (questionIndex, optionIndex, value) => {
    // const updatedQuestions = [...quizData.questions];
    // updatedQuestions[questionIndex].options[optionIndex] = value;
    // setQuizData({ ...quizData, questions: updatedQuestions });
    // };

    // const handleCorrectOptionChange = (questionIndex, value) => {
    // const updatedQuestions = [...quizData.questions];
    // updatedQuestions[questionIndex].correctOption = value;
    // setQuizData({ ...quizData, questions: updatedQuestions });
    // };

    return (
        <div className="quiz-form">
            <h1>Create a Quiz</h1>
            <form>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                id="title"
                name="title"
                value={quizData.title}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                name="description"
                value={quizData.description}
                onChange={handleInputChange}
                required
                ></textarea>
            </div>

            <h2>Questions</h2>
            {quizData.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question-group">
                <input
                    type="text"
                    placeholder={`Enter question #${questionIndex + 1}`}
                    value={question.questionText}
                    onChange={(e) =>
                    handleQuestionChange(
                        questionIndex,
                        "questionText",
                        e.target.value
                    )
                    }
                    required
                />

                <div className="options-group">
                    {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="option-group">
                        <input
                        type="text"
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option}
                        onChange={(e) =>
                            handleOptionChange(
                            questionIndex,
                            optionIndex,
                            e.target.value
                            )
                        }
                        required
                        />
                        <label>
                        <input
                            type="radio"
                            name={`correctOption_${questionIndex}`}
                            value={optionIndex}
                            checked={question.correctOption === optionIndex}
                            onChange={() =>
                            handleCorrectOptionChange(questionIndex, optionIndex)
                            }
                        />
                        Correct
                        </label>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            <button
                type="button"
                onClick={addQuestion}
                className="add-question-btn"
            >
                Add Question
            </button>

            <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input
                type="datetime-local"
                id="expirationDate"
                name="expirationDate"
                value={quizData.expirationDate}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="createdBy">Created By:</label>
                <input
                type="text"
                id="createdBy"
                name="createdBy"
                value={quizData.createdBy}
                onChange={handleInputChange}
                required
                />
            </div>

            <button type="submit" className="create-quiz-btn">
                Create Quiz
            </button>
            </form>
        </div>
    );
}

export default CreateQuiz