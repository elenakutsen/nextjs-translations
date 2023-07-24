"use client";

import { TranslationProvider } from "@/hooks/translations";
import { FC, PropsWithChildren } from "react";
import { TranslationMessages } from "@/translations";

type ProvidersProps = PropsWithChildren<{ messages: TranslationMessages }>;

export const Providers: FC<ProvidersProps> = ({ messages, children }) => {
  return (
    <TranslationProvider messages={messages}>{children}</TranslationProvider>
  );
};
