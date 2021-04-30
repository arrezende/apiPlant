import { plants } from '../../../plants'

export default function personHandler({ query: { name } }, res) {
  const filtered = plants.filter((p) => p.name === name)

  // User with name exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with name: ${name} not found.` })
  }
}
