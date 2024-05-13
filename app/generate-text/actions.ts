"use server";

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function getAnswer(question: string) {
  const { text, finishReason, usage } = await generateText({
    model: openai("gpt-3.5-turbo"),
    prompt: question
  });

  return { text, finishReason, usage };
}
