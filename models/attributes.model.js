const mongoose = require('mongoose');

const { Schema } = mongoose;

const attributesModel = new Schema(
  {
    name: { type: String, default: null },
    type: { type: String, default: null },
    description: { type: String, default: null },
    insert_date: { type: Date, default: Date.now() },
    date_updated: { type: Date, default: Date.now() }
  }, { collection: 'attributes' }
);

module.exports = mongoose.model('attributes', attributesModel);
