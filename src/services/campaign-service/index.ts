import campaignRepository from "@/repositories/campaign-repository";
import { duplicatedRegisterError, NoContentsToListError } from "./errors";

export interface CreateCampaignProps {
  title: string,
  author: string,
  type: string,
  bid: number,
  segmentation: string
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
