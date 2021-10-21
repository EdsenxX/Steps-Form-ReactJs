// Components
import Input from "../components/Input";
import Form from "./Form";
import Button from "./Button";

const FormSocialNetworks = (props) => {
  return (
    <Form
      title="Social Networks"
      onSubmit={props.continue}
      inputs={
        <>
          <Input
            title="Facebook"
            name="facebook"
            icon="ri-facebook-box-fill"
            type="url"
          />
          <Input
            title="Instagram"
            name="instagram"
            icon="ri-instagram-line"
            type="url"
          />
          <Input
            title="Twitter"
            name="twitter"
            icon="ri-twitter-fill"
            type="url"
          />
          <Input
            title="Linkedin"
            name="linkedin"
            icon="ri-linkedin-fill"
            type="url"
          />
        </>
      }
      buttons={
        <>
          <Button title="Regresar" type="button" onClick={props.goBack}/>
          <Button title="Continuar" type="submit"/>
        </>
      }
    />
  );
};

export default FormSocialNetworks;
