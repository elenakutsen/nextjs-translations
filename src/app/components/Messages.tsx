"use client";

import { useTranslation } from "@/hooks/translations";

export const Messages = () => {
  const { messages, formatMessage } = useTranslation();

  const formattedMessageSingular = formatMessage(messages.formattedMessage, {
    number: 1,
  });

  const formattedMessagePlural = formatMessage(messages.formattedMessage, {
    number: 2,
  });

  const formattedRichText = formatMessage(messages.formattedRichText, {
    bold: (value: string) => <strong>{value}</strong>,
  });

  return (
    <div>
      <p>{messages.message}</p>
      <p>{formattedMessageSingular}</p>
      <p>{formattedMessagePlural}</p>
      <p>{formattedRichText}</p>
    </div>
  );
};
