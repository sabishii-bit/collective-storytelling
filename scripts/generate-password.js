const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Get password from command line argument or use default
const password = process.argv[2] || 'admin123';
const saltRounds = 10;

// Generate hash with quotes to prevent shell interpretation issues
const hash = bcrypt.hashSync(password, saltRounds);

// Path to .env.local file
const envPath = path.join(__dirname, '..', '.env');

// Base64 encode the hash to avoid special character issues
const encodedHash = Buffer.from(hash).toString('base64');

// Create clean .env content with base64 encoded hash
const envContent = `# Authentication
PASSWORD_HASH_ENCODED=${encodedHash}
JWT_SECRET=9fgysf0FSF98SEF680R783QW807RBD
PASSWORD=${password}
`;

// Write to file
fs.writeFileSync(envPath, envContent);

console.log(`✅ Password and hash updated in .env`);
console.log(`📝 Password: ${password}`);
console.log(`🔒 Hash: ${hash}`);
console.log(`📁 File: ${envPath}`);