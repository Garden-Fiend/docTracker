export default function FormlessForm({ formDefinition, setResponse }) {
  return (
    <form>
      <p className="border-b-2 bg-red-900 text-amber-50 p-2">
        {formDefinition.title}
      </p>
      {formDefinition.fields.map((field) => (
        <div className="flex flex-col p-2" key={field.id}>
          <label>{field.label || field.QuestionText}</label>

          {(field.type === "paragraph" || field.Type === "paragraph") && <p>{field.text||field.QuestionText}</p>}

          {(field.type === "text" || field.Type === "text") && (
            <input
              type="text"
              className="border-2 p-2"
              onChange={(e) =>
                setResponse((prev) => ({ ...prev, [field.id]: e.target.value }))
              }
            ></input>
          )}

          {(field.type === "date" || field.Type === "date") && (
            <input
              type="date"
              className="border-2 p-2"
              onChange={(e) =>
                setResponse((prev) => ({ ...prev, [field.id]: e.target.value }))
              }
            ></input>
          )}

          {(field.type === "textarea" || field.Type === "textarea")&& (
            <textarea
              className="border-2 p-2"
              onChange={(e) =>
                setResponse((prev) => ({ ...prev, [field.id]: e.target.value }))
              }
            ></textarea>
          )}

          {(field.type === "select" || field.type === "radio" || field.Type === "select" || field.Type === "radio")  && (
            <select
              className="border-2 p-2"
              onChange={(e) =>
                setResponse((prev) => ({ ...prev, [field.id]: e.target.value }))
              }
            >
              {field.options.map((option) => (
                <option>{option.label || option.text ||option.OptionText}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </form>
  );
}
