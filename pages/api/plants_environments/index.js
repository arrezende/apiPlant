export default function handler(req, res) {
    res.status(200).json([
        {
          "key": "living_room",
          "title": "Sala"
        },
        {
          "key": "bedroom",
          "title": "Quarto"
        },
        {
          "key": "kitchen",
          "title": "Cozinha"
        },
        {
          "key": "bathroom",
          "title": "Banheiro"
        }
      ])
}