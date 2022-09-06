import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Slider from "@mui/material/Slider";
// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  // const [value, setValue] = useState(30);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              belajar material ui modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        {/* <Box sx={{ width: 200 }}>
          <Stack
            spacing={2}
            direction="column"
            sx={{ mb: 1 }}
            alignItems="flex-end"
          >
            <VolumeDown />
            <Slider
              orientation="vertical"
              aria-label="Volume"
              value={value}
              onChange={handleChange}
            />
            <VolumeUp />
          </Stack>
          <Slider defaultValue={30} aria-label="Disabled slider" />
        </Box> */}
        {/* <Button variant="contained">Hello World</Button>
        <Button variant="outlined">Hello World</Button>
        <Button variant="text">Hello World</Button> */}
        <Counter initialCount={0} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
