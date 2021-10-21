// Components
import Input from "../components/Input";
import Form from "./Form";
import Button from "./Button";

const FormAccount = (props) => {
  return (
    <Form
      onSubmit={props.continue}
      title="Account Details"
      inputs={
        <>
          <Input
            title="User"
            name="user"
            icon="ri-user-line"
            type="text"
            value={props.data.user}
            onChange={props.onChange}
          />
          <Input
            title="Password"
            name="password"
            icon="ri-lock-line"
            type="password"
            value={props.data.password}
            onChange={props.onChange}
          />
          <Input
            title="Confirm Password"
            name="confirmPassword"
            icon="ri-lock-line"
            type="password"
            value={props.data.confirmPassword}
            onChange={props.onChange}
          />
        </>
      }
      buttons={<Button title="Continuar" type="submit" />}
    />
  );
};

export default FormAccount;
