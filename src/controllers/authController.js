import jwt from 'jsonwebtoken';

const FAKE_USERS = [
  { email: 'admin@laundry.com', password: 'password123', role: 'superadmin' },
  { email: 'coord@laundry.com', password: 'password123', role: 'coordinator' },
];

export const login = (req, res) => {
  const { email, password } = req.body;

  const user = FAKE_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};