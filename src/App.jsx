// Dependencies
import { useState } from "react";
// Components
import Bar from "./components/Bar";
import FormAccount from "./components/FormAccount";
import FormSocialNetworks from "./components/FormSocialNetworks";
import FormPersonalDetails from "./components/FormPersonalDetails";
import swal from "sweetalert";
// Assets
import styles from "./App.module.scss";

function App() {
  const [accountData, setAccountData] = useState({
    user: "",
    password: "",
    confirmPassword: "",
  });
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  const [socialMediaData, setSocialMediaData] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  });
  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaData({
      ...socialMediaData,
      [name]: value,
    });
  };

  const [personalData, setPersonalData] = useState({
    name: "",
    astName: "",
    address: "",
    state: "",
    country: "",
  });
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const [isUserComplete, setUserComplete] = useState(false);
  const [isSocialComplete, setSocialComplete] = useState(false);
  const [isPersonalComplete, setPersonalComplete] = useState(false);

  const [showAccount, setShowAccount] = useState(true);
  const [showSocial, setShowScoial] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);

  const validarInputs = (e) => {
    const inputs_groups = [...e.target.getElementsByClassName("input-group")];
    let faltantes = 0;
    inputs_groups.forEach((input_group) => {
      const input = [...input_group.getElementsByTagName("input")][0];
      if (input.value.trim() === "") {
        faltantes++;
        input_group.classList.add("border-red-500");
      } else {
        if (input_group.classList.contains("border-red-500")) {
          input_group.classList.remove("border-red-500");
        }
      }
    });
    return faltantes;
  };

  const continueUser = (e) => {
    e.preventDefault();
    const faltantes = validarInputs(e);
    if (faltantes > 0) {
      return swal({
        title: "Oooops!",
        text: "Por Favor completa todos los campos",
        icon: "error",
      });
    }
    setUserComplete(true);
    setShowAccount(false);
    setShowScoial(true);
  };

  const continueSocial = (e) => {
    e.preventDefault();
    const faltantes = validarInputs(e);
    if (faltantes > 0) {
      return swal({
        title: "Oooops!",
        text: "Por Favor completa todos los campos",
        icon: "error",
      });
    }
    setSocialComplete(true);
    setShowScoial(false);
    setShowPersonal(true);
  };

  const continuePersonal = (e) => {
    e.preventDefault();
    const faltantes = validarInputs(e);
    if (faltantes > 0) {
      return swal({
        title: "Oooops!",
        text: "Por Favor completa todos los campos",
        icon: "error",
      });
    }
    setPersonalComplete(true);
    swal({
      title: "Perfecto!",
      text: "Datos guardados con exito",
      icon: "success",
    });
  };

  const regresarSocial = () => {
    setShowAccount(true);
    setShowScoial(false);
  };

  const regresarPersonal = () => {
    setShowPersonal(false);
    setShowScoial(true);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.content} shadow-2xl`}>
        <div className={styles.bar}>
          <Bar
            userCompleted={isUserComplete}
            socialCompleted={isSocialComplete}
            personalCompleted={isPersonalComplete}
          />
        </div>
        <div className={styles.form}>
          {showAccount && (
            <FormAccount
              continue={continueUser}
              data={accountData}
              onChange={handleAccountChange}
            />
          )}
          {showSocial && (
            <FormSocialNetworks
              continue={continueSocial}
              goBack={regresarSocial}
              data={socialMediaData}
              onChange={handleSocialMediaChange}
            />
          )}
          {showPersonal && (
            <FormPersonalDetails
              continue={continuePersonal}
              goBack={regresarPersonal}
              data={personalData}
              onChange={handlePersonalChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
