import { Box, IconButton, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useRef, useState } from "react";
import music1 from '../assets/music/music1.mp3'

export const MusicWidget = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked:", err);
            }
        }
    };

    // return null

    return (
        <>
            {/* Hidden audio */}
            <audio ref={audioRef} src={music1} loop />

            {/* Floating Music Button */}
            <Box
                onClick={toggleMusic}
                sx={{
                    position: "fixed",
                    bottom: 24,
                    left: 24,
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    bgcolor: "rgba(20,20,20,0.85)",
                    color: "#fff",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                    transition: "all 0.25s ease",
                    zIndex: 9999,

                    "&:hover": {
                        transform: "scale(1.08)",
                        bgcolor: "rgba(30,30,30,0.95)",
                    },

                    // Pulse ring when playing
                    ...(isPlaying && {
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.35)",
                            animation: "pulse 1.8s infinite",
                        },
                    }),

                    "@keyframes pulse": {
                        "0%": {
                            transform: "scale(1)",
                            opacity: 0.6,
                        },
                        "70%": {
                            transform: "scale(1.6)",
                            opacity: 0,
                        },
                        "100%": {
                            transform: "scale(1.6)",
                            opacity: 0,
                        },
                    },
                }}
            >
                <IconButton sx={{ color: "white" }}>
                    {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
                </IconButton>
            </Box>
        </>
    );
}