import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { questionsService } from "../services/QuestionsService.js";
import { setHTML } from "../utils/Writer.js";

let activeQuestion = null

export class QuestionsController {
    constructor() {
        console.log('Controllers init')
        this.initFunction()
    }

    async initFunction() {
        try {
            await questionsService.getQuestions()
            console.log('finished');
            this.drawQuestion()
        }
        catch (error) { console.error('da code is bad', error) }
    }

    drawQuestion() {
        console.log('we doing the qestion printing thing baby');
        const questions = AppState.questions
        activeQuestion = questions[Math.round(Math.random() * 10)]
        let htmlInject = activeQuestion.htmlTemplate
        setHTML('questionsHTML', htmlInject)
    }

    submitAnswer(name) {
        if (activeQuestion.correctAnswer == name) {
            window.alert("CORRECT")
            this.drawQuestion()
        }
        else {
            window.alert('INCORRECT')
        }
    }
}