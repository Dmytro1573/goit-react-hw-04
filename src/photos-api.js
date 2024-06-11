import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";

const API_KEY = "ki-asPVD80NAe5f5un1xHT4E4XzHbQVjZFKbaoosSFI";

export const getPhotos = async (topic, currentPage) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query: topic,
        client_id: API_KEY,
        page: currentPage,
        per_page: 5,
      },
    });

    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// export const getPhotos = async (topic) => {
//   try {
//     const response = await axios.get(`${BASE_URL}`, {
//       params: {
//         query,
//       },
//     });

//     console.log(response.data);
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     throw error;
//   }
// };
