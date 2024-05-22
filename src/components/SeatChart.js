import { useEffect, useRef, useState } from 'react'

// Import Components
import Seat from './Seat'

// Import Assets
import close from '../assets/close.svg'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import QRCode from 'react-qr-code'

const SeatChart = ({ occasion, tokenMaster, provider, setToggle,seats,setSeats }) => {
  const {user}=useAuth0();
  const ticketData={
    username: user.name,
    emailID: user.email,
    seatNumber: -1,
    occasionID: -1
  }
  const [seatsTaken, setSeatsTaken] = useState(false)
  const [hasSold, setHasSold] = useState(false)
  const [generateQR,setgenerateQR] = useState(false);
  const seatNumber=useRef(-1);
  const handleClose=()=>{
    setgenerateQR(false);
  }
  const getSeatsTaken = async () => {
    const seatsTaken = await tokenMaster.getSeatsTaken(occasion.id)
    setSeatsTaken(seatsTaken)
  }
  const buySeats= async (_seat)=>{
    seatNumber.current=_seat
    const signer = await provider.getSigner()
    const transaction = await tokenMaster.connect(signer).mint(occasion.id, _seat, { value: occasion.cost })
    await transaction.wait()
    ticketData.seatNumber=_seat;
    ticketData.occasionID=occasion.id;
  }
  const buyHandler = async (_seats) => {
    setHasSold(false)
    for(let seat in _seats)
    {
      buySeats(seat);
    }
    setHasSold(true)
    setgenerateQR(true);
  }

  useEffect(() => {
    getSeatsTaken()
  }, [hasSold])

  return (
    <div className="occasion">
      <div className="occasion__seating">
        <h1>{occasion.name} Seating Map</h1>

        <button onClick={() => setToggle(false)} className="occasion__close">
          <img src={close} alt="Close" />
        </button>

        <div className="occasion__stage">
          <strong>STAGE</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={1}
            columnStart={0}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
            seats={seats}
            setSeats={setSeats}
          />
        )}

        <div className="occasion__spacer--1 ">
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(Number(occasion.maxTickets) - 50).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={26}
            columnStart={6}
            maxColumns={15}
            rowStart={2}
            maxRows={15}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
          />
        )}

        <div className="occasion__spacer--2">
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={(Number(occasion.maxTickets) - 24)}
            columnStart={22}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
          />
        )}
      </div>
      <Button disabled={!!seats.length} onClick={()=>buyHandler(seats)}>Buy Now</Button>
      {generateQR && <Dialog open={generateQR} onClose={()=>{
        setgenerateQR(false);
      }}>
        <DialogTitle >Please get your ticket below</DialogTitle>
        <DialogContent>
          <QRCode value={"Name- "+ user.name + " \nEmail "+ user.email  + "\nOcassion ID- " +occasion.id.toString()+" \nSeat Number "+ seatNumber.current.toString()}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            setgenerateQR(false)
          }}>Close</Button>
        </DialogActions>
        </Dialog>}
    </div >
  );
}

export default SeatChart;