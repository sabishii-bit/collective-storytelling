import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const PASSWORD_HASH_ENCODED = process.env.PASSWORD_HASH_ENCODED || "";
const JWT_SECRET = process.env.JWT_SECRET || "";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 403 }
      );
    }

    // Decode the base64 encoded hash
    const passwordHash = Buffer.from(PASSWORD_HASH_ENCODED, 'base64').toString('utf8');
    console.log('Decoded hash:', passwordHash);
    console.log('Hash length:', passwordHash.length);
    
    const isValid = await bcrypt.compare(password, passwordHash);
    console.log('Password validation:', isValid);

    if (isValid) {
      const token = jwt.sign(
        { authenticated: true, timestamp: Date.now() },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const response = NextResponse.json({ success: true });
      
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,
        path: '/'
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth-token');
    
    if (!authToken?.value) {
      return NextResponse.json({ authenticated: false });
    }

    const decoded = jwt.verify(authToken.value, JWT_SECRET) as { authenticated: boolean };
    
    if (decoded.authenticated) {
      return NextResponse.json({ authenticated: true });
    }
    
    return NextResponse.json({ authenticated: false });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('auth-token');
  return response;
}