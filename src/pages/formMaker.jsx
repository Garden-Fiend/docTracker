import { useState } from "react";
import { Trash, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function FormConstructorPage() {
  const questionStructure = {
    id: crypto.randomUUID(),
    title: "",
    description:"",
    fields: [
      {
        id: crypto.randomUUID(),
        type: "text",
        label: "Enter a question",
        options: [{ id: crypto.randomUUID(), text: "" }],
        required: true,
      },
    ],

    responses: [],
  };

  const [document, setDocument] = useState(questionStructure);
  const navigate = useNavigate();

  function addQuestion(type) {
    setDocument((prev) => ({
      ...prev,
      fields: [
        ...prev.fields,
        {
          id: crypto.randomUUID(),
          type: "text",
          label: "Enter a question",
          options:
            type === "radio" ? [{ id: crypto.randomUUID(), text: "" }] : [],
          required: true,
        },
      ],
    }));
  }

  function editQuestion(fieldid, newText) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.map((question) => {
        return question.id === fieldid
          ? { ...question, label: newText }
          : question;
      }),
    }));
  }

  function editAnswerType(fieldid, answerType) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.map((question) => {
        return question.id === fieldid
          ? { ...question, type: answerType }
          : question;
      }),
    }));
  }

  function deleteQuestion(fieldId) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.filter((deleted) => deleted.id != fieldId),
    }));
  }

  function addOption(questionId) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: [...question.options, { id: crypto.randomUUID() }],
            }
          : question,
      ),
    }));
  }

  function editOption(questionId, optionId, newText) {
    setDocument((prev) => ({
      ...prev,

      fields: prev.fields.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.map((option) =>
                option.id === optionId
                  ? { id: optionId, text: newText }
                  : option,
              ),
            }
          : question,
      ),
    }));
  }

  function deleteOption(questionId, optionId) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.filter(
                (remaining) => remaining.id != optionId,
              ),
            }
          : question,
      ),
    }));
  }

  function setDocumentName(newTitle) {
    setDocument((prev) => ({
      ...prev,
      title: newTitle,
    }));
  }

  function saveDocument() {
    console.log(document);
  }

  function toggleRequired(questionId) {
    setDocument((prev) => ({
      ...prev,
      fields: prev.fields.map((question) =>
        question.id === questionId
          ? { ...question, required: !question.required }
          : question,
      ),
    }));
  }

  function addDescription(text){
    setDocument((prev)=> ({
      ...prev, description:text
    }))
  }

  return (
    <div className="text-black font-mono w-1/2 place-self-center">
      <div className="mt-10 border-2 p-2 mx-2 bg-red-900 text-amber-50">
        <p>Document Name</p>
        <input
          className="border-2 p-2 w-full"
          onChange={(e) => setDocumentName(e.target.value)}
        ></input>
      </div>
      <div className="border-2 p-2 m-2">
        <textarea className="w-full overflow-auto  " placeholder="add a description" onChange={(e)=> addDescription(e.target.value)}>

        </textarea>
      </div>
      {document.fields.map((question) => (
        <div
          className="items-center p-4 relative bg-white border-2 m-2 rounded-xl"
          key={question.id + question.id}
        >
          <X
            className="place-self-end m-2 absolute top-0 right-0"
            onClick={() => deleteQuestion(question.id)}
          ></X>
          <div className="border-2 p-4 mt-6">
            <input
              placeholder="Enter a question"
              className="w-full border-b-2 p-2"
              type="text"
              onChange={(e) => editQuestion(question.id, e.target.value)}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <div className="py-4">
              <p>Choose Answer type</p>
              <select
                className="border-2 p-2"
                onChange={(e) => editAnswerType(question.id, e.target.value)}
              >
                <option value={"text"}>Text</option>
                <option value={"radio"}>Radio</option>
                <option value={"date"}>Date</option>
              </select>
            </div>

            <div>
              <p
                className={`${question.required ? "text-green-500 font-bold" : "text-black"}`}
              >
                Required
              </p>
              <div className="border-2 rounded-2xl p-1">
                <div
                  className={`${question.required ? "bg-green-500 place-self-end h-5 rounded-full w-1/2" : "bg-red-900 h-5 rounded-full w-1/2"}`}
                  onClick={() => toggleRequired(question.id)}
                ></div>
              </div>
            </div>
          </div>
          {question.type === "text" && (
            <div>
              <input type="text" className="border-b-2 w-full"></input>
            </div>
          )}{" "}
          {question.type === "date" && (
            <div>
              <input type="date" className="border-b-2 w-full"></input>
            </div>
          )}
          {question.type === "radio" && (
            <div>
              <div className="mb-4">
                {question.options.map((option, index) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-2 justify-between mb-4"
                  >
                    <input
                      key={index}
                      placeholder="Insert Option"
                      className="border-b-2 p-2 w-full"
                      onChange={(e) =>
                        editOption(question.id, option.id, e.target.value)
                      }
                    ></input>
                    <div className="border-2 p-2 rounded-xl">
                      <Trash
                        onClick={() => deleteOption(question.id, option.id)}
                      ></Trash>
                    </div>
                  </div>
                ))}
              </div>
              <div className="justify-center w-full flex">
                <button
                  className="border-2 p-2 rounded-xl"
                  onClick={() => addOption(question.id)}
                >
                  Add Option
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="place-self-center m-5">
        <button
          className="border-2 p-2 rounded-xl"
          onClick={() => addQuestion()}
        >
          Add Question
        </button>
      </div>
      <div className="mt-2 p-4 flex space-x-2 border-t-2 w-full justify-end">
        <div>
          <button
            className="border-2 rounded-xl p-2"
            onClick={() => navigate("/DocBuilder")}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="border-2 rounded-xl p-2 bg-red-900 text-amber-50"
            onClick={() => saveDocument()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
