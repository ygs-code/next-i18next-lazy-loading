"use client";

import * as React from "react";
import { useTranslations } from "@/i18n/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/client";
import { Link } from "@/components/Link/client";
import { useState } from "react";
import i18next, { languagesOptions } from "@/i18n";
export default function Page() {
  const { t } = useTranslations("client-page");
  const [counter, setCounter] = useState(0);


  return (
    <>
      <main>
        <Header heading={t("title")} />
        <h1>{t("h1")}</h1>
        {/* 带有逻辑 */}
        <p>{t("counter", { count: counter })}</p>

        {/* <p>{t('counter_one')}</p>
        <p>{t('counter_zero')}</p> */}

        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>
            -
          </button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>
            +
          </button>
        </div>
        <Link href="/second-client-page">{t("to-second-client-page")}</Link>
        <Link href="/">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer path="/client-page" />
    </>
  );
}
