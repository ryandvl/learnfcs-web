import type { Metadata } from "next";

export function getMetadata(pageName: string, description: string): Metadata {
  const metadata: Metadata = {
    title: pageName + " • LearnFCS",
    description,
  };

  return metadata;
}
