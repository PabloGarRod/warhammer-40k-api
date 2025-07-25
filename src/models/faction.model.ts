import { Schema, model } from "mongoose";

export interface Faction {
  name: string;
  description: string;
  imageURL?: string;
}

const factionSchema = new Schema<Faction>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: String,
  },
  {
    versionKey: false,
  }
);

export const FactionModel = model<Faction>("Faction", factionSchema);
