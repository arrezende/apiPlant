export default function handler(req, res) {
    res.status(200).json([
        {
          "key": "day",
          "title": "Todos os dias"
        },
        {
          "key": "week",
          "title": "A cada semana"
        }
      ])
}