import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Typography,
  IconButton,
} from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";
import RefreshIcon from "@mui/icons-material/Refresh";
import { readUsers } from "../functions";


export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const response = await readUsers();

      setUsers(response.data || []);
    } catch (err) {
      console.error("Failed to load users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCopyLink = async (id) => {
    const link = `${window.location.origin}/${id}`;

    try {
      await navigator.clipboard.writeText(link);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 650, mx: "auto", mt: 5, borderRadius: 3 }}>
        <CardContent>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h5" fontWeight={600}>
              Users
            </Typography>

            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={loadUsers}
            >
              Refresh
            </Button>
          </Box>

          {/* Content */}
          {loading ? (
            <Box display="flex" justifyContent="center" py={6}>
              <CircularProgress />
            </Box>
          ) : users.length === 0 ? (
            <Typography color="text.secondary">
              No users found.
            </Typography>
          ) : (
            <List>
              {users.map((user) => (
                <ListItem
                  key={user.id}
                  divider
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => handleCopyLink(user.id)}
                    >
                      <LinkIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={user.name} />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Link copied to clipboard"
        onClose={() => setOpen(false)}
      />
    </>
  );
}