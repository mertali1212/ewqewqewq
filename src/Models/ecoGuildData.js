const { Schema, model } = require("mongoose");

const ecoGuildData = Schema({
  guildID: String,
  guildInventory: { type: Array, default: [] },
});

module.exports = model("ecoGuildData", ecoGuildData);
