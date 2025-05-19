import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: "#1a1a2e",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 0 },
            }}
          >
            Shulamit Ajzner
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/shulamit-ajzner-920970186/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:shulajz@gmail.com"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        <Typography
          variant="body2"
          color="rgba(255, 255, 255, 0.6)"
          align="center"
        >
          &copy; {new Date().getFullYear()} Shulamit Ajzner. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
