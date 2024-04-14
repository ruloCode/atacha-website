"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useChat } from "ai/react";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "../../../lib/contants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashBoard() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const router = useRouter();
  const { user } = useUser();
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const userMessages = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessages];

      const response = await fetch("/api/conversation", {
        method: "POST",
        body: JSON.stringify({ messages: newMessages }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response, "response");

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user?.firstName, "UserProfile");

  return (
    <main className="">
      <h1 className={` mb-4 text-xl md:text-2xl`}>Conversación</h1>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch"></div>

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ formState }) => (
                  <FormItem className="col-span-12 md:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        placeholder="Cómo puedo calcula el radio de un circulo"
                        id="prompt"
                        onChange={handleInputChange}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
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
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((m: any) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? `${user?.firstName}: ` : "AI: "}
                {m.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
