import { GeminiAPI } from "./API";
import { ChatHistory } from "./ChatHistory";
import { Tsundere } from "./Dere";
import { prompt } from "./prompt";

const gemini = new GeminiAPI("models/gemini-pro");

const tsundere = new Tsundere("Liber");

const history = new ChatHistory();

const userName = "Davi"

async function run() {

    while (true) {
        const message = await prompt(`${userName}: `);
        history.addMessage(userName, message);
        
        let doneRequest = false
        while(!doneRequest) {
            try {
                const response = await gemini.getResponse(tsundere.getPrompt() + history.showHistory());
                history.addMessage("Liber", response);
                console.log(`Liber: ${response}`);
                doneRequest = true; 
            } catch (error) {}
        }
        

    }
    


}

run();
