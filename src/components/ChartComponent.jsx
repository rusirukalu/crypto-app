import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.map(item => new Date(item[0]).toLocaleDateString()),
          datasets: [
            {
              label: 'Price',
              data: data.map(item => item[4]),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        },
      });

      return () => chart.destroy();
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};
ChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ChartComponent;