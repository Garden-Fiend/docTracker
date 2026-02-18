import { useState } from "react";
import {
  travelAuthorizationForm,
  documentRequestForm,
  contactForm,
  customForm,
} from "../testdata/formLib";
import FormlessForm from "../components/dyForm";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
export default function DocumentBuilderPage() {
  const [docType, setDocType] = useState();
  const navigate = useNavigate();

  function toggleDocType(type) {
    setDocType(type);
  }

  return (
    <div className="text-black font-mono">
      <p className="text-center m-10 text-2xl font-bold">
        Create your Document
      </p>

      <div className=" space-y-5 p-4 ">
        <div className="place-self-center border-2 p-4 w-1/2 items-center flex justify-left gap-4">
          <div>
            <p>Document Name</p>
            <input type="text" className="border-2 p-1 w-full"></input>
          </div>
          <div>
            <p>Document Type</p>
            <select
              className="border-2 p-2 w-full text-black"
              onChange={(e) => toggleDocType(e.target.value)}
            >
              <option value="Select">Select Type</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B </option>
              <option value="Type C">Type C</option>
              <option value="Custom Type">Custom Type</option>
            </select>
          </div>
          <div>
            <p>Create Custom Document</p>
            <div className="border-2 p-2 rounded-xl hover:scale-105">
              <FileText
                onClick={() => navigate("/FormBuilder")}
                className="place-self-center"
              ></FileText>
            </div>
          </div>
        </div>

        <div className="w-1/2 place-self-center border-2">
          {docType === "Type A" && (
            <FormlessForm formDefinition={contactForm}></FormlessForm>
          )}
          {docType === "Type B" && (
            <FormlessForm formDefinition={documentRequestForm}></FormlessForm>
          )}
          {docType === "Type C" && (
            <FormlessForm
              formDefinition={travelAuthorizationForm}
            ></FormlessForm>
          )}
          {docType === "Custom Type" && <FormlessForm
          formDefinition={customForm}
          ></FormlessForm>}

          {docType !== "Select" && (
            <div className="flex gap-2  p-4 place-self-end">
              <button
                onClick={() => navigate("/MainTable")}
                type="button"
                className="border-2  rounded-2xl p-1 hover:scale-105 w-20"
              >
                Cancel
              </button>

              <button
                className="hover:scale-105 border-2  rounded-2xl p-1 w-20"
                onClick={() => {
                  window.alert(
                    "Document Saved Successfully",
                    setPageView("adminView"),
                  );
                }}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
