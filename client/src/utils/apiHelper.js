import axios from "axios";

//This is a universal method to call the api in whatever manner is necessary
export const api = (path, method = "GET", body = null, credentials = null) => {
  const url = "http://localhost:5000/api" + path;

  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.data = body;
    options.headers["Content-Type"] = "application/json; charset=utf-8";
  }

  if (credentials) {
    const encodedCredentials = btoa(
      `${credentials.username}:${credentials.password}`
    );
    options.headers.Authorization = `Basic ${encodedCredentials}`;
  }

  return axios(url, options);
};
