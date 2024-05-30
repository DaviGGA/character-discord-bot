export class ChatHistory {
    

    private history: string[];

    constructor() {
        this.history = [];
    }

    addMessage(senderName: string, message: string) {
        if (this.history.length == 69) {
            this.history.splice(0,1);
        }
        this.history.push(`${senderName}: ${message}`);
    }

    showHistory() {
        return this.history.join('\n');
    }

}