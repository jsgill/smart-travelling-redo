import axios from "axios";
export const tripReq = async (data) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_TRIP_DETAILS_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const tripTwoReq = async (mob, data) => {
  return await axios.post(
    `https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/userInput?mob=${mob}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
