import { plants } from '../../../plants'

export default function personHandler({ query: { id } }, res) {
  const filtered =  plants.filter((p) => p.id === id)
  console.log(filtered)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
