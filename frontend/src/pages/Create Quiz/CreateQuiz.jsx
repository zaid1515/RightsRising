import React, {useState} from 'react'
import './createQuiz.css';

const CreateQuiz = () => {

    const [quizData, setQuizData] = useState({
        title: "",
        description: "",
        questions: [],
        expirationDate: "",
        createdBy: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuizData({ ...quizData, [name]: value });
    };

    const addQuestion = () => {
        const newQuestions = [...quizData.questions, ""];
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...quizData.questions];
        newQuestions[index] = value;
        setQuizData({ ...quizData, questions: newQuestions });
    };
    
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
            {quizData.questions.map((question, index) => (
                <div key={index} className="form-group">
                <input
                    type="text"
                    placeholder={`Enter question #${index + 1}`}
                    value={question}
                    onChange={(e) => handleQuestionChange(index, e.target.value)}
                    required
                />
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