import bcrypt from 'bcryptjs';
import connection from '../../../lib/mysql';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

   await connection.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return new Response(JSON.stringify({ message: 'User created successfully!' }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating user' }), {
      status: 500,
    });
  }
}
