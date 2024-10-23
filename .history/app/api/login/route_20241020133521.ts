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

    // Fetch user from the database
    const [rows] = await connection.execute('SELECT * FROM users_2 WHERE email = ?', [email]);
    const userRows = rows as any[];

    // Check if the user exists
    if (userRows.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    const user = userRows[0];

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    // Generate a JWT
    const token = await signJWT({ id: user.id, username: user.username });

    // Set the JWT as a cookie
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict`
      // + '; Secure' // Uncomment this for production
    );

    // Return success response with the token set as a cookie
    return new Response(JSON.stringify({ message: 'Sign in successful' }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error during sign in:', error); // Log the error for debugging
    return new Response(JSON.stringify({ error: 'Error signing in' }), {
      status: 500,
    });
  }
}
