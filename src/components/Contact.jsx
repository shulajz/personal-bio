import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "shulajz@gmail.com",
      link: "mailto:shulajz@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      value: "054-681-0495",
      link: "tel:+9720546810495",
    },
    {
      icon: <LocationOnIcon />,
      title: "Location",
      value: "Israel",
      link: null,
    },
    {
      icon: <LinkedInIcon />,
      title: "LinkedIn",
      value: "Shulamit Ajzner",
      link: "https://www.linkedin.com/in/shulamit-ajzner-920970186/",
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            position: "relative",
            fontWeight: "bold",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "primary.main",
            },
          }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Feel free to reach out to me! I'm open to new opportunities
                  and collaborations.
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: "rgba(67, 97, 238, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.main",
                          mr: 2,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {item.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.link ? (
                            <a
                              href={item.link}
                              target={
                                item.title === "LinkedIn" ? "_blank" : undefined
                              }
                              rel={
                                item.title === "LinkedIn"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                              }}
                              onMouseOver={(e) => {
                                e.target.style.color = "#4361ee";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.color = "inherit";
                              }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
