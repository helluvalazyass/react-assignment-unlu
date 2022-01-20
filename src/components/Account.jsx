import React from "react";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";

const Account = () => {
    return (
        <div>
            <Button startIcon={<LogoutIcon/>} color="secondary" variant="contained">Logout</Button>
        </div>
    )
}

export default Account;