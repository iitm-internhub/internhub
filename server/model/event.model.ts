import mongoose, { Schema } from "mongoose";

export interface EventSchemaInterface {
  eventTitle: string;
  eventDescription: string;
  eventDate: Date;
  eventLocation: string;
  eventSpeakers: string;
  eventRegistrationURL: string;
  eventImageIds: Array<string>;
}

const eventSchema: Schema = new mongoose.Schema(
  {
    eventTitle: { type: String, min: 4, required: true },
    eventDescription: { type: String, min: 20, required: true },
    eventDate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    eventSpeakers: { type: String, required: true },
    eventRegistrationURL: { type: String, required: true },
    eventImageIds: { type: Array<String>, required: true },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
