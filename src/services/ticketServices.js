import axios from "axios";

//api service for fetch all ticket from database
export const getAllTicket = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(" http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtoLnJhbWluNjlAZ21haWwuY29tIiwiaWF0IjoxNjMxMTI2Njk3LCJleHAiOjE2MzExMzM4OTd9.Rgkc-AebUYgeU6C1l7MyO0BelpHTzp1OHItd1XVGiS0",
        },
      });
      resolve(result);
      console.log(500, result);
    } catch (error) {
      reject(error.message);
    }
  });
};
