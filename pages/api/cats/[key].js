import { plants } from '../../../malteslupulos'

export default function personHandler({ query: { key } }, res) {
  const filtered =  plants.filter((p) => {
        console.log(p.environments.includes(key))
         if(p.environments.includes(key)){
             return p
         }
      //p.environments.includes(key)
    })
  console.log(filtered)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `User with id: ${key} not found.` })
  }
}
