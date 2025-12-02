import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  type ChartEvent,
  type ActiveElement,
  type TooltipItem,
  type ChartOptions
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {type  ChartData } from './types/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps{
  chartData: ChartData | null;
  chartType: 'bar' | 'pie' | 'line';
  onShopClick?: (shopName: string) => void;
  title?: string;
}

export const ChartComponent: React.FC<ChartComponentProps> = ({
  chartData,
  chartType,
  onShopClick,
  title = 'Sales Dashboard'
} ) => {
  const chartRef = useRef<ChartJS>(null);

  const options   = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'bar' | 'line' | 'pie'>) {
            return `$${context.parsed.y?.toLocaleString() || context.parsed?.toLocaleString()}`;
          }
        }
      }
    },
    onClick: (event: ChartEvent, elements: ActiveElement[]) => {
      if (onShopClick && elements.length > 0) {
        const chart = chartRef.current;
        if (chart) {
          const elementIndex = elements[0].index;
          const label = chart.data.labels?.[elementIndex];
          if (label) {
            onShopClick(label.toString());
          }
        }
      }
    },
    onHover: (event: ChartEvent, elements: ActiveElement[]) => {
      const target = event.native?.target as HTMLElement;
      if (target) {
        target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
      }
    }
  };

  if (!chartData) {
    return (
      <div className="chart-container" style={{ height: '400px' }}>
        <div className="no-data">No chart data available</div>
      </div>
    );
  }

  return (
    <div className="chart-container" style={{ height: '400px' }}>
      <Chart
        ref={chartRef}
        type={chartType}
        data={chartData}
        options={options as ChartOptions}
      />
    </div>
  );
};