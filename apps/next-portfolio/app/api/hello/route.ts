import { OpenAI } from 'langchain/llms/openai';
import { loadQAStuffChain } from 'langchain/chains';
import { Document } from 'langchain/document';
import DefaultRetrievalText from '../../lib/DefaultRetrievalText';

export async function GET(request: Request) {
  const llmA  = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const chainA = loadQAStuffChain(llmA);
  const docs = [
    new Document({ pageContent: DefaultRetrievalText}),
  ];
  const resA = await chainA.call({
    input_documents: docs,
    question: 'ใช้อะไรเขียน web',
  });
  console.log({ resA });
  return new Response('Hello, from API!');
}
