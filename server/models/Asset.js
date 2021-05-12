const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = Asset = mongoose.model('asset', assetSchema);
