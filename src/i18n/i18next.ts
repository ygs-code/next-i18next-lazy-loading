import i18next from "i18next";
//  i18next 官方提供的浏览器语言检测插件，专门用于在浏览器环境中自动检测用户的首选语言
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
// import LocizeBackend from 'i18next-locize-backend'
import { initReactI18next } from "react-i18next/initReactI18next";
import {
  fallbackLng,
  languages,
  defaultNS,
  // cookieName
  cookieName,
  // headerName 设置请求头
  headerName,
  localStorageName,
  sessionStorageName,
} from "./settings";

export const runsOnServerSide = typeof window === "undefined";

/*
  获取到浏览的语言是 zhs
  而地址栏的 语言是  zht
  所以造成了水合问题
*/

// 根据浏览器获取语言
export const getLanguage = () => {
  let userLanguage = "";
  let language = "";

  if (!runsOnServerSide) {
    userLanguage = window.navigator.language || window.navigator.languages[0];
    userLanguage = userLanguage.split("-")[0]; // 只取语言部分，例如 'zh-CN' -> 'zh'`

    language = localStorage.getItem("language") || "";

    userLanguage =
      languages.find((item) => {
        return item.search(userLanguage) !== -1;
      }) || "";
  }

  language = language || userLanguage || fallbackLng;

  return language;
};

 

// 配置文件
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    // 资源加载器 动态
    resourcesToBackend((language: string, namespace: string) => {
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

    fallbackLng: getLanguage(),
    // 设置默认语言
    // lng: runsOnServerSide ?undefined : getLanguage(), // let detect the language on client side 这里设置了就会导致水合问题
    // 默认 ns
    fallbackNS: defaultNS,
    defaultNS,
    interpolation: {
      escapeValue: false, // React 已经有 XSS 防护，不需要转义
    },
    detection: {
      order: [
        "path",
        "htmlTag",
        "cookie",
        "navigator",
        "localStorage",
        "sessionStorage",
        "querystring",
        "subdomain",
      ],
      lookupLocalStorage: localStorageName, // localStorage key
      lookupCookie: cookieName, // cookie key
      lookupSessionStorage: sessionStorageName, // sessionStorage key
    },

    preload: runsOnServerSide ? languages : [],

    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  });

export default i18next;
