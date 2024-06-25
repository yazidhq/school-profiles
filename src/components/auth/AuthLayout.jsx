import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import Button from "../ui/button/Button";
import Anchor from "../ui/text/Anchor";
import Heading from "../ui/heading/Heading";
import TextLabel from "../ui/label/TextLabel";
import TextInput from "../ui/input/TextInput";

const AuthLayout = ({ handleLogin }) => {
  const { isInvalid, breakInvalid } = useAuth();

  useEffect(() => {
    if (isInvalid) {
      Swal.fire("Invalid", "Failed to login. Try Again!", "error").then(
        (result) => {
          if (result.isConfirmed || result.isDismissed) {
            breakInvalid();
          }
        }
      );
    }
  }, [isInvalid]);

  return (
    <div
      className="bg-light d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-white rounded-5 shadow" style={{ width: "30rem" }}>
        <div className="pt-5 px-5 pb-5">
          <div className="text-center">
            <Heading text={"Admin"} size={"1"} />
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <TextLabel text={"Email"} forId={"email"} />
              <TextInput
                name={"email"}
                type={"email"}
                id={"email"}
                focus={true}
              />
            </div>
            <div className="mb-3">
              <TextLabel text={"Password"} forId={"password"} />
              <TextInput name={"password"} type={"password"} id={"password"} />
            </div>
            <div className="d-grid mb-3 mt-5">
              <Button type={"submit"} style={"dark text-white"}>
                Sign In
              </Button>
            </div>
            <div className="text-center">
              <Anchor route={"/"}>go to homepage</Anchor>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
