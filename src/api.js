//Base URL
const base_url = "https://api.rawg.io/api/";
const KEY = process.env.REACT_APP_API_KEY;
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}&key=${KEY}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&key=${KEY}`;
export const newGamesURL = () => `${base_url}${newGames}&key=${KEY}`;
export const gameDetailsURL = (gameId) =>
  `${base_url}games/${gameId}?key=${KEY}`;
export const gameScreenshotURL = (gameId) =>
  `${base_url}games/${gameId}/screenshots?key=${KEY}`;
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${KEY}`;
