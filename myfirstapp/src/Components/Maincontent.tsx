import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

const Maincontent: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 3,
        display: "flex",
        flexDirection: "column", // Stack items vertically
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        minHeight: "calc(100vh - 120px)", // Ensures content is centered between header and footer
        backgroundColor: "#f4f7fa", // Light background color for the section
      }}
    >
      {/* Main Content Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#2c3e50", // Darker color for the heading
          fontWeight: 700,
        }}
      >
        Welcome to Olive P99Soft
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{
          textAlign: "center",
          color: "#7f8c8d", // Lighter text color for the description
          fontSize: "1rem",
          maxWidth: "800px",
        }}
      >
        This is the main content of the Olive P99Soft application. Here you can add various sections such as about, services, or any other content related to the application. This content will scroll as needed, with the header always at the top and the footer at the bottom.
      </Typography>

      {/* Button to show alert */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("You clicked on the 'Learn More' button!")}
        sx={{
          marginBottom: 3,
          backgroundColor: "#2980B9", // Professional blue color
          color: "#fff", // White text for the button
          padding: "10px 20px",
          '&:hover': {
            backgroundColor: "#3498DB", // Slightly lighter blue on hover
            transform: "scale(1.05)", // Button hover effect (slightly enlarge)
          },
          borderRadius: 4,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Learn More
      </Button>

      {/* Main grid layout - Cards in a single row */}
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center", // Center items horizontally
          width: "100%", // Full-width grid
        }}
      >
        {/* First grid item */}
        <Grid
          item
          xs={12} sm={4} md={4} lg={4} // Adjust grid breakpoints for responsiveness
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              padding: 3,
              textAlign: "center",
              borderRadius: 4,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for each card
              '&:hover': {
                transform: "translateY(-10px)", // Card hover effect (lift up)
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#34495E", fontWeight: 600 }}
            >
              Feature 1
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#7F8C8D",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Description of feature 1. This can be anything related to the functionality of your app.
            </Typography>
          </Paper>
        </Grid>

        {/* Second grid item */}
        <Grid
          item
          xs={12} sm={4} md={4} lg={4} // Adjust grid breakpoints for responsiveness
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              padding: 3,
              textAlign: "center",
              borderRadius: 4,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff",
              '&:hover': {
                transform: "translateY(-10px)",
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#34495E", fontWeight: 600 }}
            >
              Feature 2
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#7F8C8D",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Description of feature 2. This could be a highlight of a specific functionality in the app.
            </Typography>
          </Paper>
        </Grid>

        {/* Third grid item */}
        <Grid
          item
          xs={12} sm={4} md={4} lg={4} // Adjust grid breakpoints for responsiveness
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              padding: 3,
              textAlign: "center",
              borderRadius: 4,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff",
              '&:hover': {
                transform: "translateY(-10px)",
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#34495E", fontWeight: 600 }}
            >
              Feature 3
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#7F8C8D",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Description of feature 3. Another important aspect of your app can be described here.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Maincontent;
