export default function handler(req, res) {
    res.status(200).json([
      {"key": "base", "title": "Malte Base"},
      {"key": "especial", "title": "Malte Especial"},
      {"key": "crystal", "title": "Caramelho / Crystal"},
      {"key": "outros", "title": "Outros Maltes"},
      {"key": "alemaesTchecos", "title": "Lúpulos alemães e tchecos"},
      {"key": "ingleses", "title": "Lúpulos ingleses"},
      {"key": "americanos", "title": "Lúpulos americanos"},
      {"key": "belgas", "title": "Lúpulos Belgas"}
      ])
}