import { plants } from '../../../plants'

export default function handler(req, res) {
  console.log(req.query)
  //&_sort=name&_order=asc&_page=1&_limit=8
  res.status(200).json(plants.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  )
}
