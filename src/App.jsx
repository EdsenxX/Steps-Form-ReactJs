// Dependencies
import { useState } from "react";
// Components
import Bar from "./components/Bar";
import FormAccount from "./components/FormAccount";
import FormSocialNetworks from "./components/FormSocialNetworks";
import FormPersonalDetails from "./components/FormPersonalDetails";
// Assets
import styles from "./App.module.scss";

function App() {
  const [isUserComplete, setUserComplete] = useState(false);
  const [isSocialComplete, setSocialComplete] = useState(false);
  const [isPersonalComplete, setPersonalComplete] = useState(false);

  const [showAccount, setShowAccount] = useState(true);
  const [showSocial, setShowScoial] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);


  const continueUser = (e) => {
    e.preventDefault();
    setUserComplete(true);
    setShowAccount(false);
    setShowScoial(true);
  };

  const continueSocial = (e) => {
    e.preventDefault();
    setSocialComplete(true);
    setShowScoial(false);
    setShowPersonal(true);
  };

  const continuePersonal = (e) => {
    e.preventDefault();
    setPersonalComplete(true);
  };

  const regresarSocial = () => {
    setShowAccount(true);
    setShowScoial(false);
  }

  const regresarPersonal = () => {
    setShowPersonal(false);
    setShowScoial(true);
  }

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
          {showAccount && <FormAccount continue={continueUser} />}
          {showSocial && <FormSocialNetworks continue={continueSocial} goBack={regresarSocial}/>}
          {showPersonal && (
            <FormPersonalDetails continue={continuePersonal} goBack={regresarPersonal}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
