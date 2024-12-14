import mongoose, { Schema } from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"


const commentSchema = Schema({
  content: {
    type: String,
    required: true,
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Injecting the plugin 
commentSchema.plugin(mongooseaggregatepaginate)

export const Comment = mongoose.model("Comment", commentSchema);
