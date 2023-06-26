const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "rapidapi-key",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export async function getGames() {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Could not fetch games");

    const games = await response.json();
    return games;
  } catch (error) {
    throw error;
  }
}

export async function getGameById({ gameId }) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Could not fetch game details");

    const games = await response.json();
    return games.find((game) => game.id.toString() === gameId);
  } catch (error) {
    throw error;
  }
}
