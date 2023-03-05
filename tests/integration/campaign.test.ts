import app from '../../src/app';
import init from '../../src/server';
import supertest from "supertest";
import { cleanDb } from "../helpers";
import httpStatus from 'http-status';
import { createCampaign } from '../factories/campaign-factory';

beforeAll(async () => {
  await init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});


const server = supertest(app);

describe("GET /fetch", () => {
  it("should return status 200 and the object", async () => {
    await createCampaign();

    const response = await server.get("/fetch?seg=BR");

    expect(response.status).toBe(httpStatus.OK);
  });

  it("should return status 400 when there is no campaign", async () => {

    const response = await server.get("/fetch?seg=BR");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

});

describe("POST /campaign", () => {
  it("should return status 201 for created campaign.", async () => {

    const body = {
      title: "GATOS DA TI",
      author: "SARA",
      image: "https://http.cat/201",
      type: "cpc",
      bid: 2000,
      segmentation: "BR",
    }

    const response = await server.post("/campaign").send(body);

    expect(response.status).toBe(httpStatus.CREATED);
  });

  it("should return status 404 for invalid body.", async () => {

    const body = {
      title: "GATOS DA TI",
      author: "SARA",
      image: "https://http.cat/201",
      type: "cpc"
    }

    const response = await server.post("/campaign").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should return status 409 for campaign already registered.", async () => {

    await createCampaign();

    const body = {
      title: "GATOS DA TI",
      author: "SARA",
      image: "https://http.cat/201",
      type: "cpc",
      bid: 2000,
      segmentation: "BR",
    }

    const response = await server.post("/campaign").send(body);

    expect(response.status).toBe(httpStatus.CONFLICT);
  });

});

describe("PUT /campaign", () => {
  it("should return status 200 for successfully updated campaign", async () => {

    const data = await createCampaign();

    const body = {
      title: "GATOS DA TI 2",
      author: "SARA",
      image: "https://http.cat/201",
      type: "cpc",
      bid: 2000,
      segmentation: "BR",
    }

    const response = await server.put("/campaign").set("id", data._id).send(body);

    expect(response.status).toBe(httpStatus.OK);
  });

});

