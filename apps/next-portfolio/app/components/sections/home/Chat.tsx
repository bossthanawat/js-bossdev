'use client';

import { Input, Skeleton } from '@js-bossdev/components';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider } from '../../hook-form';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Scrollbar from '../../Scrollbar';
import BouncingDotsLoader from '../../BouncingDotsLoader';

type ValueForm = {
  message: string;
};

type StateChat = {
  id: string;
  send: string;
  result?: string;
  isLoading?: boolean;
};

const Chat = () => {
  const endRef = useRef<HTMLDivElement>(null);
  const mutateGPT = useMutation({
    mutationFn: ({ message }: { message: string }) =>
      axios.get('/api/chat', {
        params: {
          message: message,
        },
      }),
  });

  const [chats, setChats] = useState<StateChat[]>([]);
  const methods = useForm<ValueForm>({
    defaultValues: {
      message: '',
    },
  });
  const { control, handleSubmit, reset } = methods;
  const onSubmit = (data: ValueForm) => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
    const id = uuidv4();
    if (data.message === '') return;
    reset();
    setChats((prev) => [
      ...prev,
      {
        id,
        send: data.message,
        isLoading: true,
      },
    ]);
    mutateGPT.mutate(
      { message: data.message },
      {
        onSuccess: ({ data }) => {
          setChats((prev) =>
            prev.map((chat) =>
              chat.id === id
                ? { ...chat, result: data.text, isLoading: false }
                : chat
            )
          );
        },
        onError: (error) => {
          setChats((prev) =>
            prev.map((chat) =>
              chat.id === id
                ? {
                    ...chat,
                    result: 'Something went wrong :(',
                    isLoading: false,
                  }
                : chat
            )
          );
        },
      }
    );
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 p-4 ">
          <Scrollbar className="h-80 overflow-y-auto p-2">
            <div className="flex flex-col gap-2">
              {chats.map((chat, index) => (
                <React.Fragment key={index}>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={'/assets/images/notion-avatar-1.png'}
                      alt="user"
                      width={50}
                      height={50}
                    />
                    <div className="bg-gray-100 p-3 rounded-r-xl rounded-bl-xl">
                      <p className="text-sm">{chat.send}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={'/assets/images/notion-avatar-bot.png'}
                      alt="bot"
                      width={50}
                      height={50}
                    />
                    {chat?.isLoading ? (
                      <BouncingDotsLoader />
                    ) : (
                      <div className="bg-orange-100 p-3 rounded-r-xl rounded-bl-xl">
                        <p className="text-sm">{chat?.result}</p>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
              <div ref={endRef}></div>
            </div>
          </Scrollbar>
          <Controller
            name={'message'}
            control={control}
            render={({ field }) => (
              <div className="relative">
                <Input
                  placeholder="Type your message"
                  className=" pr-8"
                  {...field}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                  onClick={handleSubmit(onSubmit)}
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
      </FormProvider>
    </>
  );
};

export default Chat;
