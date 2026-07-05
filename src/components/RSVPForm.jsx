import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Box,
    Stack,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Alert,
    Paper,
    FormHelperText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    createResponse,
    createUserLog,
    readResponse,
    readUser,
    updateResponse
} from '../functions';
import { sectionTitleSx } from './ui/headingStyles';
import { useParams } from 'react-router-dom';

export const RSVPForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasPreviousData, setHasPreviousData] = useState(false);
    const [invited, setInvited] = useState(false);

    const { id } = useParams();
    const userId = id;

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { errors },
    } = useForm();

    const getUser = async () => {
        const res = await readUser({ userId });
        if (res) setInvited(true);
    };

    const postUserLog = () => {
        createUserLog({ userId });
    };

    useEffect(() => {
        if (!userId) return;
        getUser();
        postUserLog();
    }, [userId]);

    const onSubmit = async (data) => {
        const payload = {
            userId,
            name: data.name,
            willAttend: data.willAttend,
            guestNumber: Number(data.guestNumber),
            message: data.message,
        };

        const res = hasPreviousData
            ? await updateResponse(payload)
            : await createResponse(payload);

        if (res) {
            setHasPreviousData(true);
            setIsSubmitted(true);
        }
    };

    const fetchResponse = async () => {
        const user = await readResponse({ userId });
        if (!user) return;

        reset({
            name: user.name,
            willAttend: user.willAttend,
            guestNumber: user.guestNumber,
            message: user.message,
        });

        setHasPreviousData(true);
        setIsSubmitted(true);
    };

    useEffect(() => {
        fetchResponse();
    }, []);

    if (!invited) return null;

    if (isSubmitted) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Paper sx={{ p: 4, maxWidth: 480, width: "100%", textAlign: "center" }}>
                    <Stack spacing={3} alignItems="center">
                        <CheckCircleIcon sx={{ fontSize: 64, color: "primary.main" }} />

                        <Typography sx={sectionTitleSx}>Thank You!</Typography>

                        <Typography color="text.secondary">
                            Your RSVP has been received.
                        </Typography>

                        <Alert severity="success" sx={{ width: "100%" }}>
                            RSVP submitted successfully.
                        </Alert>

                        <Button fullWidth variant="outlined" onClick={() => setIsSubmitted(false)}>
                            Edit RSVP
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
            <Paper sx={{ width: "100%", maxWidth: 600, p: 4 }}>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4}>

                        {/* Name */}
                        <Stack spacing={1}>
                            <Typography variant="caption">Full Name *</Typography>
                            <TextField
                                fullWidth
                                {...register("name", { required: "Name is required" })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Stack>

                        {/* Attendance */}
                        <Stack spacing={1}>
                            <Typography variant="caption">
                                Will you be attending? *
                            </Typography>

                            <Controller
                                name="willAttend"
                                control={control}
                                rules={{
                                    validate: (value) =>
                                        value !== undefined || "Please select an option",
                                }}
                                render={({ field }) => (
                                    <>
                                        <RadioGroup
                                            value={
                                                field.value === undefined
                                                    ? ""
                                                    : String(field.value)
                                            }
                                            onChange={(e) =>
                                                field.onChange(e.target.value === "true")
                                            }
                                            sx={{
                                                flexDirection: { xs: "column", sm: "row" },
                                                gap: 2,
                                            }}
                                        >
                                            <FormControlLabel
                                                value="true"
                                                control={<Radio />}
                                                label="Yes / I will attend"
                                            />
                                            <FormControlLabel
                                                value="false"
                                                control={<Radio />}
                                                label="No / I will not attend"
                                            />
                                        </RadioGroup>

                                        {/* 👇 helper when nothing selected */}
                                        {errors.willAttend && (
                                            <FormHelperText error>
                                                {errors.willAttend.message}
                                            </FormHelperText>
                                        )}
                                    </>
                                )}
                            />
                        </Stack>

                        {/* Guests */}
                        <Stack spacing={1}>
                            <Typography variant="caption">Number of Attendees *</Typography>
                            <TextField
                                fullWidth
                                inputProps={{ inputMode: "numeric", maxLength: 1 }}
                                {...register("guestNumber", {
                                    required: "Number is required",
                                    validate: (v) =>
                                        /^[1-9]$/.test(v) || "Must be 1–9",
                                })}
                                error={!!errors.guestNumber}
                                helperText={errors.guestNumber?.message}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[1-9]?$/.test(value)) {
                                        setValue("guestNumber", value, {
                                            shouldValidate: true,
                                        });
                                    }
                                }}
                            />
                        </Stack>

                        {/* Message */}
                        <Stack spacing={1}>
                            <Typography variant="caption">Message for the Couple</Typography>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                placeholder="Share your well wishes..."
                                {...register("message")}
                            />
                        </Stack>

                        {/* Submit */}
                        <Button type="submit" variant="contained" size="large" fullWidth>
                            Submit RSVP
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
};