import { instanceForJSONPlaceholder } from "../../../app/api";

export const productAPI = {
  postProduct: (object: any) =>
    instanceForJSONPlaceholder.post("", {
        ...object,
    }).then(response=>response.data),
};
