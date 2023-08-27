import { $host } from "./manager";

const getAll = async (url) => {
  try {
    const { data } = await $host.get("/api/descriptions");
    return data;
  } catch ({ response }) {
    const { status } = response;
    switch (status) {
      case 422:
        return "You entered a wrong url.";
      case 404:
        return "The site was not found.";
      default:
        return "Something was wrong. Try again.";
    }
  }
};

export { getAll };
