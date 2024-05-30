import { Client, Events, IntentsBitField, Message, TextChannel } from "discord.js"
import 'dotenv/config'
import { eventEmitter } from "./eventEmitter";


export type userMessage = {
    content: string,
    author: string
}


export class Discord {
    
    private client: Client
    CHANNEL_ID = '1244046066815602772'

    constructor() {
        this.client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent] });
    }

    init(): void {
        this.client.once(Events.ClientReady, (client) => {
            console.log(`Ready! Logged in as ${client.user.tag}`)
        })
        this.events();
        this.client.login(process.env.DISCORD_KEY as string)
    }

    events(): void {
        this.client.on('messageCreate', message =>{
            if(message.author.username == 'Liber-chan' && message.author.discriminator == '5171') return
            eventEmitter.emit('USER_MESSAGE_SENT', this.getUserMessage(message));
        } );
    }

    async sendMessage(message: string ): Promise<void> {
       const channel = await this.client.channels.fetch(this.CHANNEL_ID) as TextChannel;;
       channel.send(message);
    }

    private getUserMessage(message: Message): userMessage {
        return {content: message.content, author: message.author.username}
    }
}