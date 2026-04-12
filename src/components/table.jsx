import { Link2, Search, SendHorizonal, Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function TableComponent({
  headerContent,
  bodyContent,
  setModal,
  setCurrentLink,
}) {
  function generateLink(id) {
    setCurrentLink(`${window.location.origin}/FormView/${id}`);
    setModal(true);
  }

  const navigate = useNavigate();
  const [editCell, setEditCell] = useState({});

  return (
    <div className="w-full relative">
      <table className="border-2 mt-20">
        <thead className="bg-red-900 text-yellow-50 sticky">
          <tr>
            {headerContent.map((header) => (
              <th className="p-2" key={header}>
                {header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bodyContent.map((data) => (
            <tr key={data.id}>
              {Object.entries(data).map(([column, cell]) => (
                <td
                  className={`p-4 border-2`}
                  key={cell}
                  onClick={() => {
                    if (column != "Responses") {
                      setEditCell({ id: data.id, column: column });
                      return;
                    }

                    navigate(`/Responses/${data.id}`);
                  }}
                >
                  {editCell.id === data.id && editCell.column === column ? (
                    <input placeholder={cell}></input>
                  ) : (
                    <p
                      className={`${column === "Responses" ? "hover:text-blue-400" : " "}`}
                    >{`${column === "created_at" ? new Date(cell).toDateString() : cell}`}</p>
                  )}
                </td>
              ))}
              <td className="p-4 border-2">
                <div className="flex gap-2">
                  <Trash></Trash>
                  <Link2
                    className="hover:scale-105"
                    onClick={() => generateLink(data.id)}
                  ></Link2>
                  <SendHorizonal></SendHorizonal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
