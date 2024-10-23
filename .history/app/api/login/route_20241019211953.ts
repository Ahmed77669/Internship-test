// pages/api/signin.ts
import bcrypt from 'bcryptjs';
import connection from '../../../lib/mysql'; // Your MySQL connection utility
import { signJWT } from '../../../lib/jwt'; // Your JWT utility
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Query the database for the user
      const [rows] = await connection.execute('SELECT * FROM users_2 WHERE email = ?', [email]);

      // Cast the rows to an array of users (assuming only one user will match the email)
      const userRows = rows as any[];

      if (userRows.length === 0) {
        // Return 401 if the user is not found
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = userRows[0];

      // Verify password using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate JWT with user details (e.g., id, username)
      const token = await signJWT({ id: user.id, username: user.username });

      // Set the JWT as a secure cookie with HttpOnly and SameSite attributes
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict; Secure=${process.env.NODE_ENV === 'production'}`);

      // Respond with success message
      return res.status(200).json({ message: 'Sign in successful' });
    } catch (err) {
      console.error('Sign in error:', err);
      // Respond with a generic 500 error
      return res.status(500).json({ error: 'Error signing in' });
    }
  }

  // Return 405 for unsupported HTTP methods
  return res.status(405).json({ error: 'Method not allowed' });
}

