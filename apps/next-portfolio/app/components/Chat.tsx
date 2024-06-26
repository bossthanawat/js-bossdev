'use client';

import { Controller, useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import BouncingDotsLoader from './BouncingDotsLoader';
import Scrollbar from './Scrollbar';
import { Badge, Input } from '@js-bossdev/components';
import { UnitType } from '../api/chat/route';

export type ValueForm = {
  message: string;
};

export type ValueChat = {
  role: UnitType;
  content: string;
  isLoading?: boolean;
};

type ChatSectionProps = {
  onSubmit: (data: ValueForm) => void;
  chats: ValueChat[];
  disabledType?: boolean;
};

const Chat = (props: ChatSectionProps) => {
  const { chats, onSubmit } = props;
  const endRef = useRef<HTMLDivElement>(null);

  const methods = useForm<ValueForm>({
    defaultValues: {
      message: '',
    },
  });
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = methods;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const handleSubmitCustom = handleSubmit((data: ValueForm) => {
    onSubmit(data);
    reset(
      {},
      {
        keepDirty: true,
      }
    );
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmitCustom}>
          <div className="flex flex-col gap-4 p-4 min-h-[425px] justify-between">
            {chats.length > 0 ? (
              <Scrollbar className="h-80 overflow-y-auto pr-2">
                <div className="flex flex-col gap-2 justify-center">
                  {chats.map((chat, index) => (
                    <React.Fragment key={index}>
                      {chat?.role === 'human' && (
                        <div className="flex gap-2 items-start">
                          <Image
                            src={'/assets/images/notion-avatar-1.png'}
                            alt="user"
                            width={50}
                            height={50}
                          />
                          <div className="bg-gray-100 p-3 rounded-r-xl rounded-bl-xl">
                            <p className="text-sm">{chat.content}</p>
                          </div>
                        </div>
                      )}
                      {chat?.role === 'ai' && (
                        <div className="flex gap-2 items-start">
                          <Image
                            src={'/assets/images/notion-avatar-bot.png'}
                            alt="bot"
                            width={50}
                            height={50}
                          />
                          {chat?.isLoading ? (
                            <div className="self-center">
                              <BouncingDotsLoader />
                            </div>
                          ) : (
                            <div className="bg-orange-100 p-3 rounded-r-xl rounded-bl-xl">
                              <div className="text-sm">
                                <ReactMarkdown>{chat?.content}</ReactMarkdown>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  <div ref={endRef}></div>
                </div>
              </Scrollbar>
            ) : (
              <>
                <div className="flex gap-2 items-start">
                  <Image
                    src={'/assets/images/notion-avatar-bot.png'}
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <div className="bg-gray-100 p-3 rounded-r-xl rounded-bl-xl">
                    <p className="text-sm">
                      Please ask me something. (づ ◕‿◕ )づ
                    </p>
                  </div>
                </div>
              </>
            )}
            <div>
              {!isDirty && (
                <div className="flex gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() =>
                      setValue('message', "What's his name?", {
                        shouldDirty: true,
                      })
                    }
                  >
                    What&apos;s his name?
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() =>
                      setValue('message', 'What is he working on?', {
                        shouldDirty: true,
                      })
                    }
                  >
                    What&apos;s he working on?
                  </Badge>
                </div>
              )}
              <Controller
                name={'message'}
                control={control}
                render={({ field }) => (
                  <div className="relative justify-self-end">
                    <Input
                      placeholder="Type your message"
                      className=" pr-8"
                      disabled={props.disabledType}
                      {...field}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                      onClick={handleSubmitCustom}
                    >
                      <path
                        fill="currentColor"
                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"
                      ></path>
                    </svg>
                  </div>
                )}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Chat;
