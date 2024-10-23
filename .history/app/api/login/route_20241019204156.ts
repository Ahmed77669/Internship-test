// pages/api/signin.js
import bcrypt from 'bcryptjs';
import connection from '../../../lib/mysql';
import { signJWT } from '../../../lib/jwt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Find user in database
      const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = rows[0];

      // Verify password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate JWT
      const token = await signJWT({ id: user.id, username: user.username });

      // Send token as a cookie
      res.setHeader(
        'Set-Cookie',
        `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict`
      );

      return res.status(200).json({ message: 'Sign in successful' });
    } catch (err) {
      return res.status(500).json({ error: 'Error signing in' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
