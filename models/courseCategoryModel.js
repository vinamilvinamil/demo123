import mongoose from 'mongoose'

const courseCategorySchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: true
    },
    actived: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.courseCategory || mongoose.model('courseCategory', courseCategorySchema);

export default Dataset;