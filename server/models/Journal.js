import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    content: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      enum: [
        "Happy",
        "Excited",
        "Calm",
        "Grateful",
        "Neutral",
        "Sad",
        "Angry",
        "Anxious",
      ],
      default: "Neutral",
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    images: [
      {
        type: String,
      },
    ],

    isFavorite: {
      type: Boolean,
      default: false,
    },

    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Journal = mongoose.model("Journal", journalSchema);

export default Journal;