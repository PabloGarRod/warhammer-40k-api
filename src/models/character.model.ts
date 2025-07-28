import { Schema, model } from "mongoose";

interface Character {
  idName: string;
  name: string;
  race: string;
  faction: string;
  role: string;
  unit: string;
  originPlanet: string;
  biography: string;
  imageURL: string;
}

const characterSchema = new Schema<Character>(
  {
    name: { type: String, required: true, unique: true },
    idName: { type: String, required: true, unique: true },
    originPlanet: { type: String, required: true },
    race: { type: String, required: true },
    faction: { type: String, required: true },
    role: { type: String, required: true },
    unit: { type: String, required: true },
    biography: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const CharacterModel = model<Character>("Character", characterSchema);
