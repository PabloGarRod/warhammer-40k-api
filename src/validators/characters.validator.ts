import { z } from "zod";

export const characterSchema = z.object({
  idName: z.string(),
  name: z.string(),
  race: z.string(),
  faction: z.string(),
  role: z.string(),
  unit: z.string(),
  originPlanet: z.string(),
  biography: z.string(),
  imageURL: z.url(),
});

export type CharacterInput = z.infer<typeof characterSchema>;
