import { Schema } from "mongoose";
import { Authorchema } from "./author.schema";

export const BookSchema = new Schema({
    name: String,
    author: [Authorchema],
    language: String,
    releaseYear: Number,
    publisher: String,
    pages:Number

})

 
