import bcrypt from 'bcryptjs';
import connection from '../../../lib/mysql';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Check if the email already exists in the database
    const [rows] = await connection.execute(
      'SELECT email FROM Users WHERE email = ?',
      [email]
    );

    if (rows.length > 0) {
      // Email already exists
      return new Response(
        JSON.stringify({ error: 'Email already in use. Please log in instead.' }),
        { status: 400 } // 400 Bad Request
      );
    }

    // If email does not exist, proceed to hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 10);

    await connection.execute(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
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
