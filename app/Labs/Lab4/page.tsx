"use client"

import { Provider } from "react-redux";
import store from "./Store";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import Link from "next/link";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <Provider store={store}>
      <div id="wd-lab4" className="container-fluid">
        <h2>Lab 4</h2>
        <Link href="/Labs/Lab4/ReduxExamples" className="btn btn-primary mb-3">
          Redux Examples
        </Link>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
      </div>
    </Provider>
  );
}