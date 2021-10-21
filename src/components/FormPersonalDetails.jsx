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
          <Input
            title="Name"
            name="name"
            icon="ri-user-line"
            type="text"
            value={props.data.name}
            onChange={props.onChange}
          />
          <Input
            title="Last name"
            name="lastName"
            icon="ri-user-line"
            type="text"
            value={props.data.lastName}
            onChange={props.onChange}
          />
          <Input
            title="Address"
            name="address"
            icon="ri-home-4-line"
            type="text"
            value={props.data.address}
            onChange={props.onChange}
          />
          <Input
            title="State"
            name="state"
            icon="ri-earth-line"
            type="text"
            value={props.data.state}
            onChange={props.onChange}
          />
          <Input
            title="Country"
            name="country"
            icon="ri-earth-line"
            type="text"
            value={props.data.country}
            onChange={props.onChange}
          />
        </>
      }
      buttons={
        <>
          <Button title="Regresar" type="button" onClick={props.goBack} />
          <Button title="Completar" type="submit" />
        </>
      }
    />
  );
};

export default FormPersonalDetails;
