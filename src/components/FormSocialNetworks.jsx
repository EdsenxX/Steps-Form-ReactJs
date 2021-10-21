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
            value={props.data.facebook}
            onChange={props.onChange}
          />
          <Input
            title="Instagram"
            name="instagram"
            icon="ri-instagram-line"
            type="url"
            value={props.data.instagram}
            onChange={props.onChange}
          />
          <Input
            title="Twitter"
            name="twitter"
            icon="ri-twitter-fill"
            type="url"
            value={props.data.twitter}
            onChange={props.onChange}
          />
          <Input
            title="Linkedin"
            name="linkedin"
            icon="ri-linkedin-fill"
            type="url"
            value={props.data.linkedin}
            onChange={props.onChange}
          />
        </>
      }
      buttons={
        <>
          <Button title="Regresar" type="button" onClick={props.goBack} />
          <Button title="Continuar" type="submit" />
        </>
      }
    />
  );
};

export default FormSocialNetworks;
