This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# 💬 Translations

This project is using [`intl-messageformat`](https://formatjs.io/docs/intl-messageformat) to format and translate texts.

Example:

```tsx
import { useTranslation } from "hooks/translation"

const { formatMessage, messages } = useTranslation()

const title = formatMessage(
    messages.title,
)
```

---
Formatting messages that have numbers with plural labels:

```tsx

const articles = formatMessage(messages.articles, {
    number: 1,
})

// The translation file:
export const messages = {
  articles: "{number}  {number, plural, =1 {Article} other {Articles}}",
}
```
---
Embedded XML tag in the message:
```tsx
const terms = formatMessage(messages.terms, {
    bold: (value: string) => <strong>{value}</strong>,
});

// The translation file:
export const messages = {
  terms: "I read the <bold>terms</bold> and conditions",
}
```

All messages are stored by locale in `src/translations/messages/[locale].ts`.

