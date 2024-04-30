import { Button, DialogActions, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import QRCode from 'react-qr-code';

export const DialogBox=(isOpen,handleClose,ticketData="ayush")=>{
    return(
        <div>
            <Dialog open={isOpen} onClose={handleClose}>
               <DialogTitle>Please get your ticket below</DialogTitle>
               <DialogContent>
               <QRCode value={ticketData}/>
               </DialogContent>
               <DialogActions>
                <Button onClick={handleClose}>Close</Button>
               </DialogActions>
            </Dialog>
        </div>
    )
}