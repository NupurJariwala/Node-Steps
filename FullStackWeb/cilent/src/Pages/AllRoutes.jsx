import { Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin";
import Homepage from "../Pages/Homepage";
import Singup from "../Pages/Signup";

import NotesCreate from "../Pages/NotesCreate";
import Notes from "../Pages/Notes";
import Otp from "../Components/Otp";
import PrivateRoutes from "../Components/PrivateRoutes";
import UpdateNotes from "./UpdateNotes";
import GetNotesbyAdmin from "./GetNotesbyAdmin";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Singup />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route
          path="/createnotes"
          element={
            <PrivateRoutes>
              <NotesCreate />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/notes"
          element={
            <PrivateRoutes>
              <Notes />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/update/:notesId" element={<UpdateNotes />}></Route>
        <Route path="/allnotes" element={<GetNotesbyAdmin />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
