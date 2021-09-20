import axios from "axios";

const rootURL = "http://localhost:3001/v1/";
const loginURL = rootURL + "user/login";
const getUserURL = rootURL + "user";
const logoutURL = rootURL + "user/logout";
const getAccessTokeURL = rootURL + "tokens";

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginURL, formData);
      if (res) {
        resolve(res.data);
      }
      if (res.data.status === "success") {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem(
          "crm",
          JSON.stringify({ refreshToken: res.data.refreshToken })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserProfile = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(getUserURL, {
        headers: {
          Authorization: accessToken,
        },
      });
      console.log(100, "here service", res);
      if (!res) {
        reject("No user");
      }
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const logout = () => {
  const accessToken = sessionStorage.getItem("accessToken");

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(logoutURL, {
        headers: {
          Authorization: accessToken,
        },
      });
      if (res.status === "success") return resolve(res.data);
    } catch (error) {
      return reject(error);
    }
  });
};

export const fetchAccessToken = () => {
  if (JSON.parse(localStorage.getItem("crm")) !== null) {
    const { refreshToken } = JSON.parse(localStorage.getItem("crm"));
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(getAccessTokeURL, {
          headers: {
            Authorization: refreshToken,
          },
        });
        sessionStorage.setItem("accessToken", res.data.accessJWT);
        if (res) {
          resolve(true);
        }
      } catch (error) {
        reject(error);
      }
    });
  } else return false;
};

export const registrationuser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(getUserURL, data);
      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
