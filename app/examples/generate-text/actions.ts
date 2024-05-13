"use server";

import { openai } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export async function getGeneration(question: string) {
  const { text, finishReason, usage } = await generateText({
    model: openai("gpt-3.5-turbo"),
    prompt: question
  });

  return { text, finishReason, usage };
}

export async function streamGeneration(input: string) {
  "use server";

  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-3.5-turbo"),
      prompt: input
    });

    for await (const token of textStream) {
      stream.update(token);
    }

    stream.done();
  })();

  return { output: stream.value };
}
