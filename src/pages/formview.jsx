import { customForm, travelAuthorizationForm } from "../testdata/formLib";
import FormlessForm from "../components/dyForm";
import { useState } from "react";
export default function FormView() {
  const [answered, setAnswered] = useState(false);
  function submitResponse() {
    window.alert("Your'e answer has been recorded thank you");
    console.log(response);
  }

  const [response, setResponse] = useState({});

  return (
    <div>
      {!answered ? (
        <div className="font-mono text-black p-4 w-1/2 place-self-center mt-20 flex flex-col">
          <FormlessForm
            formDefinition={customForm}
            setResponse={setResponse}
          ></FormlessForm>

          <button
            className="border-2 p-2 rounded-2xl self-end hover:scale-105"
            onClick={() => submitResponse()}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="font-mono text-black flex justify-center h-dvh items-center">
          <p className="border-b-2" onClick={() => setAnswered(false)}>
            Thank you for answering the form
          </p>
        </div>
      )}
    </div>
  );
}
