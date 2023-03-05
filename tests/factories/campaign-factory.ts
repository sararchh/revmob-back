import campaign from "@/entitites/campaign/campaign";

export async function createCampaign() {
  return await campaign.create({
      title: "GATOS DA TI",
      author: "SARA",
      image: "https://http.cat/200",
      type: "cpc",
      bid: 2000,
      segmentation: "BR",
  })
}