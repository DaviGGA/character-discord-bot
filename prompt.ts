import readline from 'node:readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
export const prompt = (query: string): Promise<string> => new Promise((resolve) => rl.question(query, resolve));

