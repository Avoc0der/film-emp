import axios from 'axios';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const REQUEST_TOKEN = 'request_token';
const SESSION_ID = 'session_id';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: tmdbApiKey,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');

    const token = data.request_token;

    if (data.success) {
      localStorage.setItem(REQUEST_TOKEN, token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Sorry, your token could not be created.');
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem(REQUEST_TOKEN);
  if (token) {
    try {
      const { data: { session_id } } = await moviesApi.post('/authentication/session/new', {
        request_token: token,
      });

      localStorage.setItem(SESSION_ID, session_id);

      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
