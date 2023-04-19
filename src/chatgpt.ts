import { ChatGPTAPI } from 'chatgpt';
import fetch from 'node-fetch';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

// Your application code that initializes ChatGPTAPI


export { ChatGPTAPI };

export async function getChatGPTAPI(): Promise<ChatGPTAPI> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OpenAI API key. Please provide OPENAI_API_KEY as an env variable.');
  }

  const api = new ChatGPTAPI({ apiKey });

  return api;
}
