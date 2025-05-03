import { zh } from "h3-zod";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";
import { client } from "../openai";

const schema = z.object({
  prompt: z.string(),
});

const MoodboardImagesInformation = z.object({
  lightning: z.string(),
  materials: z.string(),
  textures: z.string(),
  spatialArrangement: z.string(),
  interiorDesign: z.string(),
  facadeDesign: z.string(),
  landscapeDesign: z.string(),
  furnitureDesign: z.string(),
  colorPalette: z.string(),
  peopleAndFunctionality: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, schema);

  const instructions = `
    You are an expert architectural designer tasked with creating a moodboard of images with references for a specific design vision.
    Your task is to generate a list of 10 images that represent the design vision described in the prompt.
    Each image should be described in detail, including the style, color palette, and any specific elements that should be included.
    The images should be diverse and include reference ideas for different aspects of the design vision.
    The different aspects of the design vision should be: lighting, materials, textures, and spatial arrangement, interior design, facade design,
    landscape design, furniture design, color palette, people, functionality.
  `;

  const response = await client.responses.parse({
    model: "gpt-4.1",
    instructions: instructions,
    input: [
      { role: "system", content: instructions },
      { role: "user", content: body.prompt },
    ],
    text: {
      format: zodTextFormat(
        MoodboardImagesInformation,
        "moodboardImagesInformation"
      ),
    },
  });

  const output = response.output_parsed;
  console.log("keys", Object.keys(output!));

  setResponseStatus(event, 201);
  return body;
});
