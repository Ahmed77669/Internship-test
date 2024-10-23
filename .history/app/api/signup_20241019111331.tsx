import bcrypt from 'bcryptjs';
import connection from '../../lib/mysql';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await connection.execute(
        'INSERT INTO users_2 (name, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
      );

      return res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
      return res.status(500).json({ error: 'Error creating user' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
