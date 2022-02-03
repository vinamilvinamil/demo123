import mongoose, { Schema } from 'mongoose'
import { COURSE_LEVEL, TABLE_MODEL } from '../utils/Constants';

const courseSchema = new mongoose.Schema ({
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
    favorited: {
        type: Boolean,
        default: false
    },
    rate: {
        type: Number,
        default: 4
    },
    level: {
        type: Number,
        default: COURSE_LEVEL.BEGINNER
    },
    price: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        default: 0
    },
    lecture: {
        type: Number,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: TABLE_MODEL.COURSE_CATEGORY
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.courseSchema || mongoose.model(TABLE_MODEL.COURSE, courseSchema);

export default Dataset;