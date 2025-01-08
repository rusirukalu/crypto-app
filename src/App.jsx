import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/actions';
import { ChartComponent } from './components/ChartComponent';
import { CurrencySelector } from './components/CurrencySelector';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval] = useState('1d');
  const [startTime] = useState(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
  const [endTime] = useState(Date.now());

  useEffect(() => {
    dispatch(fetchData(symbol, interval, startTime, endTime));
  }, [symbol, interval, startTime, endTime, dispatch]);

  const handleCurrencyChange = (event) => {
    setSymbol(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Price Chart</h1>
      <CurrencySelector onChange={handleCurrencyChange} />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ChartComponent data={data} />
      )}
    </div>
  );
};

export default App;