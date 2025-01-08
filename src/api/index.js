import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.binance.com/api/v3',
});

export const getKlineData = (symbol, interval, startTime, endTime) => {
  return api.get('/klines', {
    params: {
      symbol,
      interval,
      startTime,
      endTime,
    },
  });
};

export default api;