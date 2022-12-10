import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function OrderReceivedPage() {
  return (
    <div className="order-received">
      <FaCheckCircle className="order-received-icon" />
      <p className="order-received-desc">Pesananmu telah diterima dan akan segera diproses</p>
      <p className="order-received-text">Terima kasih telah berbelanja di Herbal.in</p>
      <Link to="/home">
        <button className="order-received-done">Kembali ke halaman beranda</button>
      </Link>
    </div>
  );
}

export default OrderReceivedPage;
