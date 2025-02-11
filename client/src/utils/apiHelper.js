import axios from "axios";

export const api = (path, method = "GET", body = null, credentials = null) => {
  const url = "http://localhost:5000/api" + path;

  const options = {
    method,
    headers: {},
  };

  if (body) {
    console.log("body", JSON.stringify(body));
    options.body = JSON.stringify(body);
    options.headers["Content-Type"] = "application/json; charset=utf-8";
    console.log(options);
  }

  if (credentials) {
    const encodedCredentials = btoa(
      `${credentials.username}:${credentials.password}`
    );
    options.headers.Authorization = `Basic ${encodedCredentials}`;
  }

  return axios(url, options);
};
