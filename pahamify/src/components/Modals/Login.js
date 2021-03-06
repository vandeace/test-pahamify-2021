import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const toggle = () => {
    props.setModal(!props.setModal);
  };
  return (
    <div>
      <Modal
        isOpen={props.modal}
        style={customStyles}
        contentLabel="Modal Login"
        ariaHideApp={false}
      >
        <div className="" style={{ minWidth: 400 }}>
          <div className="block">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
          <h2 className="text-4xl font-mono font-extrabold text-blue-primary text-center my-3">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full border-gray-light border my-2 p-2 pl-4 rounded-3xl focus:outline-none shadow appearance-none "
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: true, min: 8 })}
                className="w-full border-gray-light border my-2 p-2 pl-4 rounded-3xl focus:outline-none shadow appearance-none "
              />

              <input
                type="submit"
                className="w-full my-2 p-2 rounded-3xl bg-light-blue hover: hover:bg-blue-primary cursor-pointer focus:outline-none shadow appearance-none "
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
