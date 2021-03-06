import axios from "axios";

const rootURL = " http://localhost:3001/v1/ticket/";
const closeTicketURL = rootURL + "ticketclose/";
const newTicketURL = rootURL + "newticket";

//api service for fetch all ticket from database
export const getAllTicket = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(" http://localhost:3001/v1/ticket", {
        headers: {
          Authorization: accessToken,
        },
      });
      resolve(result);
      console.log(500, result);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const getSingleTicket = (_id) => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(rootURL + _id, {
        headers: { Authorization: accessToken },
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
export const replyMessageTicket = (_id, msgObj) => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(rootURL + _id, msgObj, {
        headers: { Authorization: accessToken },
      });
      console.log(444, res);
      if (res.data.status === "success") {
        return resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const updateTicketClosed = (_id) => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(
        closeTicketURL + _id,
        {},
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const addNewTicket = (ticketData) => {
  const accessToken = sessionStorage.getItem("accessToken");
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(newTicketURL, ticketData, {
        headers: {
          Authorization: accessToken,
        },
      });
      console.log(899, res);
      if (res) {
        resolve(res);
      }
    } catch (error) {
      reject(error);
    }
  });
};
