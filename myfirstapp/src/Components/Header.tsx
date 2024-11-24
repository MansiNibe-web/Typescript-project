import { AppBar, Typography, Toolbar, Container, Button } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  const showAlert = () => {
    alert("You are in the P99Soft page!");
  };

  return (
    <>
      <Container sx={{ paddingLeft: "80px", paddingRight: "500%" }}
      > {/* Increased padding here */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#2C3E50", 
            padding: "30px 0",  // Keep top and bottom padding as is
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Slight shadow
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#ECF0F1", 
                fontWeight: 700,
                fontSize: "1.5rem",
                textAlign: "Center",
                flexGrow: "1",
              }}
            >
              Welcome to Olive P99Soft!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#3498DB", // Blue background for button
                color: "#fff", // White text color
                '&:hover': {
                  backgroundColor: "#2980B9", // Darker blue on hover
                },
                padding: "8px 16px",
                borderRadius: "5px",
              }}
              onClick={showAlert}
            >
              More Info
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
