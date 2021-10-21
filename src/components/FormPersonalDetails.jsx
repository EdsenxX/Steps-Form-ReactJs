// Components
import Input from "../components/Input";
import Form from "./Form";
import Button from "./Button";

const FormPersonalDetails = (props) => {
  return (
    <Form
      onSubmit={props.continue}
      title="Personal Details"
      inputs={
        <>
          <Input title="Name" name="name" icon="ri-user-line" type="text" />
        </>
      }
      buttons={
        <>
          <Button title="Regresar" type="button" onClick={props.goBack} />
          <Button title="Completar" type="submit"/>
        </>
      }
    />
  );
};

export default FormPersonalDetails;
