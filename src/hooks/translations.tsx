import IntlMessageFormat from "intl-messageformat";
import assert from "ow";
import React, {
  createContext,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";

import { Locale, LOCALES, TranslationMessages } from "../translations";
import { messages as translationMessages } from "../translations/messages/de";

const Context = createContext<TranslationMessages>(translationMessages);

export type FormatMessage = (
  message: string,
  values?: Record<string, any>
) => ReactNode;

export const useTranslation = () => {
  const locale = "de";
  const messages = useContext(Context);

  assert<Locale>(locale, assert.string.oneOf(LOCALES));

  const formatMessage: FormatMessage = (message, values = {}) => {
    const formatted = new IntlMessageFormat(message, locale).format(values);

    if (Array.isArray(formatted)) {
      return formatted.map((element, index) => (
        <Fragment key={index}>{element}</Fragment>
      ));
    }

    return formatted;
  };

  return { locale, messages, formatMessage };
};

export type TranslationProviderProps = PropsWithChildren<{
  messages: TranslationMessages;
}>;

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
  messages,
}) => {
  const { Provider } = Context;

  return <Provider value={messages}>{children}</Provider>;
};
