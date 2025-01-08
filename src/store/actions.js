import { act } from 'react';
import { getKlineData } from '../api';

export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const fetchData = (symbol, interval, startTime, endTime) => async (dispatch) => {
  try {
    const response = await getKlineData(symbol, interval, startTime, endTime);
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError('Error fetching data'));
    console.error('Error fetching data', error);
  }
};

export default act;