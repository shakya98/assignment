import { useRef, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ChallengeTwoComponent() {
  var array = Array();
  const [displayArray, setDisplayArray] = useState<any[]>();
  const [occuranceArray, setOccuranceArray] = useState<any[]>();
  const inputRef = useRef<any>(null);

  function handleClick() {
    inputRef.current !== null && array.push(parseInt(inputRef.current.value));
    inputRef.current.value = "";
  }

  function calculateOccurance() {
    setDisplayArray(array);
    const filtered = array.filter((v, i) => array.indexOf(v) !== i);
    const unique = new Set(filtered);
    const occuranceSet = Array.from(unique);
    setOccuranceArray(occuranceSet);
    array = [];
  }

  return (
    <Box id="fileMain" component={"div"}>
      <Box className="fileRight" id="file" component={"div"}>
        <Grid item xs={12} sm={12}>
          <input type="text" ref={inputRef} />
          <Button
            variant="contained"
            id="btn1"
            value="Add"
            onClick={handleClick}
          >
            Enter the number
          </Button>
        </Grid>{" "}
      </Box>
      <Box className="fileRight" id="file" component={"div"}>
        <Grid>
          <Button className="proceedBtn" id="btn2" variant="contained" onClick={calculateOccurance}>
            Proceed
          </Button>

          <Typography id="para" variant="h6" sx={{ mt: 3 }}>
            {" "}
            Numbers you have Entered : {displayArray?.join(", ")}
          </Typography>
          <Typography id="para" variant="h6" sx={{ mt: 3 }}>
            Numbers you have repeated : {occuranceArray?.join(", ")}
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}
