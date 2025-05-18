# Shulamit Ajzner - Portfolio Website

A modern, responsive portfolio website built with React and Material UI.

![Portfolio Screenshot](public/screenshot.png)

## Features

- 📱 Fully responsive design that works on all devices
- 🎨 Modern UI with Material UI components
- ✨ Smooth animations and transitions using Framer Motion
- 🔗 Smooth scrolling navigation
- 📝 Contact form
- 📊 Skills and experience showcase
- 📂 Project portfolio section
- 🚀 Easy deployment to GitHub Pages

## Technologies Used

- React
- Material UI
- Framer Motion
- React Scroll
- React Icons
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shulajz/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### 1. Personal Information

Edit your personal information in each component:

- Update your name, title, and description in `Hero.js`
- Update your bio in `About.js`
- Update your skills in `Skills.js`
- Update your experience in `Experience.js`
- Update your project list in `Projects.js`
- Update your contact information in `Contact.js`

### 2. Styling

The main theme is defined in `App.js`. You can modify the colors, typography, and more:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: "#4361ee", // Change this to your preferred primary color
      dark: "#3a56d4",
    },
    secondary: {
      main: "#2ec4b6", // Change this to your preferred secondary color
    },
    // ... more styling options
  },
  // ... more theme options
});
```

### 3. Images

Replace the placeholder images with your own:

1. Add your profile images to the `public` folder
2. Update the image paths in the components

## Deployment

This project can be easily deployed to GitHub Pages. Follow the instructions in [Deployment Guide](DEPLOYMENT.md).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [Material UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Scroll](https://github.com/fisshy/react-scroll)
- [React Icons](https://react-icons.github.io/react-icons/)
