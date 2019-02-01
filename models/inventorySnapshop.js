import { Schema, model } from "mongoose";

const itemCountSchema = new Schema({
  ncid: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  diff: {
    type: Number,
    required: false
  }
});

const inventorySnapshotSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  inventory: {
    type: [itemCountSchema],
    required: true
  }
});

export default model("InventorySnapshot", inventorySnapshotSchema);
