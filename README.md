This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requirements

To work with this project, ensure the following software is installed:

1. Node.js: Version 16 or higher (Download Node.js).
2. npm: Comes bundled with Node.js.
3. (Optional) Git: For cloning the repository (Download Git).
4. (Optional) VS Code: Recommended IDE (Download VS Code).

## Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/username/repository.git

# Navigate into the project folder
cd repository

# Install dependencies
npm install
```

## Building the Project

```bash
npm run build
```

Static files will be generated in the `out` directory for deployment.

## Hosting on GoDaddy

1. Log in to your GoDaddy account.
2. Navigate to My Products > Web Hosting and open your hosting control panel.
3. Use the File Manager or an FTP client (like FileZilla) to upload the contents of the `out` directory to the `public_html` directory on your hosting server.
4. In the DNS Management section of your GoDaddy account, ensure the A record for your domain points to your hosting server's IP address.
5. Once uploaded, your website should be live and accessible through your domain.