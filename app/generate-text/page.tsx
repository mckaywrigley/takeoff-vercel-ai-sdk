"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getAnswer } from "./actions";

export default function GenerateText() {
  const [generation, setGeneration] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[600px] mx-auto">
      <Input
        placeholder="Write a story"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <Button
        className="mt-4"
        onClick={async () => {
          const { text } = await getAnswer(inputValue);
          setGeneration(text);
        }}
      >
        Generate
      </Button>

      <div className="mt-4">{generation}</div>
    </div>
  );
}
