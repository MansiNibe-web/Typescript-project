// import React, { useState } from "react";
// import {Button, Typography,Box, TextField, FormControlLabel, Checkbox, } from '@mui/material'

// const Contactform:React.FC=()=>{

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//         termsAccepted: false,
//       });
    
//       const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, checked, type } = e.target;
//         setFormData((prevState) => ({
//           ...prevState,
//           [name]: type === "checkbox" ? checked : value,
//         }));
//       };
    
//       const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//         // You can now handle the form submission, such as sending data to an API
//       };
    
//       return (
//         <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
//           <Typography variant="h5" gutterBottom>
//             Contact Us
//           </Typography>
    
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               sx={{ marginBottom: 2 }}
//             />
    
//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               sx={{ marginBottom: 2 }}
//             />
    
//             <TextField
//               label="Your Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               sx={{ marginBottom: 2 }}
//             />
    
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                   name="termsAccepted"
//                 />
//               }
//               label="I accept the terms and conditions"
//               sx={{ marginBottom: 2 }}
//             />
    
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//               sx={{
//                 padding: "10px 0",
//                 backgroundColor: "#2980B9",
//                 '&:hover': {
//                   backgroundColor: "#3498DB",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//     );
// }

// export default Contactform;