
import PropTypes from 'prop-types';

const CurrencySelector = ({ onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2">Select Currency Pair:</label>
      <select onChange={onChange} className="p-2 border rounded">
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        <option value="BNBUSDT">BNB/USDT</option>
        <option value="XRPUSDT">XRP/USDT</option>
      </select>
    </div>
  );
};

CurrencySelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};


export default CurrencySelector;