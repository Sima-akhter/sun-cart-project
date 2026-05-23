# Sun-Cart E-commerce

A modern full-stack e-commerce web application built with Next.js 16, React 19, Tailwind CSS v4, HeroUI, Better Auth, and MongoDB.

---

# Live Features

* User Authentication with Better Auth
* Google Login Support
* Responsive Navbar
* Dark / Light Theme Toggle
* Product Listing Page
* Product Details Page
* Popular Products Section
* Dynamic Routing
* MongoDB Database Integration
* Toast Notifications
* Clean Black & White UI Design
* Fully Responsive Design

---

# Tech Stack

## Frontend

* Next.js 16
* React 19
* Tailwind CSS v4
* HeroUI
* Lucide React Icons
* React Toastify
* Animate.css

## Backend & Database

* Better Auth
* MongoDB
* JSON Server

---

# Packages Used

```json
{
  "@better-auth/mongo-adapter": "^1.6.9",
  "@gravity-ui/icons": "^2.18.0",
  "@heroui/react": "^3.0.4",
  "@heroui/styles": "^3.0.4",
  "animate.css": "^4.1.1",
  "better-auth": "^1.6.9",
  "json-server": "^1.0.0-beta.15",
  "lucide-react": "^1.16.0",
  "mongodb": "^7.2.0",
  "next": "16.2.6",
  "next-themes": "^0.4.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "react-toastify": "^11.1.0"
}
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Sima-akhter/sun-cart-project.git
```

## 2. Move into the Project Folder

```bash
cd sun-cart
```

## 3. Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

# Run the Project

## Development Server

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

## Start Production Server

```bash
npm start
```

---

# Project Structure

```bash
sun-cart/
│
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── providers/
│   ├── services/
│   └── utils/
│
├── .env.local
├── package.json
└── README.md
```

---

# Authentication

This project uses Better Auth for authentication.

Supported Authentication Methods:

* Email & Password Login
* Google OAuth Login

---

# Main Pages

| Route            | Description       |
| ---------------- | ----------------- |
| `/`              | Home Page         |
| `/products`      | All Products      |
| `/products/[id]` | Product Details   |
| `/signin`        | Login Page        |
| `/signup`        | Registration Page |
| `/profile`       | User Profile      |

---

# UI Design

* Minimal Black & White Design
* Rounded Small Components
* Mobile Responsive Layout
* Modern Card Design
* Clean Typography

---

# Deployment

You can deploy this project easily using:

* Vercel
* Netlify
* Railway

---

# Useful Commands

## Run ESLint

```bash
npm run lint
```

## Install New Package

```bash
npm install package-name
```

---

# Future Improvements

* Add Shopping Cart
* Add Wishlist
* Add Payment Gateway
* Add Admin Dashboard
* Add Product Search
* Add Product Filtering
* Add Order Management

---

# Author

Developed by Sima Akter.

---

# License

This project is licensed under the MIT License.
