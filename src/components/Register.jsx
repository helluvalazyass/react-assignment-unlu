import React from "react";
import LoginIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const Register = () => {
    return (
        <div>
            <Button startIcon={<LoginIcon/>} color="primary" variant="contained">Login</Button>
        </div>
    )
}

export default Register;