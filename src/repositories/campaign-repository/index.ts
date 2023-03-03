import campaign from "@/entitites/campaign/campaign";
import { CreateCampaignProps } from "@/services/campaign-service";


async function findByTitle(title: string) {
  const list = await campaign.find({ title: title });
  if (!Boolean(list.length)) return false;

  return true;
}

async function list(segmentation: string) {
  return await campaign.find({segmentation: segmentation});
}

async function create(data: CreateCampaignProps) {
  return await campaign.create(data);
}



const campaignRepository = {
  findByTitle,
  list,
  create,
};

export default campaignRepository;
