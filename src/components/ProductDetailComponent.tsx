import type { SaleRecord } from "./types/data";

const ProductDetail = ({
  record,
  onClose
}: {
  record: SaleRecord;
  onClose: () => void;
}) => (
  <div className="product-detail-modal">
    <div className="product-detail-card">
      
      <div className="product-detail-header">
        <h3>{record.product} Details</h3>
        <button className="product-detail-close" onClick={onClose}>×</button>
      </div>

      <div className="product-detail-body">
        <table className="product-detail-table">
          <tbody>
            <tr><td>Product</td><td>{record.product}</td></tr>
            <tr><td>Category</td><td>{record.category}</td></tr>
            <tr><td>Amount</td><td>${record.amount.toLocaleString()}</td></tr>
            <tr><td>Quantity</td><td>{record.quantity}</td></tr>
            <tr><td>Shop</td><td>{record.shopName}</td></tr>
            <tr><td>Date</td><td>{new Date(record.date).toLocaleDateString()}</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
);


export default ProductDetail;