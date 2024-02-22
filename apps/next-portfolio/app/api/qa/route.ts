import { OpenAI } from 'langchain/llms/openai';
import { loadQAStuffChain } from 'langchain/chains';
import { Document } from 'langchain/document';
import DefaultRetrievalText from '../../lib/DefaultRetrievalText';
import { NextRequest, NextResponse } from 'next/server';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';

import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, AIMessage } from '@langchain/core/messages';
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';
import { ChatMessageHistory } from 'langchain/stores/message/in_memory';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const demoEphemeralChatMessageHistory = new ChatMessageHistory();
    const docs = [new Document({ pageContent: DefaultRetrievalText })];
    const chat = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo-1106',
      temperature: 0.6,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        "You are a helpful assistant. Answer all questions to the best of your ability based on the below context:{context}",
      ],
      new MessagesPlaceholder('messages'),
    ]);

    const documentChain = await createStuffDocumentsChain({
      llm: chat,
      prompt: questionAnsweringPrompt,
    });

    for (const message of messages) {
      if (message.human) {
        await demoEphemeralChatMessageHistory.addMessage(
          new HumanMessage(message.human)
        );
      }
      if (message.ai) {
        await demoEphemeralChatMessageHistory.addMessage(
          new AIMessage(message.ai)
        );
      }
    }

    const messageHistory = await demoEphemeralChatMessageHistory.getMessages();

    const responseMessage = await documentChain.invoke({
      messages: messageHistory,
      context: docs,
    });

    return NextResponse.json({
      text: responseMessage,
    });
  } catch (e) {
    console.log('err', e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
