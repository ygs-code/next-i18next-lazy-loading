import i18next from "./i18next";
import { headerName } from "./settings";
import { headers } from "next/headers";


/*


与相似方法的对比
方法	作用	是否修改当前语言	典型用途
loadNamespaces()	加载命名空间	否	动态加载特定模块的翻译
loadLanguages()	加载语言	是	切换应用整体语言
changeLanguage()	切换语言	是	用户手动切换语言

*/

// 这个就是服务端加载
//  
export async function getT(ns, options) {
  const headerList = await headers();
  // 获取请求头中的语言设置
  const lng = headerList.get(headerName);
  // 如果没有设置语言，则使用默认语言
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng);
  }

  // 这里才是动态加载语言
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  return {
    // 动态加载
    t: i18next.getFixedT(
      // 如果没有设置语言，则使用当前语言
      lng ?? i18next.resolvedLanguage,
      // Array.isArray(ns) ? ns[0] : ns,
      ns,
      options?.keyPrefix
    ),
    i18n: i18next,
  };
}

export const getTranslations = getT;
