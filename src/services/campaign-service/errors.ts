import { ApplicationError } from "@/protocols";

export function duplicatedRegisterError(): ApplicationError {
  return {
    name: "DuplicatedRegisterError",
    message: "There is already an campaign with given data",
  };
}

export function missingParamError(): ApplicationError {
  return {
    name: "missingParamError",
    message: "There is no param segmentation, its required",
  };
}
export function NoContentsToListError(): ApplicationError {
  return {
    name: "NoContentsToListError",
    message: "There is no contents to list",
  };
}
