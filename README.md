# FoodHub - React E-Commerce Application

A modern e-commerce application built with React, Vite, and Redux Toolkit. This project features a product catalog, shopping cart, blogs, and user forms, styled with **Tailwind CSS**.

## Features

- **Product Catalog**: Browse and view detailed information about products.
- **Shopping Cart**: Add products to cart, manage quantities, and proceed to checkout.
- **Blogs Section**: Read and explore blog posts.
- **User Forms**: Contact or registration forms using React Hook Form.
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS.
- **State Management**: Redux Toolkit for cart and application state.
- **Routing**: Client-side routing with React Router DOM.
- **Notifications**: Toast notifications for user feedback.
- **Icons**: Lucide React and React Icons for UI elements.

## Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **State Management**: Redux Toolkit 2.9.0
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.8.2
- **Forms**: React Hook Form 7.62.0
- **Icons**: Lucide React 0.552.0, React Icons 5.5.0
- **Notifications**: React Toastify 11.0.5
- **Linting**: ESLint 9.33.0
- **TypeScript Types**: @types/react, @types/react-dom

## Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
├── App.jsx                 # Main application component with routing
├── main.jsx                # Application entry point
├── store.js                # Redux store configuration
├── cartslice.js            # Redux slice for cart management
├── counterModel.js         # Additional model (possibly unused)
├── CartModel.js            # Cart model
├── tailwind.config.js      # Tailwind CSS configuration
├── index.css               # Global styles
├── main.css                # Additional styles
├── App.css                 # App-specific styles
├── components/
│   ├── Nav.jsx             # Navigation bar
│   ├── Footer.jsx          # Footer component
│   ├── Hero.jsx            # Hero section
│   ├── Card.jsx            # Product card component
│   ├── Cards.jsx           # Cards container
│   ├── Button.jsx          # Reusable button component
│   ├── Form.jsx            # User form component
│   └── ...
├── pages/
│   ├── Home.jsx            # Home page (Hero, Blogs, Cards, About)
│   ├── Product.jsx         # Products listing page
│   ├── ProductDetails.jsx  # Individual product details
│   ├── CartPage.jsx        # Shopping cart page
│   ├── Blogs.jsx           # Blogs listing page
│   ├── Blog.jsx            # Individual blog post
│   ├── About.jsx           # About page
│   └── NotFound.jsx        # 404 page
└── ...
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd final-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Usage

- Navigate through the app using the navigation bar.
- Browse products on the Products page.
- Click on a product to view details.
- Add products to the cart from the Product Details page.
- View and manage cart items on the Cart page.
- Explore blogs and read posts.
- Use the form on the home page for user interactions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

