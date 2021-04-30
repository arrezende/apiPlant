import { plants } from '../../../plants'

export default function handler({query: {page = 1, limit= 10000}}, res) {
  console.log(page)
  //&_sort=name&_order=asc&_page=1&_limit=8
 // const page =  (Number(req.query.page) === NaN) ? 1 : Number(req.query.page)
  //const limit = Number(req.query.limit)

  const startIndex = (page - 1 ) * limit
  const endIndex = page * limit
  console.log(startIndex, endIndex)

  const plantsJSON = JSON.stringify(plants.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))

  const resultPlants = plants.slice(startIndex, endIndex)

  res.status(200).json(resultPlants)
}
