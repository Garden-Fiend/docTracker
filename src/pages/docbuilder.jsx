import { useEffect, useState } from "react";
import {
  travelAuthorizationForm,
  documentRequestForm,
  contactForm,
  customForm,
} from "../testdata/formLib";
import FormlessForm from "../components/dyForm";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import { supabase } from "../lib/supabase";
export default function DocumentBuilderPage() {
  const [docType, setDocType] = useState();
  const navigate = useNavigate();
  const [formlist, setFormList] = useState(null);
  const [currentForm,setCurrentForm] = useState();

  function toggleDocType(type) {
    setDocType(type);
  }

  useEffect(() => {
    async function getForms() {
      const { error, data } = await supabase.from("Forms").select("*");

      if (error) {
        console.log(error);
        return;
      }

      console.log(data);
      setFormList(data);
    }

    reconstructForm();
  }, []);

  async function reconstructForm() {
    const { data: formdata } = await supabase.from("Forms").select("*");
    const { error, data } = await supabase.from("Questions").select("*");
    const { data: optiondata } = await supabase.from("Options").select("*");

    console.log(formdata);
    console.log(data);
    console.log(optiondata);

    const barelyConstructed = {
      id: formdata[0].id,
      title: formdata[0].Title,
      fields: data,
    };

    const optsToQuest = barelyConstructed.fields.map((question) => ({
      ...question,
      options: optiondata.filter((option) => option.QuestionId === question.id),
    }));

    const finalBuild = {
      id: barelyConstructed.id,
      title: barelyConstructed.title,
      fields: optsToQuest,
    };

    console.log(finalBuild);
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
              <option value="select">Select</option>
              <option value="Type B">Type B</option>
              {formlist &&
                formlist.map((form) => (
                  <option value={form.id} key={form.id}>
                    {form.Title}
                  </option>
                ))}
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
          {docType === "Custom Type" && (
            <FormlessForm formDefinition={customForm}></FormlessForm>
          )}

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
