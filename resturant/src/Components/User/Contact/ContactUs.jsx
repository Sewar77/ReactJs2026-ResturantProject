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
  const [messages, setMessages] = useState([]);
  const [messageData, setMessageData] = useState([]);

  const handleSubmitMessage = () => {
    if (!messageData.name || !messageData.email || !messageData.message) {
      toast.error("Please fill all fields!");
      return;
    }
    setMessageData({
      id: messages.length + 1,
      name: "",
      email: "",
      message: "",
    });
    setMessages([...messages, messageData]);
    const pastMessages = localStorage.getItem("messages");
    if (!pastMessages) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
    localStorage.setItem(
      "messages",
      JSON.stringify([...messages, messageData])
    );
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
