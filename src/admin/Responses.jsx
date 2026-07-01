import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    CircularProgress,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";

import { readResponses } from "../functions";

export default function ResponsesList() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [open, setOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState("");
    const [selectedName, setSelectedName] = useState("");

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                setLoading(true);
                const data = await readResponses();
                setResponses(data || []);
            } catch (err) {
                setError(err.message || "Failed to load responses");
            } finally {
                setLoading(false);
            }
        };

        fetchResponses();
    }, []);

    const handleRowClick = (name, message) => {
        setSelectedName(name || "Unnamed Guest");
        setSelectedMessage(message || "No message provided.");
        setOpen(true);
    };

    const totalGuests = responses.reduce(
        (sum, r) => sum + (Number(r.guestNumber) || 0),
        0
    );

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 3 }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    p: 2,
                }}
            >
                <Card sx={{ width: "100%", maxWidth: 500, borderRadius: 2 }}>
                    <CardContent sx={{ p: 2 }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Responses
                        </Typography>

                        <Typography variant="body2" color="text.secondary" mb={3}>
                            View all submitted RSVP responses below.
                        </Typography>

                        {responses.length === 0 ? (
                            <Alert severity="info">No responses found.</Alert>
                        ) : (
                            <TableContainer>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Name</b></TableCell>
                                            <TableCell><b>Attendance</b></TableCell>
                                            <TableCell><b>Guests</b></TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {responses.map((r) => (
                                            <TableRow
                                                key={r.id}
                                                hover
                                                onClick={() =>
                                                    handleRowClick(r.name, r.message)
                                                }
                                                sx={{
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        backgroundColor: "#f5f5f5",
                                                    },
                                                }}
                                            >
                                                <TableCell>
                                                    <Box>
                                                        <Typography
                                                            noWrap
                                                            sx={{
                                                                maxWidth: 100,
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                            }}
                                                        >
                                                            {r.name || "Unnamed Guest"}
                                                        </Typography>

                                                        {/* 👇 indicator */}
                                                        <Typography
                                                            variant="caption"
                                                            color="text.secondary"
                                                        >
                                                            Click to view message
                                                        </Typography>
                                                    </Box>
                                                </TableCell>

                                                <TableCell>
                                                    <Chip
                                                        label={
                                                            r.willAttend
                                                                ? "Attending"
                                                                : "Not Attending"
                                                        }
                                                        color={
                                                            r.willAttend ? "success" : "error"
                                                        }
                                                        size="small"
                                                    />
                                                </TableCell>

                                                <TableCell>
                                                    {r.guestNumber || 0}
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                        {/* TOTAL ROW */}
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <b>Total Guests</b>
                                            </TableCell>
                                            <TableCell>
                                                <b>{totalGuests}</b>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </CardContent>
                </Card>
            </Box>

            {/* MESSAGE MODAL */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>
    <Typography
        noWrap
        sx={{
            maxWidth: 300,
            overflow: "hidden",
            textOverflow: "ellipsis",
        }}
    >
        Message from {selectedName}
    </Typography>
</DialogTitle>

                <DialogContent>
                    <Typography sx={{ mt: 1 }}>
                        {selectedMessage}
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}