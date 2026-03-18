import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MessageMange() {
  const [messages, setMessages] = useState([]);
  console.log("messages", messages);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("messages"));
    setMessages(stored);
  }, []);

  const handleApproveMessages = (id) => {
    console.log("id", id);
    const updated = messages.map((msg) =>
      msg.id === id ? { ...msg, state: "approved" } : msg
    );
    console.log("updated", updated);
    setMessages(updated);
    localStorage.setItem("messages", JSON.stringify(updated));
    toast.success("Messages Approved, it will appear on home page");
  };

  const handleRejectMessages = (id) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("messages", JSON.stringify(updated));
    toast.success("Messages Rejected, it will be deleted");
  };
  return (
    <>
      <Container sx={{ p: 3, my: 2 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          manage users messsages
        </Typography>
        <Box>
          {messages ? (
            messages.map((msg) => {
              return (
                <Card
                  key={msg.id}
                  sx={{ width: "80%", bgcolor: "WhiteSmoke", p: 3, my: 3 }}
                >
                  <Typography variant="h3">{msg.message}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">name: {msg.name}</Typography>
                    <Typography variant="h6">email: {msg.email}</Typography>
                  </Box>
                  <CardActions sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleRejectMessages(msg.id)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleApproveMessages(msg.id)}
                    >
                      Approve
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          ) : (
            <Typography>No messages</Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default MessageMange;
