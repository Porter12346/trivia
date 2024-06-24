import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {
    constructor() {
        console.log('services init');
    }

    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple')
        let questionsReceived = response.data.results;
        let newQuestions = []
        questionsReceived.forEach((question) => {
            console.log('questions printing');
            newQuestions.push(new Question(question))
        });
        AppState.questions = newQuestions
    }
}
export const questionsService = new QuestionsService