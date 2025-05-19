import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366F1", // Indigo
      dark: "#4F46E5",
      light: "#A5B4FC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#EC4899", // Pink
      dark: "#DB2777",
      light: "#F9A8D4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#F9FAFB",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
    },
    error: {
      main: "#EF4444",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#3B82F6",
    },
    success: {
      main: "#10B981",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Segoe UI', 'Arial', sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(31, 41, 55, 0.06), 0px 1px 3px rgba(31, 41, 55, 0.1)",
    "0px 3px 5px rgba(31, 41, 55, 0.07), 0px 1px 18px rgba(31, 41, 55, 0.06)",
    "0px 4px 6px -1px rgba(31, 41, 55, 0.1), 0px 2px 4px -1px rgba(31, 41, 55, 0.06)",
    "0px 10px 15px -3px rgba(31, 41, 55, 0.1), 0px 4px 6px -2px rgba(31, 41, 55, 0.05)",
    "0px 20px 25px -5px rgba(31, 41, 55, 0.1), 0px 10px 10px -5px rgba(31, 41, 55, 0.04)",
    "0px 25px 50px -12px rgba(31, 41, 55, 0.25)",
    ...Array(18).fill("none"),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 600,
          boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 4px 12px rgba(31, 41, 55, 0.12)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(99, 102, 241, 0.2)",
          },
        },
        containedSecondary: {
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(236, 72, 153, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 12px rgba(31, 41, 55, 0.06)",
          transition: "all 0.3s ease",
          overflow: "hidden",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.08)",
            // Disabled the transform scale effect
          },
        },
        outlined: {
          borderColor: "rgba(99, 102, 241, 0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          transition: "color 0.2s ease",
          "&:hover": {
            color: "#4F46E5",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
