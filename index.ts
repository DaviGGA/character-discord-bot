import { GeminiAPI } from "./API";
import { ChatHistory } from "./ChatHistory";
import { Discord } from "./Discord";
import { eventEmitter } from "./eventEmitter";
import { userMessage } from "./Discord";
import { CharacterFactory } from "./characters/CharacterFactory";

const gemini = new GeminiAPI("models/gemini-pro");
const character = CharacterFactory.createCharacter("firekeeper");
const history = new ChatHistory();
const discord = new Discord();

async function run() {

    discord.init()

    eventEmitter.on('USER_MESSAGE_SENT', async (message: userMessage) => {
        history.addMessage(message.author, message.content);

        let doneRequest = false
        while(!doneRequest) {
            try {
                const response = await gemini.getResponse(character.getPrompt() + history.showHistory());
                history.addMessage(character.getName(), filterMessage(response));
                await discord.sendMessage(filterMessage(response));
                doneRequest = true;
            } catch (error) {
                console.log(error)
            }
        }
    })

    // Gambiarra
    function filterMessage(response: string) {
        if (!response.includes(":")) return response
        const doubleDotIndex = response.indexOf(":");
        return response.slice(doubleDotIndex + 1);
    }


  

}

run();
