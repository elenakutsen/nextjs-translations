import styles from "./page.module.css";
import { fetchTranslationMessages } from "@/translations";
import { Messages } from "@/app/components/Messages";
import { Providers } from "@/providers";

export default async function Home() {
  const messages = await fetchTranslationMessages();

  return (
    <Providers messages={messages}>
      <main className={styles.main}>
        <Messages />
      </main>
    </Providers>
  );
}
