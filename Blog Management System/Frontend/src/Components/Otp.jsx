import axios from "axios";
import OTPInput from "otp-input-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const handleVerify = () => {
    console.log(otp);
    axios
      .post(
        "http://localhost:8080/user/verification",
        { otp },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <OTPInput
        value={otp}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        secure
      />
      <button onClick={handleVerify}>verify</button>
    </>
  );
}
