import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactUs() {
  const [messages, setMessages] = useState([]); //all messages
  const [messageData, setMessageData] = useState([]); //the current message

  const handleSubmitMessage = () => {
    if (!messageData.name || !messageData.email || !messageData.message) {
      toast.error("Please fill all fields!");
      return;
    }
    const newMessage = {
      id: messages.length + 1,
      ...messageData,
      state: "pending",
    };
    const updated = [...messages, newMessage];
    setMessages(updated);

    localStorage.setItem("messages", JSON.stringify(updated));
    setMessageData({
      //reset form
      name: "",
      email: "",
      message: "",
    });
    toast.success("Your message is reviewd by manager, it takes time. enjoy!");
  };
  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{ alignContent: "center", textAlign: "center", py: 10 }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h1">Contact Us</Typography>
          <Typography variant="body2">
            We all happy to share your thought with us!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, py: 4 }}>
            <TextField
              type="string"
              label="Name"
              value={messageData.name}
              onChange={(e) =>
                setMessageData({ ...messageData, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              type="email"
              value={messageData.email}
              onChange={(e) =>
                setMessageData({ ...messageData, email: e.target.value })
              }
            />
            <TextField
              label="Message"
              type="string"
              value={messageData.message}
              onChange={(e) =>
                setMessageData({ ...messageData, message: e.target.value })
              }
            />
            <Button
              variant="contained"
              sx={{ p: 2 }}
              onClick={handleSubmitMessage}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default ContactUs;
