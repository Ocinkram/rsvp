import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { createUser } from "../functions";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Name is required.",
      });
      return;
    }

    try {
      setLoading(true);

      await createUser({ name });

      setSnackbar({
        open: true,
        severity: "success",
        message: "User created successfully!",
      });

      setName("");
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to create user.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 500, borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Add User
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={3}
            >
              Enter the user's information below.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label="Name"
                placeholder="Enter user's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  disabled={loading}
                  onClick={() => setName("")}
                >
                  Clear
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  startIcon={
                    loading ? <CircularProgress size={18} color="inherit" /> : null
                  }
                >
                  {loading ? "Creating..." : "Create User"}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}