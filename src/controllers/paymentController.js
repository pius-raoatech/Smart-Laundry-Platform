import { orders } from '../config/mockOrders.js';

const LOGISTICS_FEE = 500;

export const initializePayment = (req, res) => {
  const { orderId } = req.body;

  if (!orderId || typeof orderId !== 'string') {
    return res.status(400).json({ error: 'orderId is required' });
  }

  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  const totalAmount = order.retailPrice + LOGISTICS_FEE;

  res.json({
    orderId: order.id,
    customerName: order.customerName,
    amountToCharge: totalAmount,
  });
};