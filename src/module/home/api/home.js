import axiosInstance from "@/api/axios";

export const fetchDaybookDates = () => {
  return axiosInstance.get("/api/web-fetch-daybook-date");
};
