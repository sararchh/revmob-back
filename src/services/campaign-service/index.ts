import campaignRepository from "@/repositories/campaign-repository";
import { duplicatedRegisterError, NoContentsToListError } from "./errors";

export interface CreateCampaignProps {
  title: string,
  author: string,
  image: string,
  type: string,
  bid: number,
  segmentation: string,
  createdAt?: string,
  __v?: number
};

export async function listCampaign(segmentation: string): Promise<CreateCampaignProps[]> {
  const list = await campaignRepository.list(segmentation);
  if (!Boolean(list.length)) {
    throw NoContentsToListError();
  }
  return list;
}

export async function createCampaign(data: CreateCampaignProps): Promise<CreateCampaignProps> {

  await validateDuplicateCampaign(data?.title);

  return campaignRepository.create(data);
}

export async function updateCampaign(data: CreateCampaignProps, id: string): Promise<any> {

  const isExists = await campaignRepository.findById(id);

  if (!isExists) {
    throw NoContentsToListError();
  }

  await campaignRepository.update(data, String(id));

  return true;
}


async function validateDuplicateCampaign(title: string) {
  const isExists = await campaignRepository.findByTitle(title);
  if (isExists) {
    throw duplicatedRegisterError();
  }
}


const campaignService = {
  listCampaign,
  createCampaign,
};

export * from "./errors";
export default campaignService;
