import React from 'react';
import {type SaleRecord } from './types/data';


interface DataTableProps {
  data: SaleRecord[];
  title?: string;
  onClose?: () => void;
  onProductSelect?: (record: SaleRecord) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ 
  data, 
  title = 'Sales Data',
  onClose ,
  onProductSelect
}) => {


  // const [selectedProduct, setSelectedProduct] = useState<SaleRecord | null>(null);

const handleProductClick = (record: SaleRecord) => {
  onProductSelect?.(record);  // <--- send to Dashboard
};


  const totalAmount = data.reduce((sum, record) => sum + record.amount, 0);
  const totalQuantity = data.reduce((sum, record) => sum + record.quantity, 0);

  return (
    <div className="data-table-container">
      <div className="data-table-header">
        <h3>{title} ({data.length} records)</h3>
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}
      </div>
      
      <div className="summary-stats">
        <div className="stat-item">
          <span>Total Sales:</span>
          <strong>${totalAmount.toLocaleString()}</strong>
        </div>
        <div className="stat-item">
          <span>Total Quantity:</span>
          <strong>{totalQuantity.toLocaleString()}</strong>
        </div>
        <div className="stat-item">
          <span>Average Sale:</span>
          <strong>${(totalAmount / data.length).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Shop</th>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 100).map((record) => ( 
              <tr key={record.id}>
                <td>{record.shopName}</td>
                <td onClick={() => handleProductClick(record)}
                  className='cursor-pointer'>{record.product}</td>
                <td>{record.category}</td>
                <td>{record.quantity}</td>
                <td>${record.amount.toLocaleString()}</td>
                <td>{new Date(record.date).toLocaleDateString()}</td>
                <td>{record.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.length > 100 && (
          <div className="table-footer">
            Showing first 100 of {data.length} records
          </div>
        )}

      </div>

      {/* {selectedProduct && (
        <ProductDetail record={selectedProduct} />
      )} */}
    </div>
  );
};