import { malteslupulos } from '../../../malteslupulos'

export default function personHandler({ query: {id} }, res) {
//console.log(req.query)
  const newID = Number(id)
  console.log(id)
  const filtered = malteslupulos.filter((p) => p.id === newID)
  console.log(filtered)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
