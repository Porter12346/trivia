import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {
    constructor() {
        console.log('services init');
        this.getQuestions()
    }

    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple')
        let questionsReceived = response.data.results;
        questionsReceived.forEach((question) => {
            console.log('questions printing');
            let newQuestions = new Question(question)
        });
    }
}
export const questionsService = new QuestionsService