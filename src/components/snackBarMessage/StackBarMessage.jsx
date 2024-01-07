/* eslint-disable react/prop-types */
import React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MuiAlert from '@mui/material/Alert'

export default function StackBarMessage({
  isOpen,
  setIsOpen,
  message,
  typeMessage,
}) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpen(false)
  }
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Ok
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {typeMessage && (
          <Alert
            severity={typeMessage}
            onClose={handleClose}
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  )
}
