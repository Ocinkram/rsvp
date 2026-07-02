import { useEffect, useState, useMemo } from "react";
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
  TextField,
  MenuItem,
} from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";
import RefreshIcon from "@mui/icons-material/Refresh";
import { readUsers } from "../functions";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

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
    const link = `https://wedding-invitation-kim-and-marie.vercel.app/guest/${id}`;

    try {
      await navigator.clipboard.writeText(link);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const filteredAndSortedUsers = useMemo(() => {
    const q = search.toLowerCase().trim();

    let result = [...users];

    if (q) {
      result = result.filter((user) =>
        (user.name || "").toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "name_asc":
        result.sort((a, b) =>
          (a.name || "").localeCompare(b.name || "")
        );
        break;

      case "name_desc":
        result.sort((a, b) =>
          (b.name || "").localeCompare(a.name || "")
        );
        break;

      case "createdAt":
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
        break;
    }

    return result;
  }, [users, search, sortBy]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            borderRadius: 2,
            maxHeight: "calc(100vh - 32px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
            }}
          >
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Guests
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Manage and copy invitation links for guests.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                onClick={loadUsers}
              >
                Refresh
              </Button>
            </Box>

            {/* Search + Sort */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <TextField
                select
                size="small"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{ minWidth: 180 }}
              >
                <MenuItem value="createdAt">Newest First</MenuItem>
                <MenuItem value="name_asc">Name (A → Z)</MenuItem>
                <MenuItem value="name_desc">Name (Z → A)</MenuItem>
              </TextField>
            </Box>

            {/* Content */}
            {loading ? (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : filteredAndSortedUsers.length === 0 ? (
              <Typography color="text.secondary">
                No users found.
              </Typography>
            ) : (
              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  minHeight: 0,
                }}
              >
                <List disablePadding>
                  {filteredAndSortedUsers.map((user) => (
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
                      <ListItemText
                        primary={
                          <Typography fontWeight={500}>
                            {user.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Link copied to clipboard"
        onClose={() => setOpen(false)}
      />
    </>
  );
}