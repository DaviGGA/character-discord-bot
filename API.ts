import { GoogleGenerativeAI } from "@google/generative-ai"
import 'dotenv/config'


interface API {
    getResponse(prompt: string): Promise<string>
}


export class GeminiAPI implements API {

    private gemini: GoogleGenerativeAI;
    private model: any;

    constructor(model: string) {
        const key = process.env.GEMINI_KEY as string;
        this.gemini = new GoogleGenerativeAI(key);
        this.model = this.gemini.getGenerativeModel({model}); 
    }

    async getResponse(prompt: string): Promise<string> {
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    }




}