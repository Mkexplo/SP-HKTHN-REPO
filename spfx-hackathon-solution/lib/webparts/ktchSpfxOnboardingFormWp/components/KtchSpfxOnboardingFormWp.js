var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import styles from "./KtchSpfxOnboardingFormWp.module.scss";
import UserNameValService from "../services/service";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
var KtchSpfxOnboardingFormWp = function (props) {
    var _a = useState(""), userNameValue = _a[0], SetUserNameValue = _a[1];
    var _b = useState(), userNameValidationReponse = _b[0], SetUserNameValidationReponse = _b[1];
    var _c = useState(false), profanityDetected = _c[0], SetProfanityDetected = _c[1];
    var _d = useState(), userNameMeanings = _d[0], setUserNameMeanings = _d[1];
    var _e = useState(false), isValidatedFlag = _e[0], setIsValidatedFlag = _e[1];
    var _f = useState(""), userFirstName = _f[0], setUserFirstName = _f[1];
    var _g = useState(""), userLastName = _g[0], setUserLastName = _g[1];
    var _h = useState(""), userEmailID = _h[0], setUserEmailID = _h[1];
    var _j = useState(0), generateCount = _j[0], setGenerateCount = _j[1];
    var _k = useState("6rem"), emailGroupHeight = _k[0], setEmailGroupHeight = _k[1];
    var _l = useState("#2F3C7E"), profMessageColor = _l[0], setProfMessageColor = _l[1];
    var _m = useState(false), loader = _m[0], setLoader = _m[1];
    var userResponseTemp;
    var userNameMeaningTemp = [];
    var varGenerateCount = 0;
    var getLastChar = function (s, n) { return s.slice(-n); };
    var getFirstChar = function (s, n) { return s.slice(0, n); };
    var onReset = function () {
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
        varGenerateCount = 0;
    };
    var handleCombinationChange = function (comb) {
        setIsValidatedFlag(false);
        setLoader(true);
        varGenerateCount =
            generateCount == 3 ? (generateCount + 2) % 4 : (generateCount + 1) % 4;
        _setEmailID();
        // SetUserNameValue(props.description);
        setGenerateCount(varGenerateCount);
    };
    var _setEmailID = function () {
        if (varGenerateCount != 0) {
            if (varGenerateCount == 1) {
                SetUserNameValue(getFirstChar(userFirstName, 4)
                    .concat(getLastChar(userLastName, 3))
                    .concat("1"));
                setUserEmailID(getFirstChar(userFirstName, 4)
                    .concat(getLastChar(userLastName, 3))
                    .concat("1")
                    .concat("@ygc8n.com"));
            }
            if (varGenerateCount == 2) {
                SetUserNameValue(getFirstChar(userFirstName, 3).concat(getLastChar(userLastName, 3)));
                setUserEmailID(getFirstChar(userFirstName, 3)
                    .concat(getLastChar(userLastName, 3))
                    .concat("@ygc8n.com"));
            }
            if (varGenerateCount == 3) {
                SetUserNameValue(getFirstChar(userFirstName, 3).concat(getFirstChar(userLastName, 3)));
                setUserEmailID(getFirstChar(userFirstName, 3)
                    .concat(getFirstChar(userLastName, 3))
                    .concat("@ygc8n.com"));
            }
        }
    };
    useEffect(function () {
        function validateUserNameValue(paramUserNameValue) {
            return __awaiter(this, void 0, void 0, function () {
                var userNameValService, userValResponseStr, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            userNameValService = new UserNameValService(props.httpClient);
                            return [4 /*yield*/, userNameValService.getUSRNVal(paramUserNameValue, "gpt-4o-mini")];
                        case 1:
                            userValResponseStr = _a.sent();
                            if (userValResponseStr.indexOf("json") > 0) {
                                userResponseTemp = JSON.parse(userValResponseStr.substring(userValResponseStr.indexOf("json") + 4, userValResponseStr.lastIndexOf("}") + 1));
                                SetProfanityDetected(userResponseTemp.profanity_detected);
                                if (userResponseTemp === null || userResponseTemp === void 0 ? void 0 : userResponseTemp.profanity_detected) {
                                    Object.keys(userResponseTemp.details[0].meanings).forEach(function (key) {
                                        // console.log(element);
                                        userNameMeaningTemp.push({
                                            language: key,
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
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        if (userNameValue != "") {
            validateUserNameValue(userNameValue);
        }
    }, [userNameValue]);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("div", { className: styles.formHeader },
                React.createElement("h2", { className: styles.headerText }, "EMPLOYEE ONBOARDING FORM")),
            React.createElement("div", { className: styles.formBody },
                React.createElement("div", { className: styles.nameGroup },
                    React.createElement("div", { className: styles.fNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "fname" }, "Full Name:")),
                        React.createElement("div", { className: styles.valueField },
                            React.createElement("input", { type: "text", id: "fName", name: "fullName", required: true, value: userFirstName, onChange: function (e) { return setUserFirstName(e.target.value); }, style: { width: "12rem", height: "1.4rem", fontSize: "1.1rem" } }))),
                    React.createElement("div", { className: styles.lNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "lname" }, "Last Name:")),
                        React.createElement("div", { className: styles.valueField },
                            React.createElement("input", { type: "text", id: "lName", name: "lastName", required: true, value: userLastName, onChange: function (e) { return setUserLastName(e.target.value); }, style: { width: "12rem", height: "1.4rem", fontSize: "1.1rem" } })))),
                React.createElement("div", { className: styles.emailGroup, style: { height: emailGroupHeight } },
                    React.createElement("div", null,
                        React.createElement("div", { className: styles.emailField },
                            React.createElement("div", { className: styles.labelField },
                                React.createElement("label", { htmlFor: "email" }, "Email:")),
                            React.createElement("div", { className: styles.emailLabelField },
                                React.createElement("label", { htmlFor: "emailText" }, userEmailID))),
                        React.createElement("div", { className: styles.userNameField },
                            React.createElement("div", { className: styles.labelField },
                                React.createElement("label", { htmlFor: "email" }, "User Name:")),
                            React.createElement("div", { className: styles.emailLabelField },
                                React.createElement("label", { htmlFor: "userNameText" }, userNameValue)))),
                    React.createElement("div", { className: styles.changeValButtonDiv },
                        React.createElement("button", { className: (!isValidatedFlag && (userFirstName == "" && userLastName == ""))
                                ? styles.changeValButtonDisabled
                                : styles.changeValButton, onClick: function () { return handleCombinationChange(userNameValue); }, disabled: !isValidatedFlag && (userFirstName == "" && userLastName == "") }, "Generate")),
                    React.createElement("div", null, loader ? (React.createElement("div", { className: styles.loaderControl },
                        React.createElement(ColorRing, { visible: true, height: "50", width: "50", ariaLabel: "color-ring-loading", wrapperStyle: {}, wrapperClass: "color-ring-wrapper", colors: [
                                "#2F3C7E",
                                "#FBEAEB",
                                "#d5d7e3",
                                "#607ebf",
                                "#60a1bf",
                            ] }))) : (React.createElement("div", null,
                        React.createElement("div", { className: styles.profValMessageDiv },
                            React.createElement("span", { className: styles.profValMessage, style: { color: profMessageColor } }, isValidatedFlag && profanityDetected ?
                                "Profanity is detected in the username ".concat(userNameValue, ".\n                        Click \"Generate\" for more options.")
                                : (isValidatedFlag && !profanityDetected ? "This username is perfect to use!" : ""))),
                        React.createElement("div", { className: styles.meaningSection }, isValidatedFlag && profanityDetected ? (React.createElement("ul", null, userNameMeanings === null || userNameMeanings === void 0 ? void 0 : userNameMeanings.map(function (item, i) {
                            return (React.createElement("li", null,
                                item.language,
                                " : ",
                                item.meaning));
                        }))) : (React.createElement("div", null))))))),
                React.createElement("div", { className: styles.dptGroup },
                    React.createElement("div", { className: styles.fNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "fname" }, "Manager:")),
                        React.createElement("div", { className: styles.valueField },
                            React.createElement("input", { type: "text", id: "fName", name: "fullName", required: true, style: { width: "12rem", height: "1.4rem", fontSize: "1.1rem" }, onChange: function (e) { return setUserFirstName(e.target.value); } }))),
                    React.createElement("div", { className: styles.lNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "lname" }, "Department:")),
                        React.createElement("div", { className: styles.valueField },
                            React.createElement("input", { type: "text", id: "lName", name: "lastName", required: true, style: { width: "10rem", height: "1.4rem", fontSize: "1.1rem" }, onChange: function (e) { return setUserLastName(e.target.value); } })))),
                React.createElement("div", { className: styles.miscGroup },
                    React.createElement("div", { className: styles.fNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "fname" }, "Joining date:")),
                        React.createElement("div", { className: styles.valueField },
                            React.createElement("input", { type: "text", id: "fName", name: "fullName", required: true, style: { width: "10rem", height: "1.4rem", fontSize: "1.1rem" }, onChange: function (e) { return setUserFirstName(e.target.value); } }))),
                    React.createElement("div", { className: styles.lNameField },
                        React.createElement("div", { className: styles.labelField },
                            React.createElement("label", { htmlFor: "lname" }, "Upload photo:")),
                        React.createElement("div", { className: styles.valueField, style: { marginLeft: "0.1rem !important" } },
                            React.createElement("input", { type: "text", id: "lName", name: "lastName", required: true, style: { width: "10rem", height: "1.4rem", fontSize: "1.1rem" }, onChange: function (e) { return setUserLastName(e.target.value); } })),
                        React.createElement("div", { className: styles.uploadValButtonDiv },
                            React.createElement("button", { className: styles.uploadValButton, onClick: function () { return handleCombinationChange(userNameValue); }, disabled: !isValidatedFlag, style: { left: "6.5rem !important", top: "0rem !important" } }, "Upload")))),
                React.createElement("div", { className: styles.resetButton },
                    React.createElement("button", { type: "submit", className: styles.changeValButton, style: { position: "relative", top: "20rem", left: "16rem" }, onClick: function () { return onReset(); } }, "Reset")),
                React.createElement("div", { className: styles.submitButton },
                    React.createElement("button", { type: "submit", className: isValidatedFlag
                            ? styles.changeValButton
                            : styles.changeValButtonDisabled, style: { position: "relative", top: "20rem", left: "20rem" }, disabled: !profanityDetected }, "Submit"))))));
};
export default KtchSpfxOnboardingFormWp;
//# sourceMappingURL=KtchSpfxOnboardingFormWp.js.map