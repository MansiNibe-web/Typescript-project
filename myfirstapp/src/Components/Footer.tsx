import { Typography, Box } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box sx={{
      textAlign: "center",
      py: 4,
      bgcolor: "#f5f5f5",
      position: "fixed",
      bottom: 0,
      width: "100%",
      mt: 3, // Ensures footer has margin above it
    }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Olive P99Soft - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
