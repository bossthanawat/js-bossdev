import { Document } from 'langchain/document';
import { NextRequest, NextResponse } from 'next/server';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';

import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, AIMessage } from '@langchain/core/messages';
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';
import { ChatMessageHistory } from 'langchain/stores/message/in_memory';

import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import DefaultRetrievalText from '../../lib/DefaultRetrievalText';

export type UnitType = 'human' | 'ai';

type ValueChat = {
  role: UnitType;
  content: string;
  isLoading?: boolean;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages = body.messages as ValueChat[];

    const chat = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo-1106',
      temperature: 0.4,
    });

    // const chat = new ChatGoogleGenerativeAI({
    //   apiKey: process.env.GOOGLE_API_KEY,
    //   modelName: 'gemini-pro',
    //   maxOutputTokens: 2048,
    //   temperature: 0.4,
    //   safetySettings: [
    //     {
    //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    //       threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    //     },
    //   ],
    // });

    //Prompt Templates
    const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        'You are a helpful assistant. I have additional information to context:{context}. Please answer briefly and to the point. Only answer things that seem relevant to me. Respond using markdown.',
      ],
      new MessagesPlaceholder('messages'),
    ]);

    // Chat History
    const ephemeralChatMessageHistory = new ChatMessageHistory();
    for (const message of messages) {
      if (message.role === 'human') {
        await ephemeralChatMessageHistory.addMessage(
          new HumanMessage(message.content)
        );
      }
      if (message.role === 'ai') {
        await ephemeralChatMessageHistory.addMessage(
          new AIMessage(message.content)
        );
      }
    }

    // Retrievers
    const docs = [new Document({ pageContent: DefaultRetrievalText })];

    const documentChain = await createStuffDocumentsChain({
      llm: chat,
      prompt: questionAnsweringPrompt,
    });

    const responseMessage = await documentChain.invoke({
      messages: await ephemeralChatMessageHistory.getMessages(),
      context: docs,
    });

    return NextResponse.json({
      content: responseMessage,
    });
  } catch (e) {
    console.log('err', e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
