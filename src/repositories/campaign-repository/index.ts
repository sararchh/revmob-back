import campaign from "@/entitites/campaign/campaign";
import { CreateCampaignProps } from "@/services/campaign-service";

async function findByTitle(title: string) {
  const list = await campaign.find({ title: title });
  if (!Boolean(list.length)) return false;

  return true;
}

async function findById(id: string) {
  const list = await campaign.findOne({ _id: id });
  if (!Boolean(list._id)) return false;
  return true;
}

async function list(segmentation: string) {
  return await campaign.find({ segmentation: segmentation });
}

async function create(data: CreateCampaignProps) {
  return await campaign.create(data);
}

async function update(data: CreateCampaignProps, id: string) {
   return await campaign.updateOne({ _id: id }, data);
}


const campaignRepository = {
  findByTitle,
  list,
  create,
  update,
  findById
};

export default campaignRepository;
