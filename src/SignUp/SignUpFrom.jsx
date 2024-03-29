/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const SignUpFrom = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const[passwordError, setPasswordError] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        // Validate email
        if(!email){
            setEmailError("This field cannot be left blank");
        }else if(!/\S+@\S+\.\S+/.test(email)){
            setEmailError("Enter a valid email address");
        }
        // Validate password
        if (!password) {
            setPasswordError('Password is required');
          } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long with a mix of letters, numbers and symbols');
          }
        }
  return (
    <div>
      <div className=" flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSubmit} className="card-body">
            {/* Email Input Field */}
            <div className="form-control">
              <input
                type="email" value={email} onChange={handleEmailChange}
                placeholder="Email"
                className="input input-bordered rounded-sm"
                // required
              />
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
            {/* Password input field */}
            <div className="form-control">
              <input
                type="password" value={password} onChange={handlePasswordChange}
                placeholder="Password"
                className="input input-bordered rounded-sm"
                required
              />
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              <label className="label mt-2">
                <div className=" flex items-center gap-4">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>
                    I agree to Typeform’s Terms of<br></br> Service, Privacy
                    Policy and Data<br></br> Processing Agreement.
                  </p>
                </div>
              </label>
              <div>
                {/* Drop Down Container */}
                <div className="collapse collapse-arrow">
                    <input type="checkbox" />
                  <div className="collapse-title text-lg">See options</div>
                  <div className="collapse-content">
                    <p>
                      Get useful tips, inspiration, and offers via
                      e-communication.
                    </p>
                    <div className=" flex gap-2 mt-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p>Yes</p>
                      <input type="checkbox" className="checkbox" disabled />
                      <p>No</p>
                    </div>
                    <p>
                      Tailor Typeform to my needs based on my activity.See
                      Privacy Policy
                    </p>
                    <div className=" flex gap-2 mt-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p>Yes</p>
                      <input type="checkbox" className="checkbox" disabled />
                      <p>No</p>
                    </div>
                    <p>
                      Enrich my data with select third parties for more relevant
                      content.See Privacy Policy
                    </p>
                    <div className=" flex gap-2 mt-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p>Yes</p>
                      <input type="checkbox" className="checkbox" disabled />
                      <p>No</p>
                    </div>
                    <p>
                        You can update your preferences in your Profile at any
                        time
                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-control ">
              <button className="btn bg-black text-white">
                Create my free account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFrom;
