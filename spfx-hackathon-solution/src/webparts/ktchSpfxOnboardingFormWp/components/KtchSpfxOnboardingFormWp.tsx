import * as React from "react";
import styles from "./KtchSpfxOnboardingFormWp.module.scss";
import type { IKtchSpfxOnboardingFormWpProps } from "./IKtchSpfxOnboardingFormWpProps";
import { escape, set } from "@microsoft/sp-lodash-subset";
import UserNameValService from "../services/service";
import { IMeaning, IUserNameValResponse } from "../model/IUserNameValResponse";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const KtchSpfxOnboardingFormWp: React.FC<IKtchSpfxOnboardingFormWpProps> = (
  props
) => {
 

  const [userNameValue, SetUserNameValue] = useState("");
  const [userNameValidationReponse, SetUserNameValidationReponse] =
    useState<IUserNameValResponse>();
  const [profanityDetected, SetProfanityDetected] = useState(false);
  const [userNameMeanings, setUserNameMeanings] = useState<IMeaning[]>();
  const [isValidatedFlag, setIsValidatedFlag] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmailID, setUserEmailID] = useState("");
  const [generateCount, setGenerateCount] = useState(0);
  const [emailGroupHeight, setEmailGroupHeight] = useState("6rem");
  const [profMessageColor, setProfMessageColor] = useState("#2F3C7E");
  const [loader, setLoader] = useState(false);

 
  let userResponseTemp: IUserNameValResponse;
  let userNameMeaningTemp: IMeaning[] = [];
  let varGenerateCount = 0;

  const getLastChar = (s, n) => s.slice(-n);
  const getFirstChar = (s, n) => s.slice(0, n);

  const onReset=()=>{
    setLoader(false);
    setEmailGroupHeight("6rem");
    SetUserNameValue("");
   SetProfanityDetected(false);
  
  setIsValidatedFlag(false);
  setUserFirstName("");
  setUserLastName("");
  setUserEmailID("");
  setGenerateCount(0);

  setProfMessageColor("#2F3C7E");
  varGenerateCount=0;
  }

  const handleCombinationChange = (comb: string) => {
    setIsValidatedFlag(false);
    setLoader(true);
    varGenerateCount =
      generateCount == 3 ? (generateCount + 2) % 4 : (generateCount + 1) % 4;

    _setEmailID();
    // SetUserNameValue(props.description);
    setGenerateCount(varGenerateCount);
  };

  const _setEmailID = () => {
    if (varGenerateCount != 0) {
      if (varGenerateCount == 1) {
        SetUserNameValue(
          getFirstChar(userFirstName, 4)
            .concat(getLastChar(userLastName, 3))
            .concat("1")
        );
        setUserEmailID(
          getFirstChar(userFirstName, 4)
            .concat(getLastChar(userLastName, 3))
            .concat("1")
            .concat("@ygc8n.com")
        );
      }

      if (varGenerateCount == 2) {
        SetUserNameValue(
          getFirstChar(userFirstName, 3).concat(getLastChar(userLastName, 3))
        );
        setUserEmailID(
          getFirstChar(userFirstName, 3)
            .concat(getLastChar(userLastName, 3))
            .concat("@ygc8n.com")
        );
      }

      if (varGenerateCount == 3) {
        SetUserNameValue(
          getFirstChar(userFirstName, 3).concat(getFirstChar(userLastName, 3))
        );
        setUserEmailID(
          getFirstChar(userFirstName, 3)
            .concat(getFirstChar(userLastName, 3))
            .concat("@ygc8n.com")
        );
      }
    }
  };

  

  useEffect(() => {
    async function validateUserNameValue(paramUserNameValue) {
      try {
        const userNameValService: UserNameValService = new UserNameValService(
          props.httpClient
        );
        const userValResponseStr: string = await userNameValService.getUSRNVal(
          paramUserNameValue,
          "gpt-4o-mini"
        );

        if(userValResponseStr.indexOf("json")>0)
        {
        userResponseTemp = JSON.parse(
          userValResponseStr.substring(
            userValResponseStr.indexOf("json") + 4,
            userValResponseStr.lastIndexOf("}") + 1
          )
        );
        SetProfanityDetected(userResponseTemp.profanity_detected);
        if (userResponseTemp?.profanity_detected) {
          Object.keys(userResponseTemp.details[0].meanings).forEach((key) => {
            // console.log(element);
            userNameMeaningTemp.push({
              language: key, //userResponseTemp.details[0].meanings[key].language,
              meaning: userResponseTemp.details[0].meanings[key], //userResponseTemp.details[0].meanings[key].meaning
            });
          });
          setEmailGroupHeight("15rem");
          setProfMessageColor("#C70039");
        }
      }
      
    
        
        setIsValidatedFlag(true);
        setLoader(false);

        setUserNameMeanings(userNameMeaningTemp);

        //SetUserNameValidationReponse(JSON.parse(userValResponseStr.substring(userValResponseStr.indexOf('json')+4,userValResponseStr.lastIndexOf('}')+1)));
      } catch (error) {
        console.log(error);
      }
    }
    if (userNameValue != "") {
      validateUserNameValue(userNameValue);
    }
  }, [userNameValue]);

  return (
    <div>
      <div>
        <div className={styles.formHeader}>
          <h2 className={styles.headerText}>EMPLOYEE ONBOARDING FORM</h2>
        </div>
        <div className={styles.formBody}>
          <div className={styles.nameGroup}>
            <div className={styles.fNameField}>
              <div className={styles.labelField}>
                <label htmlFor="fname">Full Name:</label>
              </div>
              <div className={styles.valueField}>
                <input
                  type="text"
                  id="fName"
                  name="fullName"
                  required
                  value={userFirstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                  style={{width:"12rem",height:"1.4rem",fontSize:"1.1rem"}}
                />
              </div>
            </div>

            <div className={styles.lNameField}>
              <div className={styles.labelField}>
                <label htmlFor="lname">Last Name:</label>
              </div>
              <div className={styles.valueField}>
                <input
                  type="text"
                  id="lName"
                  name="lastName"
                  required
                  value={userLastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                  style={{width:"12rem",height:"1.4rem",fontSize:"1.1rem"}}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.emailGroup}
            style={{ height: emailGroupHeight }}
          >
            <div>
            <div className={styles.emailField}>
              <div className={styles.labelField}>
                <label htmlFor="email">Email:</label>
              </div>
              <div className={styles.emailLabelField}>
                <label htmlFor="emailText">
                  {userEmailID}
                </label>
              </div>
            </div>
            <div className={styles.userNameField}>
              <div className={styles.labelField}>
                <label htmlFor="email">User Name:</label>
              </div>
              <div className={styles.emailLabelField}>
                <label htmlFor="userNameText">
                  {userNameValue}
                </label>
              </div>
            </div>
            </div>
            <div className={styles.changeValButtonDiv}>
              <button
                className={
                  (!isValidatedFlag && (userFirstName=="" && userLastName==""))
                    ? styles.changeValButtonDisabled
                    : styles.changeValButton
                }
                onClick={() => handleCombinationChange(userNameValue)}
                disabled={!isValidatedFlag && (userFirstName=="" && userLastName=="")}
              >
                Generate
              </button>
            </div>
            <div>
              {loader ? (
                <div className={styles.loaderControl}> 
                <ColorRing
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#2F3C7E",
                    "#FBEAEB",
                    "#d5d7e3",
                    "#607ebf",
                    "#60a1bf",
                  ]}
                /></div>
              ) : (
                <div>
                  <div className={styles.profValMessageDiv}>
                  <span className={styles.profValMessage} style={{color:profMessageColor}}>
                    {isValidatedFlag && profanityDetected ?                      
                        `Profanity is detected in the username ${userNameValue}.
                        Click "Generate" for more options.`
                    
                    : (isValidatedFlag && !profanityDetected ? `This username is perfect to use!`:"")}</span>
                  </div>
                  <div className={styles.meaningSection}>
                    {isValidatedFlag && profanityDetected ? (
                      <ul>
                        {userNameMeanings?.map((item, i) => {
                          return (
                            <li>
                              {item.language} : {item.meaning}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.dptGroup}>
            <div className={styles.fNameField}>
              <div className={styles.labelField}>
                <label htmlFor="fname">Manager:</label>
              </div>
              <div className={styles.valueField}>
                <input
                  type="text"
                  id="fName"
                  name="fullName"
                  required
                  style={{width:"12rem",height:"1.4rem",fontSize:"1.1rem"}}
                  onChange={(e) => setUserFirstName(e.target.value)}
                  
                />
              </div>
            </div>

            <div className={styles.lNameField}>
              <div className={styles.labelField}>
                <label htmlFor="lname">Department:</label>
              </div>
              <div className={styles.valueField}>
                <input
                  type="text"
                  id="lName"
                  name="lastName"
                  required
                  style={{width:"10rem",height:"1.4rem",fontSize:"1.1rem"}}
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.miscGroup}>
            <div className={styles.fNameField}>
              <div className={styles.labelField}>
                <label htmlFor="fname">Joining date:</label>
              </div>
              <div className={styles.valueField}>
                <input
                  type="text"
                  id="fName"
                  name="fullName"
                  required
                  
                  style={{width:"10rem",height:"1.4rem",fontSize:"1.1rem"}}
                  onChange={(e) => setUserFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.lNameField}>
              <div className={styles.labelField}>
                <label htmlFor="lname">Upload photo:</label>
              </div>
              <div className={styles.valueField} style={{marginLeft:"0.1rem !important"}}>
                <input
                  type="text"
                  id="lName"
                  name="lastName"
                  required
                  
                  style={{width:"10rem",height:"1.4rem",fontSize:"1.1rem"}}
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </div>
              <div className={styles.uploadValButtonDiv}>
                <button
                  className={styles.uploadValButton}
                  onClick={() => handleCombinationChange(userNameValue)}
                  disabled={!isValidatedFlag}
                  style={{left:"6.5rem !important",top:"0rem !important"}}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className={styles.resetButton}>
          <button
            type="submit"
            className={styles.changeValButton}
            style ={{position:"relative",top: "20rem",left: "16rem"}}
            onClick={() => onReset()}
          >
            Reset
          </button>
        </div>
          <div className={styles.submitButton}>
          <button
            type="submit"
            className={
              isValidatedFlag
                ? styles.changeValButton
                : styles.changeValButtonDisabled
            }
            style ={{position:"relative",top: "20rem",left: "20rem"}}
            disabled={!profanityDetected}
          >
            Submit
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};
export default KtchSpfxOnboardingFormWp;
