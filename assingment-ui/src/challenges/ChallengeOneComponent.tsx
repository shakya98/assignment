import { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import EmployeeTable from "./EmployeeTable";

export default function ChallengeOneComponent() {
  const [selectedFile, setSelectedFile] = useState<string>();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    selectedFile && formData.append("file", selectedFile);

    axios
      .post("http://127.0.0.1:8000/api/upload-csv", formData)
      .then((response) => {
        alert(response.data);
      })

      .catch((err) => {
        if (err.toJSON().message === "Network Error") {
          alert(`Sorry, Couldn't connect challenge 1.`);
        } else {
          console.log(err);
        }
      });
  };
  return (
    <Box id="fileMain" component={"div"}>
      <Box className="fileLeft" id="file" component={"div"}>
        <Grid item xs={12} sm={6}>
          <Typography
            id="para"
            variant="h6"
            sx={{
              pt: "20px",
              fontWeight: "bold",
            }}
          >
            Upload Data file
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="csvFile"
            type="file"
            onChange={changeHandler}
            inputProps={{ accept: ".csv" }}
            sx={{ pt: 1, pb: 2, width: "400px" }}
          />
        </Grid>
        <Button
          id="btn2"
          className="proceedBtn"
          variant="contained"
          onClick={handleSubmit}
          disabled={selectedFile === undefined}
        >
          Submit
        </Button>
      </Box>
      <Box className="fileRight" id="file" component={"div"}>
        <EmployeeTable />
      </Box>
    </Box>
  );
}
