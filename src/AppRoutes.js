import {Routes,Route} from 'react-router-dom';
import {HomePage} from './Page/HomePage'
import { TicketPage } from './Page/TicketPage';
import { ProtectedRoute } from './auth/ProtectedRoutes';
import { ProfilePage } from './Page/ProfilePage';
import { DialogBox } from './components/DialogBox';
export const AppRoutes=()=>{
    return(
        <>
           <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route element={<ProtectedRoute/>}>
           <Route path="/ticket" element={<TicketPage/>}/>
           <Route path='/profile' element={<ProfilePage/>}/>
        </Route>
            <Route path="/test" element={<DialogBox/>}/>
           </Routes>
        </>
    )
}