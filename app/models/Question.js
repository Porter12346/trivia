export class Question {
    constructor(data) {
        this.question = data.question
        console.log(this.question)
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
        this.allAnswers = this.incorrectAnswers + this.correctAnswer
    }

    // get htmlTemplate
}