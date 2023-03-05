import campaign from "../src/entitites/campaign/campaign";

export async function cleanDb() {
  await campaign.remove({});
}