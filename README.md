# ToyamaZon Ecommerce App

A basic ecommerce web app that allows users (anonymous and logged in) to add/remove products from their shopping cart.

### Tech Used

- Next.js with TypeScript
- Next Auth
- Tailwind CSS
- DaisyUI
- Prisma
- MongoDB

## How To Get It Running

This app uses Google login/Next Auth/MongoDB so be sure to set up your `.env` file accordingly.

- Clone this repository
- Open repo with VSCode
- Type `npm install` in the console to install all dependencies

In your `.env` file:

```
DATABASE_URL="your_mongodb_database_link_here"
GOOGLE_CLIENT_ID="your_google_client_id_here"
GOOGLE_CLIENT_SECRET="your_google_client_secret_here"
NEXTAUTH_URL="your_nexturl_here"
NEXTAUTH_SECRET="your_nextauth_secret_here"
```
