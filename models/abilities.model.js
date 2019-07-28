const mongoose = require('mongoose');

const { Schema } = mongoose;

const abilitiesModel = new Schema(
  {
    name: { type: String, default: null },
    description: { type: String, default: null },
    insert_date: { type: Date, default: Date.now() },
    date_updated: { type: Date, default: Date.now() }
  }, { collection: 'abilities' }
);

module.exports = mongoose.model('abilities', abilitiesModel);
