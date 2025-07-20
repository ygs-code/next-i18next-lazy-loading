import i18next from "i18next";
//  i18next 官方提供的浏览器语言检测插件，专门用于在浏览器环境中自动检测用户的首选语言
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
// import LocizeBackend from 'i18next-locize-backend'
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLng, languages, defaultNS } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// 配置文件
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    // 资源加载器 动态
    resourcesToBackend((language, namespace) => {
      console.log("language==", language);
      console.log("namespace==", namespace);
      return import(
        /* webpackChunkName: "locale-[request]" */
        `./locales/${language}/${namespace}.json`
      );
    })
  )
  
  // .use(runsOnServerSide ? LocizeBackend : resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`))) // locize backend could be used, but prefer to keep it in sync with server side
  .init({
    // debug: true,
    // debug: process.env.NODE_ENV === "development", // 开发环境下开启调试
    supportedLngs: languages,
    fallbackLng,
    lng: undefined, // let detect the language on client side
    // 默认 ns
    fallbackNS: defaultNS,
    defaultNS,
    interpolation: {
      escapeValue: false, // React 已经有 XSS 防护，不需要转义
    },
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],

    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }

 
  });

export default i18next;

// const loadedLanguages = [];

// function loadLanguageAsync(lang) {
//   if (!loadedLanguages.includes(lang)) {
//     return import(`./locales/${lang}.json`).then((messages) => {
//       i18next.addResourceBundle(lang, 'translation', messages.default);
//       loadedLanguages.push(lang);
//       i18next.changeLanguage(lang);
//     });
//   }
//   return Promise.resolve(i18next.changeLanguage(lang));
// }

// loadLanguageAsync('zh/zh')
// loadLanguageAsync(getLanguage())
