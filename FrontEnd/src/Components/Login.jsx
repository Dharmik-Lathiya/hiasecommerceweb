import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export default function Login() {
  const navigate = useNavigate();


  function LogIn(e) {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    fetch(import.meta.env.VITE_API_KEY + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          localStorage.setItem("isLogedIn", data.success);
          localStorage.setItem("isAdmin", data.isAdmin);
          localStorage.setItem("userId", data.userId);

          toast.success(data?.message || "Login Successful!", {
            autoClose: 5000,
            position: "top-center",
            style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
          });

          if (data.isAdmin) {
            navigate("/admin/dashboard");
          } else {
            navigate("/user");
          }
        } else {
          toast.error(data?.message || "Login failed. Please try again.", {
            autoClose: 5000,
            position: "top-center",
            style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
          });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Please try again.", {
          autoClose: 5000,
          position: "top-center",
          style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
        });
      });
  }

  function SignUp(e) {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      mobile: e.target[2].value,
      password: e.target[3].value,
    };

    fetch(import.meta.env.VITE_API_KEY + "/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          localStorage.setItem("isLogedIn", data.success);
          localStorage.setItem("isAdmin", data.isAdmin);
          localStorage.setItem("userId", data.userId);

          toast.success(data?.message || "Signup Successful!", {
            autoClose: 5000,
            position: "top-center",
            style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
          });

          navigate("/");
        } else {

          const errorString = data.message
          const errorArray = errorString.replace("Validation failed: ", "").split(", ");

          let validationErrors = errorArray.reduce((acc, err) => {
            const [key, value] = err.split(": "); // Split each error by ": "
            acc[key] = value; // Assign key-value pair
            return acc;
          }, {});
          console.log(validationErrors);


          for (const error in validationErrors) {
            toast.error( validationErrors[error]|| "Signup failed. Please try again.", {
              autoClose: 5000,
              position: "top-center",
              style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
            });
          }
          
        }
      })
      .catch((err) => {
        console.error(err); 
        toast.error("Something went wrong. Please try again.", {
          autoClose: 5000,
          position: "top-center",
          style: { backgroundColor: "#008000", color: "#fff", textAlign: "center" },
        });
      });
  }

  useEffect(() => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  }, []);

  return (
    <div className="Login-container">
      <ToastContainer /> {/* Required for toast messages */}
      <div className="wrapper content-center items-center p-10 h-screen">
        <div className="title-text">
          <div className="title login">Login Form</div>
          <div className="title signup">Signup Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" defaultChecked />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className="login" onSubmit={LogIn}>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="#">Signup now</a>
              </div>
            </form>
            <form action="#" className="signup" onSubmit={SignUp}>
              <div className="field">
                <input type="text" placeholder="Enter Name" required />
              </div>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="tel" placeholder="Mobile Number" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
