// Components
import Input from "../components/Input";
import Form from "./Form";
import Button from "./Buttons";

const FormAccount = (props) => {
  return (
    <Form
      title="Account Details"
      inputs={
        <>
          <Input title="User" name="user" icon="ri-user-line" type="text" />
          <Input
            title="Password"
            name="password"
            icon="ri-lock-line"
            type="password"
          />
          <Input
            title="Confirm Password"
            name="confirmPassword"
            icon="ri-lock-line"
            type="password"
          />
        </>
      }
      buttons={
        <Button title="Continuar"/>
      }
    />
  );
};

export default FormAccount;
