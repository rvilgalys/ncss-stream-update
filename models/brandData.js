import { Schema, model } from "mongoose";

const brandDataSchema = new Schema({
  ncid: {
    type: Number,
    required: true
  },
  supplier: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  alloc: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false
  },
  palletSize: {
    type: Number,
    required: false
  },
  casePrice: Number,
  bottleImgUrl: String,
  supplierWebsite: String,
  bottlesPerCase: Number,
  retailPrice: Number,
  mxbPrice: Number,
  sevenDaySales: Number,
  thirtyDaySales: Number,
  pastYearSales: Number
});
