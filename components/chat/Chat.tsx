/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import gfm from "remark-gfm";
import ReactMarkdon from "react-markdown";
import { useUser } from "@clerk/nextjs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/contants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Chat = () => {
  const [sayHello, setSayHello] = React.useState(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat();

  const { user } = useUser();
  const userFirstName = user?.firstName || "";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  React.useEffect(() => {
    if (sayHello) {
      return;
    }
    setMessages([
      {
        id: "initial",
        content: `Hola ${userFirstName}, ¿ En qué puedo ayudarte hoy ?`,
        role: "assistant",
      },
    ]);
    setSayHello(true);
  }, []);

  console.log(messages, "");

  return (
    <div className="h-full flex flex-col  md:grid md:grid-rows-[85%,15%] text-black ">
      <div className=" flex-1 pb-[140px]  overflow-y-auto md:max-h-none   ">
        <div className="flex flex-col  gap-y-1 ">
          {messages.map((m: any) => (
            <div
              key={m.id}
              className="whitespace-pre-wrap flex gap-2 items-start"
            >
              {m.role === "user" ? (
                <>
                  <Image
                    src={user?.imageUrl || "../../public/Atacha_logo.svg"}
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/Atacha_logo.svg"
                    alt="AI"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  AI:
                </>
              )}

              <ReactMarkdon
                remarkPlugins={[gfm]}
                components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-[#F2F1EB] p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, className, children, ...props }) => {
                    const [isCopied, setIsCopied] = React.useState(false);

                    const handleCopy = () => {
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    };

                  

                    return (
                      <div className="flex flex-col">
                        <div className="w-full flex justify-end bg-[#2f2f2f] text-[#cdcdcd] px-2 rounded-sm">
                          <CopyToClipboard
                            text={String(children)}
                            onCopy={handleCopy}
                          >
                            <div className="flex gap-2 items-center">
                              <FontAwesomeIcon icon={faClipboard} size="lg" />

                              <button>{isCopied ? "Copiado" : "Copiar"}</button>
                            </div>
                          </CopyToClipboard>
                        </div>
                        <code
                          {...props}
                          className="bg-[#F2F1EB] rounded-lg p-2"
                        >
                          {children}
                        </code>
                      </div>
                    );
                  },
                  table: ({ node, ...props }) => (
                    <div className="overflow-auto">
                      <table
                        {...props}
                        className="w-full text-left border-collapse table-auto"
                      />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th {...props} className="p-3 border-2 border-gray-200" />
                  ),
                  td: ({ node, ...props }) => (
                    <td {...props} className="p-3 border-2 border-gray-200" />
                  ),
                }}
                className="text-sm overflow-hidden leading-7 grid"
              >
                {m.content || ""}
              </ReactMarkdon>
              {/* {m.content || ""} */}
            </div>
          ))}
        </div>
      </div>
      <div className=" fixed bottom-0 left-0 right-0 px-2 md:flex md:relative bg-white py-2 md:mb-0 items-end ">
        <Form {...form}>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border w-full p-4 px-3  focus-within:shadow-sm grid grid-cols-12 gap-2 "
          >
            <FormField
              name="prompt"
              render={({ formState }) => (
                <FormItem className="col-span-12 md:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      disabled={isLoading}
                      placeholder="Mensaje a Atacha IA ..."
                      id="prompt"
                      onChange={handleInputChange}
                      className="border-none outline-none  overflow-visible bg-white "
                      value={input}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"

              disabled={isLoading}
              className="col-span-12 md:col-span-2  rounded-lg p-2 bg-black text-white"
            >
              {isLoading ? "Enviando..." : "Generar"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
