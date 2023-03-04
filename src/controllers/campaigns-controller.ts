import { Request, Response } from "express";
import httpStatus from "http-status";
import { listCampaign, createCampaign, missingParamError, updateCampaign } from "@/services/campaign-service";

export async function list(req: Request, res: Response) {
  try {
    const { seg: segmentation } = req.query;
    if (!segmentation) {
      throw missingParamError();
    }

    const data = await listCampaign(String(segmentation));
    return res.status(httpStatus.CREATED).json(data);

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function store(req: Request, res: Response) {
  try {
    const data = await createCampaign(req.body);
    
    return res.status(httpStatus.CREATED).json(data);
  } catch (error) {
    if (error.name === "DuplicatedRegisterError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}


export async function update(req: Request, res: Response) {
  try {
    const { id } = req.headers;
    
    const data = await updateCampaign(req.body, String(id));
    return res.status(httpStatus.OK).json(data);
  } catch (error) {
    if (error.name === "DuplicatedRegisterError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

