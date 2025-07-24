import { Schema, model } from "mongoose";

interface IFaction {
  name: string;
  description: string;
  imageURL?: string;
}

const factionSchema = new Schema<IFaction>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: String,
  },
  {
    versionKey: false,
  }
);

export const FactionModel = model<IFaction>("Faction", factionSchema);
