import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import "./login.css";
export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 2 && email.length > 10) {
      setLoading(true);
      let data = { email, password };
      // console.log(data);
      axios
        .post("https://troubled-slip-lion.cyclic.app/login", data)
        .then((res) => {
          if (res.data.msg === "Login successfull") {
            setLoading(false);
            toast({
              position: "top",
              title: "Login successfull.",
              description: "U logged in successfull.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/");
          } else {
            setLoading(false);
            toast({
              position: "top",
              title: "Login Failed",
              description: "Plase Enter correct credential",
              status: "error",
              duration: 6000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          toast({
            position: "top",
            title: "Login Faild.",
            description: "Please enter corrct creadential",
            status: "error",
            duration: 6000,
            isClosable: true,
          });
          // console.log(err);
        });
    } else {
      setLoading(false);
      toast({
        position: "top",
        title: "Please Enter something",
        description: "Some fields are empty",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="s-container">
      {loading ? (
        <div>
          <Spinner
            thickness='9px'
            speed='1s'
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </div>
      ) : (
        <div className="wrapper">
          <div className="logo">
            <img
              src="https://www.apple.com/v/apple-tv-plus/ae/images/meta/apple-tv__e7aqjl2rqzau_og.png"
              alt=""
            />
          </div>
          <div className="text-center mt-4 name">Wantflix</div>
          <form className="p-3 mt-3">
            {/* email input */}

            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="userName"
                placeholder="Email"
              />
            </div>

            {/* password input */}

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                required
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="text"
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="btn mt-3"
            >
              Login
            </button>
          </form>
          <div className="text-center fs-6 cont">
            <Link to="/signup">New here? &nbsp; Signup</Link>
          </div>
        </div>
      )}
    </div>
  );
}
