import mongoose, { Schema } from 'mongoose'
import { COURSE_LEVEL, TABLE_MODEL , COURSE_STATUS} from '../utils/Constants';

const courseSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    shortDescription: {
        type: String,
        default: ''
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
    isActived: {
        type: Boolean,
        default: false
    },
    status: {
        type: Number,
        default: COURSE_STATUS.PENDING
    },
    discount: {
        type: Number,
        default: 0
    },
    isDiscount: {
        type: Boolean,
        default: false
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

let Dataset = mongoose.models.course || mongoose.model(TABLE_MODEL.COURSE, courseSchema);

export default Dataset;