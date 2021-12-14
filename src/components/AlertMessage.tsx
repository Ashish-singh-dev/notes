import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface AlertDialogProps {
  open: boolean,
  setOpen: (value: boolean) => void,
  message: string
}

const SnackbarPosition = {
  vertical: "bottom",
  horizontal: "center"
}

function AlertMessage({ open, setOpen, message }: AlertDialogProps) {

  const handleAlertClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      sx={{ bottom: "90px" }}
      autoHideDuration={5000}
      open={open}
      anchorOrigin={{ "vertical": "bottom", "horizontal": "center" }}
      key={SnackbarPosition.vertical + SnackbarPosition.horizontal}
      onClose={handleAlertClose}
    >
      <Alert variant="filled" severity="error" sx={{ width: '100%' }} onClose={handleAlertClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default AlertMessage