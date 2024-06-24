export class Question {
    constructor(data) {
        this.question = data.question
        console.log(this.question)
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
        console.log(this.incorrectAnswers);
        this.incorrectAnswers.push(this.correctAnswer)
    }

    get htmlTemplate() {
        let htmlInject = ``
        htmlInject += `<div class="col-12 border border-4 bg-dark text-light text-center">
        <h1 class="p-5 m-5">${this.question}</h1></div>`
        let reorderedQuestions = []
        this.incorrectAnswers.forEach((answer) => {
            let rand = Math.round(Math.random())
            if (rand) {
                reorderedQuestions.push(answer)
            } else {
                reorderedQuestions.unshift(answer)
            }
        });
        let answerNum = 1
        reorderedQuestions.forEach(answer => {
            htmlInject += `<div class="col-6 border border-2 text-light text-center questionBackground${answerNum}" type="button"
        onclick="app.QuestionsController.submitAnswer('${answer}')">
        <h3 class="p-5 m-5">${answer}</h3></div>`
            answerNum++
        });

        return (htmlInject)
    }
}