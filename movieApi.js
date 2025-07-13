const API_KEY = "f7e2d007"; // Replace with your actual OMDb API key
const BASE_URL = "https://www.omdbapi.com";

export const fetchMoviesBySearch = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    // OMDb returns results under "Search" key
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};