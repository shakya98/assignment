import { Box, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import ChallengeOneComponent from "../challenges/ChallengeOneComponent";
import ChallengeTwoComponent from "../challenges/ChallengeTwoComponent";
import ChallengeFourComponent from "../challenges/ChallengeFourComponent";

export default function Main() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          px: "20px",
          pb: 4,
          pt: 2.5,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Back-End Coding Challenges
        </Typography>
      </Box>
      <Box sx={{ px: "20px", pb: 4, pt: 2.5 }}>
        <ChallengeOneComponent />
      </Box>
    </>
  );
}
