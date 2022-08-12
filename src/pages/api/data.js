import { timeFramesData } from "../../../data/timeFrames"

export default function handler(req, res) {
  res.status(200).json(timeFramesData)
}
