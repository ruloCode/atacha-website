import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletion } from 'openai/resources/index.mjs';
 
// Create an OpenAI API client (that's edge friendly!)

export const runtime = 'edge';


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
 
// Set the runtime to edge for best performance
 

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content: 'todas tus respuestas serán en markdown',
}
export async function POST(req: Request) {
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
     
      ...messages,
    ]
  });
 
  // Convert the response into a friendly text-streamc

  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}