# CMSC 100 Exercise 09: React JS Part 2 - State Management

**Full Name:** Gewell Piñano  
**Section:** CMSC 100 - D1L

## Code Description

Lazado is a sample e-commerce storefront built with React JS. Users can browse products, filter the catalog by category, search for products, add products to a shopping cart, view the number of items and subtotal, and remove individual cart entries.

This is a class demonstration project. Checkout and payments are not enabled.

## Features

- Customized Lazado homepage and header
- Flexbox layout for the header and main store body
- Reusable navigation button component
- Four product categories: Fashion, Electronics, Home, and School Supplies
- Product cards with product images, descriptions, and prices
- Search and category filtering
- Add to Cart functionality
- Shopping cart with an automatically updated item count and subtotal
- Delete button for individual cart entries
- Responsive styling

## Technologies Used

- React JS
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

The React application is inside the `CMSC100_Pinano09/` folder.

- `src/App.jsx` - Main application, product data, shared state, filtering, and cart event handlers
- `src/components/NavButton.jsx` - Reusable category button
- `src/components/Navbar.jsx` - Displays the product category navigation
- `src/components/ProductCard.jsx` - Displays one product and its Add to Cart button
- `src/components/ProductSection.jsx` - Displays the product cards
- `src/components/Cart.jsx` - Displays cart items, subtotal, and remove buttons
- `src/index.css` - Website styling and flexbox layout
- `src/main.jsx` - React application entry point
- `vite.config.js` - Vite and GitHub Pages configuration

## How to Run Locally

1. Open a terminal inside the `CMSC100_Pinano09` folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## How to Create a Production Build

Run these commands inside `CMSC100_Pinano09`:

```bash
npm run build
npm run preview
```

Vite creates the production files in the `dist/` folder.

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. It installs the dependencies from `CMSC100_Pinano09/`, builds the Vite app, and deploys the `dist/` folder to GitHub Pages whenever changes are pushed to the `main` branch.

In the GitHub repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. Then open the **Actions** tab and check that the **Deploy Lazado to GitHub Pages** workflow completes successfully.

The expected site address is:

`https://gpinano.github.io/CMSC100_Pinano09/`

## Submission Notes

- Keep `package.json` and `package-lock.json` in the repository.
- Do not commit the `node_modules/` or `dist/` folders.
- The `.gitignore` file excludes these generated folders.
- Add the laboratory instructor as a repository collaborator if required by the course instructions.
