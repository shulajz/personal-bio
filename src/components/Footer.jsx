import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  Grid,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        backgroundColor: "#161A30",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "30%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background:
                    "linear-gradient(90deg, #6366F1 0%, #EC4899 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Shulamit Ajzner
              </Typography>
              <Typography
                variant="body2"
                color="rgba(255, 255, 255, 0.7)"
                sx={{ mb: 2, maxWidth: "300px" }}
              >
                Full-Stack Developer passionate about creating clean, efficient
                code and building user-friendly web applications.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Home", "About", "Projects", "Experience", "Contact"].map(
                  (item, index) => (
                    <Link
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#6366F1",
                          transform: "translateX(5px)",
                        },
                        display: "inline-block",
                      }}
                    >
                      {item}
                    </Link>
                  )
                )}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                Connect With Me
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/shulamit-ajzner-920970186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="medium"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(99, 102, 241, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#6366F1",
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:shulajz@gmail.com"
                  size="medium"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(236, 72, 153, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#EC4899",
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 20px rgba(236, 72, 153, 0.4)",
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="medium"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(14, 165, 233, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#0EA5E9",
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 20px rgba(14, 165, 233, 0.4)",
                    },
                  }}
                >
                  <CodeIcon />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 3 }} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.6)"
            align="center"
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            &copy; {new Date().getFullYear()} Shulamit Ajzner. All rights
            reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
