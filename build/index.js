var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";

// app/context.tsx
import { createContext } from "react";
var ServerStyleContext = createContext(null), ClientStyleContext = createContext(null);

// app/createEmotionCache.ts
import createCache from "@emotion/cache";
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = createEmotionServer(cache), html = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [
  { charset: "utf-8" },
  { title: "New Remix App" },
  { viewport: "width=device-width,initial-scale=1" }
], links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = withEmotionCache(
  ({ children }, emotionCache) => {
    let serverStyleData = useContext(ServerStyleContext), clientStyleData = useContext(ClientStyleContext);
    return useEffect(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []), /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
      /* @__PURE__ */ jsxDEV2("head", { children: [
        /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        serverStyleData?.map(({ key, ids, css }) => /* @__PURE__ */ jsxDEV2(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("body", { children: [
        children,
        /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ jsxDEV2(Document, { children: /* @__PURE__ */ jsxDEV2(ChakraProvider, { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/clothes.sale.$id.tsx
var clothes_sale_id_exports = {};
__export(clothes_sale_id_exports, {
  default: () => SaleByIDPage,
  loader: () => loader,
  meta: () => meta2
});
import { useLoaderData } from "@remix-run/react";

// graphql/saleClothes.ts
import { GraphQLClient, gql } from "graphql-request";

// utils/toArray.ts
function toArray(data) {
  let res = [], galleryArray = [], temp = "";
  for (let obj = 0; obj < data.length; obj++) {
    let gallery = data[obj].gallery;
    for (let i = 0; i < gallery.length; i++)
      gallery[i] != "," ? temp += gallery[i] : (galleryArray.push(temp), temp = "");
    data[obj].gallery = galleryArray, res.push(data[obj]), galleryArray = [];
  }
  return res;
}

// graphql/saleClothes.ts
var client = new GraphQLClient(`${process.env.GRAPHQL_URL}`), saleClothesQueries = class {
  async getAllSaleClothes() {
    let query = gql`
            {
                saleClothes {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes 
                    thumbnail
                    gallery
                }
            }
        `, res = await client.request(query);
    return toArray(res.saleClothes);
  }
  async getAllSaleClothingByID(id) {
    let query = gql`
            {
                saleClothes(id: ${id}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `, res = await client.request(query);
    return toArray(res.saleClothes);
  }
};

// app/routes/clothes.sale.$id.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Sale Clothing" },
  { name: "description", content: "Welcome to Genet Design's and Alterations!" }
];
async function loader({ params }) {
  return await new saleClothesQueries().getAllSaleClothingByID(String(params.id));
}
function SaleByIDPage() {
  let saleClothingByID = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", {}, void 0, !1, {
    fileName: "app/routes/clothes.sale.$id.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/clothes.sold.$id.tsx
var clothes_sold_id_exports = {};
__export(clothes_sold_id_exports, {
  default: () => SoldByIDPage,
  loader: () => loader2,
  meta: () => meta3
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// graphql/soldClothes.ts
import { GraphQLClient as GraphQLClient2, gql as gql2 } from "graphql-request";
var client2 = new GraphQLClient2(`${process.env.GRAPHQL_URL}`, { method: "GET" }), soldClothesQueries = class {
  async getAllSoldClothes() {
    let query = gql2`
            {
                soldClothes {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes 
                    thumbnail
                    gallery
                }
            }
        `, res = await client2.request(query);
    return toArray(res.soldClothes);
  }
  async getAllSoldClothingByID(id) {
    let query = gql2`
            {
                soldClothes(id: ${id}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `, res = await client2.request(query);
    return toArray(res.soldClothes);
  }
};

// app/routes/clothes.sold.$id.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Sold Clothing" },
  { name: "description", content: "Welcome to Genet Design's and Alterations!" }
];
async function loader2({ params }) {
  return await new soldClothesQueries().getAllSoldClothingByID(String(params.id));
}
function SoldByIDPage() {
  let soldClothingByID = useLoaderData2();
  return /* @__PURE__ */ jsxDEV4("div", {}, void 0, !1, {
    fileName: "app/routes/clothes.sold.$id.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

// app/routes/clothes.sale.tsx
var clothes_sale_exports = {};
__export(clothes_sale_exports, {
  default: () => AllSalePage,
  loader: () => loader3,
  meta: () => meta4
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Sale Clothing" },
  { name: "description", content: "Welcome to Genet Design's and Alterations!" }
];
async function loader3() {
  return await new saleClothesQueries().getAllSaleClothes();
}
function AllSalePage() {
  let allSaleClothes = useLoaderData3();
  return /* @__PURE__ */ jsxDEV5("div", {}, void 0, !1, {
    fileName: "app/routes/clothes.sale.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/clothes.sold.tsx
var clothes_sold_exports = {};
__export(clothes_sold_exports, {
  default: () => AllSoldPage,
  loader: () => loader4,
  meta: () => meta5
});
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Sold Clothing" },
  { name: "description", content: "Welcome to Genet Design's and Alterations!" }
];
async function loader4() {
  return await new soldClothesQueries().getAllSoldClothes();
}
function AllSoldPage() {
  let allSoldClothes = useLoaderData4();
  return /* @__PURE__ */ jsxDEV6("div", {}, void 0, !1, {
    fileName: "app/routes/clothes.sold.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => AllSoldPage2,
  loader: () => loader5,
  meta: () => meta6
});
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Sold Clothing" },
  { name: "description", content: "Welcome to Genet Design's and Alterations!" }
];
async function loader5() {
  return await new soldClothesQueries().getAllSoldClothes();
}
function AllSoldPage2() {
  let allSoldClothes = useLoaderData5();
  return /* @__PURE__ */ jsxDEV7("div", {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/admin/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => AdminPage
});

// app/routes/admin/componenets/createImage.tsx
import { useState } from "react";

// services/POST/cloudinaryUpload.ts
import axios from "axios";
async function cloudinaryUpload(uploadedFile) {
  try {
    let reader = new FileReader();
    return reader.onload = async () => {
      let readerResult = reader.result;
      return await (async (readerResult2) => {
        let formData = new FormData();
        return formData.append("file", readerResult2), formData.append("upload_preset", "vweauohf"), console.log("upload value: ", formData), (async (formData2) => {
          let imageURL2 = await axios.post("https://api.cloudinary.com/v1_1/don8pmkp2/image/upload", formData2);
          return console.log("cloundinary imageURL:", imageURL2), imageURL2.data.secure_url;
        })(formData);
      })(readerResult);
    }, await reader.readAsDataURL(uploadedFile);
  } catch (error) {
    return console.log(error), error;
  }
}

// app/routes/admin/componenets/createImage.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function CreateImage() {
  let [imageURLArray, setImageURLArray] = useState([]), sendImage = async (value) => {
    console.log("createImage value:", value.target.files?.[0]);
    let res = await cloudinaryUpload(value.target.files?.[0]);
    setImageURLArray([...imageURLArray, res]), console.log("createImage res: "), console.log("createImage ImageArray: ", imageURLArray);
  };
  return /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8("input", { id: "UploadFile", type: "file", onChange: (value) => sendImage(value) }, void 0, !1, {
      fileName: "app/routes/admin/componenets/createImage.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    imageURLArray.map((image) => /* @__PURE__ */ jsxDEV8("div", { id: "ImagePreview" }, image, !1, {
      fileName: "app/routes/admin/componenets/createImage.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/admin/componenets/createImage.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/admin/componenets/createSale.tsx
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function CreateSale() {
  let allSaleClothes = useLoaderData6();
  return /* @__PURE__ */ jsxDEV9("div", {}, void 0, !1, {
    fileName: "app/routes/admin/componenets/createSale.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/admin/containers/create.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function CreatePage() {
  return /* @__PURE__ */ jsxDEV10("div", { children: [
    /* @__PURE__ */ jsxDEV10(CreateImage, {}, void 0, !1, {
      fileName: "app/routes/admin/containers/create.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV10(CreateSale, {}, void 0, !1, {
      fileName: "app/routes/admin/containers/create.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/containers/create.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/admin/route.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function AdminPage() {
  return /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11(CreatePage, {}, void 0, !1, {
    fileName: "app/routes/admin/route.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/route.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IWH7ERZG.js", imports: ["/build/_shared/chunk-65T5P4UG.js", "/build/_shared/chunk-ESVGNZ3V.js", "/build/_shared/chunk-EGSDBNXF.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YX3OBB7W.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QSXFWXYJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-4GPDVOSP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clothes.sale": { id: "routes/clothes.sale", parentId: "root", path: "clothes/sale", index: void 0, caseSensitive: void 0, module: "/build/routes/clothes.sale-37X7DJYJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clothes.sale.$id": { id: "routes/clothes.sale.$id", parentId: "routes/clothes.sale", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/clothes.sale.$id-LL6TGJFF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clothes.sold": { id: "routes/clothes.sold", parentId: "root", path: "clothes/sold", index: void 0, caseSensitive: void 0, module: "/build/routes/clothes.sold-XT4JXVNN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/clothes.sold.$id": { id: "routes/clothes.sold.$id", parentId: "routes/clothes.sold", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/clothes.sold.$id-HSHCOUYH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "55e794c0", hmr: { runtime: "/build/_shared/chunk-EGSDBNXF.js", timestamp: 1705088286483 }, url: "/build/manifest-55E794C0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/clothes.sale.$id": {
    id: "routes/clothes.sale.$id",
    parentId: "routes/clothes.sale",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: clothes_sale_id_exports
  },
  "routes/clothes.sold.$id": {
    id: "routes/clothes.sold.$id",
    parentId: "routes/clothes.sold",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: clothes_sold_id_exports
  },
  "routes/clothes.sale": {
    id: "routes/clothes.sale",
    parentId: "root",
    path: "clothes/sale",
    index: void 0,
    caseSensitive: void 0,
    module: clothes_sale_exports
  },
  "routes/clothes.sold": {
    id: "routes/clothes.sold",
    parentId: "root",
    path: "clothes/sold",
    index: void 0,
    caseSensitive: void 0,
    module: clothes_sold_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
