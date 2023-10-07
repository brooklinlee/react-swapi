const BASE_URL= 'http https://swapi.dev/api/starships/'

export async function getAllStarships() {
  const res = await fetch(`${BASE_URL}`)
  return res.json()
}

