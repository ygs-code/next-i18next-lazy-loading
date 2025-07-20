import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import {
  fallbackLng,
  languages,
  cookieName,
  headerName,
} from "@/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
     '/((?!_next).*)',
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};


 
// 这个是中间件语言处理
export function middleware(req) {
    console.log("middleware--------------");

  // 如果是网站图标
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }
  let lng;
  let response;
  // console.log("middleware==");
  // console.log("cookieName==", cookieName);

  // 首先获取 cookie中的语言设置
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  }




  // 如果没有 cookie 中的语言设置，则从请求头中获取
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  // 如果没有从 cookie 和请求头中获取到语言设置，则使用默认语言
  if (!lng) {
    lng = fallbackLng;
  }


  // console.log('lng=====',lng)

  // 查找路径出现哪一个语言的
  const lngInPath = languages.find((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  );

  const headers = new Headers(req.headers);
  // 设置请求头 语言
  headers.set(headerName, lngInPath || lng);

   

  // Redirect if lng in path is not supported
  // 重定向
  if (!lngInPath && !req.nextUrl.pathname.startsWith("/_next")) {
 
    response = NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );

    response.cookies.set(cookieName, lngInPath || lng);
    return response;
  }

 

  // 如果请求头中有 referer，尝试从 referer 中获取语言设置
  // 如果 referer 中有语言设置，则将其设置为 cookie
  // 这可以帮助在用户从其他页面返回时保持语言设置
  // 刷新路由
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      // refererUrl.pathname.startsWith(`/${l}`)
      req.nextUrl.pathname.startsWith(`/${l}`)
    );

    response = NextResponse.next({ headers });
    response.cookies.set(cookieName, lngInPath || lng);
    // console.log("cookieName==", cookieName);
    // console.log("lngInReferer==", lngInReferer);


    // console.log('req.nextUrl.pathname==',   req.nextUrl.pathname)
    // console.log('refererUrl.pathname==',  refererUrl.pathname)

    // if (lngInReferer) {
    //   response.cookies.set(cookieName, lngInReferer);
    // }
    return response;
  }

 

  response = NextResponse.next({ headers });
  response.cookies.set(cookieName, lngInPath || lng);

  return response;
}
