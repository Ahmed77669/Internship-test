import bcrypt from 'bcryptjs';
import connection from '../../../lib/mysql';
import { signJWT } from '../../../lib/jwt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), {
        status: 400,
      });
    }

    const [rows] = await connection.execute('SELECT * FROM Users WHERE email = ?', [email]);
    const userRows = rows as any[];


    if (userRows.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    const user = userRows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    const token = await signJWT({ id: user.id, username: user.username });

    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict`

    );

    return new Response(JSON.stringify({ message: 'Sign in successful' }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error during sign in:', error);
    return new Response(JSON.stringify({ error: 'Error signing in' }), {
      status: 500,
    });
  }
}
