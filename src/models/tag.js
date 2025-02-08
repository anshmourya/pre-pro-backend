const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const customLabels = {
    totalDocs: 'itemCount',
    docs: 'data',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator'
}

mongoosePaginate.paginate.options = { customLabels: customLabels }

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true });

tagSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Tag", tagSchema);