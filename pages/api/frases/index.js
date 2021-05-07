import { frases } from '../../../frases'

export default function handler(req, res) {
  res.status(200).json(frases)
}
