import { customForm, travelAuthorizationForm } from "../testdata/formLib";
import FormlessForm from "../components/dyForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
export default function FormView() {
  const { formId } = useParams();
  const [currentForm,setCurrentForm] = useState();
  const [answered, setAnswered] = useState(false);

   async function reconstructForm(formId) {
      try {
        const { data: formdata, error: formError } = await supabase
          .from("Forms")
          .select("*")
          .eq("id", formId);
        if (formError) {
          console.log(formError);
          throw error;
        }
  
        const { error, data } = await supabase
          .from("Questions")
          .select("*")
          .eq("FormId", formId);
        if (error) {
          console.log(error);
          throw error;
        }
        const { data: optiondata, error: optionError } = await supabase
          .from("Options")
          .select("*");
  
        if (optionError) {
          console.log(optionError);
          throw optionError;
        }
  
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
          options: optiondata.filter(
            (option) => option.QuestionId === question.id,
          ),
        }));
  
        const finalBuild = {
          id: barelyConstructed.id,
          title: barelyConstructed.title,
          fields: optsToQuest,
        };
  
      
        setCurrentForm(finalBuild);
      } catch (error) {
        console.log(error);
      }
    }



 

  useEffect(()=>{
   reconstructForm(formId);
  },[]);

  function submitResponse() {
    window.alert("Your'e answer has been recorded thank you");
    console.log(response);
  }

  const [response, setResponse] = useState({});

  return (
    <div>
      {!answered ? (
        <div className="font-mono text-black p-4 w-1/2 place-self-center mt-20 flex flex-col">{currentForm ?
          <FormlessForm
            formDefinition={currentForm}
            setResponse={setResponse}
          ></FormlessForm> : <div className="animate-bounce"><p>
            010
            </p></div>}

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
