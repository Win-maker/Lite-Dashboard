export interface SaleRecord {
  id: string;
  shopId: string;
  shopName: string;
  product: string;
  category: string;
  amount: number;
  quantity: number;
  date: string;
  region: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

export interface FilterOptions {
  dateRange?: { start: string; end: string };
  shops?: string[];
  categories?: string[];
  minAmount?: number;
  maxAmount?: number;
}