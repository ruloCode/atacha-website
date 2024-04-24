"use client";

import React from "react";
import { useChat } from "ai/react";
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

  return (
    <div className="h-full flex flex-col  md:grid md:grid-rows-[85%,15%] ">
      <div className=" flex-1 pb-[140px]  overflow-y-scroll md:max-h-none   ">
        <div className="flex flex-col  gap-y-4 ">
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
              {m.content}
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
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-visible"
                      value={input}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="col-span-12 md:col-span-2  text-white rounded-lg p-2"
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
