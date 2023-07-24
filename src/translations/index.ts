import { messages as defaultMessages } from "./messages/de"

export const LOCALES = ["de", "en"] as const
export const DEFAULT_LOCALE = "de"

export type Locale = typeof LOCALES[number]

export type TranslationMessages = typeof defaultMessages

type TranslationModule = {
  messages: TranslationMessages
}

export async function fetchTranslationMessages(
  locale: string = DEFAULT_LOCALE,
): Promise<TranslationMessages> {
  const { messages } = (await import(
    `./messages/${locale}`
  )) as TranslationModule
  return messages
}
