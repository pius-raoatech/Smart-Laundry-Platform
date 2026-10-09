import { orders } from '../config/mockOrders.js';

export const getOrders = (req, res, next) => {
  try {
    if (!req.user) {
      const error = new Error('Authentication required');
      error.statusCode = 401;
      throw error;
    }

    const role = req.user.role;

    if (role === 'superadmin') {
      return res.json(orders);
    }

    const safeOrders = orders.map(({ wholesaleCost, ...rest }) => rest);
    res.json(safeOrders);
  } catch (err) {
    next(err);
  }
};