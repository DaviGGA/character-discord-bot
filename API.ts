import { GoogleGenerativeAI } from "@google/generative-ai"
import 'dotenv/config'
import { Dere } from "./Dere";
import { ChatHistory } from "./ChatHistory";


interface API {
    getResponse(prompt: string): string
}


export class GeminiAPI {

    private gemini: GoogleGenerativeAI;
    private model: any;

    constructor(model: string) {
        const key = process.env.GEMINI_KEY as string;
        this.gemini = new GoogleGenerativeAI(key);
        this.model = this.gemini.getGenerativeModel({model}); 
    }

    async getResponse(prompt: string) {
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    }




}