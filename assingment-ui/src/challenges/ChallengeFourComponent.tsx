import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";

export default function ChallengeFourComponent() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/get-data");
        setData(res.data);
      } catch (err) {
        alert(`Sorry, Couldn't connect challenge 4.`);
      }
    };
    LoadData();
  }, []);

  return (
    <Box component={"div"}>
      {data &&
        data.map((item, index) => (
          <Stack direction="row" key={index}>
            <Typography id="arrayData">{JSON.stringify(item)}</Typography>
          </Stack>
        ))}
    </Box>
  );
}
