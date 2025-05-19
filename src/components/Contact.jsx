import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  const theme = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "shulajz@gmail.com",
      link: "mailto:shulajz@gmail.com",
      color: theme.palette.primary.main,
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      value: "054-681-0495",
      link: "tel:+9720546810495",
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOnIcon />,
      title: "Location",
      value: "Israel",
      link: null,
      color: "#8B5CF6",
    },
    {
      icon: <LinkedInIcon />,
      title: "LinkedIn",
      value: "Shulamit Ajzner",
      link: "https://www.linkedin.com/in/shulamit-ajzner-920970186/",
      color: "#3B82F6",
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 10,
        position: "relative",
        background: "linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "40%",
          height: "70%",
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.07) 0%, transparent 70%)",
          zIndex: 0,
          borderRadius: "50%",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              position: "relative",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                borderRadius: "2px",
              },
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 10px 30px rgba(31, 41, 55, 0.08)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "6px",
                    background:
                      "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    position: "relative",
                    display: "inline-block",
                    zIndex: 1,
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  Feel free to reach out to me! I'm open to new opportunities
                  and collaborations. Let's connect and discuss how we can work
                  together.
                </Typography>

                <Stack spacing={3.5}>
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box
                          sx={{
                            width: 45,
                            height: 45,
                            borderRadius: "12px",
                            backgroundColor: `${item.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                            mr: 2.5,
                            boxShadow: `0 6px 16px ${item.color}15`,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: "text.primary",
                              mb: 0.5,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            {item.link ? (
                              <a
                                href={item.link}
                                target={
                                  item.title === "LinkedIn"
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.title === "LinkedIn"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                style={{
                                  color: item.color,
                                  textDecoration: "none",
                                  transition: "all 0.3s ease",
                                  fontWeight: 500,
                                  display: "inline-flex",
                                  alignItems: "center",
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.color = `${item.color}CC`;
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.color = item.color;
                                }}
                              >
                                {item.value}
                                <ArrowForwardIcon
                                  sx={{
                                    fontSize: 14,
                                    ml: 0.5,
                                    transition: "transform 0.2s ease",
                                    ".MuiTypography-root:hover &": {
                                      transform: "translateX(3px)",
                                    },
                                  }}
                                />
                              </a>
                            ) : (
                              item.value
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
