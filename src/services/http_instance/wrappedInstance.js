import axios from "axios";
import CookieManager from "src/services/cookieManager/cookieManager";
import { apiURL } from "../../apiURL";

// const baseURL =
//   process.env.NEXT_PUBLIC_NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
//     : process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

const baseURL = apiURL;

const instance = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getJWT();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function getJWT() {
  if (typeof window !== "undefined") {
    let token = CookieManager.getCookie("jwt");
    if (token?.startsWith('"') && token.endsWith('"')) {
      token = token.slice(1, -1);
    }
    return token;
  }
  return "";
}

class HTTPClient {
  static async get(endpoint) {
    return instance.get(endpoint);
  }

  static async post(endpoint, data) {
    return instance.post(endpoint, data);
  }

  static async delete(endpoint) {
    return instance.delete(endpoint);
  }

  static async put(endpoint, data) {
    return instance.put(endpoint, data);
  }

  static async formDataRequest(method, endpoint, data) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return instance.request({
      method,
      url: endpoint,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  // static async formDataRequest(method, endpoint, data) {
  //   const formData = new FormData();
  //   formData.append("data", JSON.stringify(data));
  //   return instance.request({
  //     method,
  //     url: endpoint,
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  // }

  static async formDataPost(endpoint, data) {
    return this.formDataRequest("post", endpoint, data);
  }

  static async formDataPut(endpoint, data) {
    return this.formDataRequest("put", endpoint, data);
  }

  static async patch(endpoint) {
    return instance.patch(endpoint);
  }
}

export default HTTPClient;

// ############### v2 %%%%%%%%%$$$$$$$$$$$

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

// instance.interceptors.request.use((config) => {
//   const token = getJWT();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

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

// ####$$$$$$$  v1  #$$$$$$$%%%%%%%%%%%%%

// import axios, {
//   HeadersDefaults,
//   AxiosInstance,
//   InternalAxiosRequestConfig,
// } from "axios";
// import CookieManager from "../../src/app/utils/cookieManager/cookieManager";

// const baseURL =
//   process.env.NEXT_PUBLIC_NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
//     : process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

// console.log(baseURL);
// const instance = axios.create({
//   baseURL: baseURL,
// });

// export function getJWT() {
//   if (typeof window !== "undefined") {
//     let token = CookieManager.getCookie("jwt");
//     if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
//       token = token?.substring(1, token?.length - 2);
//     }
//     // token?.replace(/^"(.*)"$/, '$1');
//     // console.log(token?.split('"'))
//     return "Bearer " + token;
//   }
//   return "";
// }
// class HTTPClient {
//   static async get(endpoint) {
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET",
//       "Content-Type": "application/json",
//       Authorization: getJWT(),
//     };

//     const response = await instance.get(endpoint, { headers });
//     return response;
//   }

//   static async post(endpoint, data) {
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST",
//       "Content-Type": "application/json",
//       Authorization: getJWT(),
//     };

//     const response = await instance.post(endpoint, data, { headers });
//     return response;
//   }

//   static async delete(endpoint) {
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET",
//       "Content-Type": "application/json",
//       Authorization: getJWT(),
//     };
//     const response = await instance.delete(endpoint, { headers });
//     return response;
//   }

//   static async put(endpoint, data) {
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST",
//       "Content-Type": "application/json",
//       Authorization: getJWT(),
//     };

//     const response = await instance.put(endpoint, data, { headers });
//     return response;
//   }

//   static async formDataPost(endpoint, data) {
//     const formData = new FormData();

//     // Append data fields to the FormData object
//     for (const key in data) {
//       formData.append(key, data[key]);
//     }

//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST",
//       Authorization: getJWT(),
//     };

//     const response = await instance.post(endpoint, formData, {
//       headers: {
//         ...headers,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     return response;
//   }

//   static async formDataPut(endpoint, data) {
//     const formData = new FormData();

//     // Append data fields to the FormData object
//     for (const key in data) {
//       formData.append(key, data[key]);
//     }

//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "PUT",
//       Authorization: getJWT(),
//     };

//     const response = await instance.put(endpoint, formData, {
//       headers: {
//         ...headers,
//         "Content-Type": "multipart/form-data", // Set the correct content type for FormData
//       },
//     });

//     return response;
//   }

//   static async patch(endpoint) {
//     const response = await instance.patch(endpoint);
//     return response;
//   }
// }
// export default HTTPClient;
