import { frases } from '../../../frases'

export default function frase({ query: { id } }, res) {
  const filtered = frases.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
