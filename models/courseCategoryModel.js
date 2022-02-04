import mongoose, { Schema } from 'mongoose';
import { TABLE_MODEL } from '../utils/Constants';

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

let Dataset = mongoose.models.courseCategory || mongoose.model(TABLE_MODEL.COURSE_CATEGORY, courseCategorySchema);

export default Dataset;