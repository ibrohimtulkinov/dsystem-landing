import { Button } from "@mui/material";

const CustomButton = ({ children, onClick, sx = {}, ...props }) => {
  return (
    <Button
      onClick={onClick}
      {...props}
      sx={{
        background: "linear-gradient(to right, #7302ea, #e426fd)",
        color: "white",
        fontWeight: "500",
        borderRadius: "30px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize:"16px",
        textTransform: "capitalize",
        padding: "12px 47px",
        textAlign: "center",
        transition: "all 500ms ease, background 0.5s ease",
        ...sx,
        "&:hover": {
          background: "linear-gradient(to left, #8a2be2, #ff69b4)",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "0 0 0 4px rgba(128, 0, 128, 0.2)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
