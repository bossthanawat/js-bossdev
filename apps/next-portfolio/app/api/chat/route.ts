import { OpenAI } from 'langchain/llms/openai';
import { loadQAStuffChain } from 'langchain/chains';
import { Document } from 'langchain/document';
import DefaultRetrievalText from '../../lib/DefaultRetrievalText';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const llm = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    const chain = loadQAStuffChain(llm);
    const docs = [new Document({ pageContent: DefaultRetrievalText })];
    const res = await chain.call({
      input_documents: docs,
      question: request?.nextUrl?.searchParams?.get('message') as string,
    });
    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
