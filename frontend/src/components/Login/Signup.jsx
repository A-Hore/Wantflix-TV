import "./login.css";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 2 && password.length > 7 && email.length > 9) {
      setLoading(true);
      let data = { name, email, password };
      axios
        .post("https://troubled-slip-lion.cyclic.app/signup", data)
        .then((res) => {
          setLoading(false);
          if (res.data === "user already present") {
            toast({
              position: "top",
              title: "Allready Present",
              description: "You allready signup please login",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          } else if (res.data === "sign up successfully") {
            setLoading(false);
            toast({
              title: "Account created.",
              description: "Account created ! Please Login",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          setLoading(false);
          toast({
            position: "top",
            title: "Please Enter something",
            description: "Some fields are empty",
            status: "warning",
            duration: 6000,
            isClosable: true,
          });
        });
    } else {
      setLoading(false);
      toast({
        position: "top",
        title: "Please Enter something",
        description: "Some fields are empty",
        status: "warning",
        duration: 4000,
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
            color="blue.500"
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
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="Name"
                id="userName"
                placeholder="Name"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>
            <button onClick={(e) => handleSubmit(e)} className="btn mt-3">
              Signup
            </button>
          </form>
          <div className="text-center fs-6 cont">
            <Link to="/login">Alleady a user? &nbsp;login</Link>
          </div>
        </div>
      )}
    </div>
  );
}
