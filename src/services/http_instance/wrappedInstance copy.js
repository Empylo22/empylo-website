import axios, {
  HeadersDefaults,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import CookieManager from "../../src/app/utils/cookieManager/cookieManager";

// export function getJWT() {
//   if (typeof window !== "undefined") {
//     let token = CookieManager.getCookie("jwt");
//     if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
//       token = token?.substring(1, token?.length - 2);
//     }
//     // token?.replace(/^"(.*)"$/, '$1');
//     // console.log(token?.split('"'))
//     // return "Bearer " + token;
//     return token;
//   }
//   return "";
// }

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
// });

// instance.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${getJWT()}`;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// instance.interceptors.response.use(
//   (res) => {
//     if (res.status === 208) {
//       throw res;
//     }
//     return res;
//   },
//   (error) => Promise.reject(error),
// );

// export const testPost = (payload, url) => {
//   const response = instance.post(url, payload);
//   return response;
// };

const baseURL =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL,
});

export function getJWT() {
  if (typeof window !== "undefined") {
    let token = CookieManager.getCookie("jwt");
    if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
      token = token?.substring(1, token?.length - 2);
    }
    // token?.replace(/^"(.*)"$/, '$1');
    // console.log(token?.split('"'))
    return "Bearer " + token;
  }
  return "";
}
class HTTPClient {
  static async get(endpoint) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.get(endpoint, { headers });
    return response;
  }

  static async post(endpoint, data) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, data, { headers });
    return response;
  }

  static async delete(endpoint) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };
    const response = await instance.delete(endpoint, { headers });
    return response;
  }

  static async put(endpoint, data) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.put(endpoint, data, { headers });
    return response;
  }

  static async formDataPost(endpoint, data) {
    const formData = new FormData();

    // Append data fields to the FormData object
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }

  static async formDataPut(endpoint, data) {
    const formData = new FormData();

    // Append data fields to the FormData object
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT",
      Authorization: getJWT(),
    };

    const response = await instance.put(endpoint, formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data", // Set the correct content type for FormData
      },
    });

    return response;
  }

  static async patch(endpoint) {
    const response = await instance.patch(endpoint);
    return response;
  }
}
export default HTTPClient;

// import axios from "axios";
// import CookieManager from "../../src/app/utils/cookieManager/cookieManager";

// const baseURL =
//   process.env.NEXT_PUBLIC_NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
//     : process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

// const instance = axios.create({
//   baseURL,
// });

// const commonHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json",
// };

// const addAuthHeader = (headers) => {
//   const token = CookieManager.getCookie("jwt");
//   if (token && typeof window !== "undefined") {
//     headers["Authorization"] = `Bearer ${token.replace(/^"(.*)"$/, '$1')}`;
//   }
// };

// class HTTPClient {
//   static async request(method, endpoint, data) {
//     const headers = { ...commonHeaders };
//     addAuthHeader(headers);

//     try {
//       const response = await instance({
//         method,
//         url: endpoint,
//         headers,
//         ...(data && { data }),
//       });
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   }

//   static get(endpoint) {
//     return this.request("get", endpoint);
//   }

//   static post(endpoint, data) {
//     return this.request("post", endpoint, data);
//   }

//   static put(endpoint, data) {
//     return this.request("put", endpoint, data);
//   }

//   static delete(endpoint) {
//     return this.request("delete", endpoint);
//   }

//   static patch(endpoint) {
//     return this.request("patch", endpoint);
//   }

//   static formDataRequest(method, endpoint, data) {
//     const formData = new FormData();

//     for (const key in data) {
//       formData.append(key, data[key]);
//     }

//     const headers = { ...commonHeaders };
//     addAuthHeader(headers);

//     headers["Content-Type"] = "multipart/form-data";

//     return this.request(method, endpoint, formData);
//   }

//   static formDataPost(endpoint, data) {
//     return this.formDataRequest("post", endpoint, data);
//   }

//   static formDataPut(endpoint, data) {
//     return this.formDataRequest("put", endpoint, data);
//   }
// }

// export default HTTPClient;

// ########%%%%%%%  v2  %%%%%%%%%%%%%%$$$$$$$$$

// import axios from "axios";
// import CookieManager from "../../src/app/utils/cookieManager/cookieManager";

// const baseURL =
//   process.env.NEXT_PUBLIC_NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
//     : process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

// const instance = axios.create({
//   baseURL,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
//     "Content-Type": "application/json",
//   },
// });

// instance.interceptors.request.use((config) => {
//   const token = getJWT();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export function getJWT() {
//   if (typeof window !== "undefined") {
//     let token = CookieManager.getCookie("jwt");
//     if (token?.startsWith('"') && token.endsWith('"')) {
//       token = token.slice(1, -1);
//     }
//     return token;
//   }
//   return "";
// }

// class HTTPClient {
//   static async get(endpoint) {
//     return instance.get(endpoint);
//   }

//   static async post(endpoint, data) {
//     return instance.post(endpoint, data);
//   }

//   static async delete(endpoint) {
//     return instance.delete(endpoint);
//   }

//   static async put(endpoint, data) {
//     return instance.put(endpoint, data);
//   }

//   static async formDataPost(endpoint, data) {
//     const formData = new FormData();
//     for (const key in data) {
//       formData.append(key, data[key]);
//     }
//     return instance.post(endpoint, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   }

//   static async formDataPut(endpoint, data) {
//     const formData = new FormData();
//     for (const key in data) {
//       formData.append(key, data[key]);
//     }
//     return instance.put(endpoint, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   }

//   static async patch(endpoint) {
//     return instance.patch(endpoint);
//   }
// }

// export default HTTPClient;
