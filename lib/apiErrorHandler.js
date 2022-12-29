export const handleError = (error) => {
  if (error.response.status === 401) {
    throw new Error("APi Key is invalid");
  } else if (error.response.status === 404) {
    throw new Error("Service Unavailable");
  } else {
    throw new Error("Server Unavailable");
  }
};
