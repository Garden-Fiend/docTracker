import { Search } from "lucide-react";
import TableComponent from "../components/table";
import { mockDocuments } from "../testdata/mockdata";
import { useNavigate } from "react-router-dom";
export default function MainTablePage() {
  const navigate = useNavigate();

  function createDocument() {
    navigate("/DocBuilder")
  }
  return (
    <div className="text-black font-mono h-dvh flex flex-col mt-10">
      <p className=" text-center text-2xl font-bold fixed top-0 place-self-center w-full bg-[#ecebd3] z-100 p-4">
        Documents
      </p>

      <div className="m-4 place-self-center">
        {/* <table className="border-2 p-2">
              <tr className="bg-red-900 text-yellow-50">
                <th className="p-2">ID</th>

                <th className="p-2"> Title</th>

                <th className="p-2"> Type</th>

                <th className="p-2"> Responses</th>

                <th className="p-2"> Status</th>
              </tr>
              <tr>
                <td className="border-2 p-2">001</td>
                <td className="border-2 p-2">Contract Renewal</td>
                <td className="border-2 p-2">Contract</td>
                <td className="border-2 p-2">0</td>
                <td className="border-2 p-2">Unfinished</td>
              </tr>
            </table>*/}

        <div className="z-100  flex gap-4 place-self-start top-15 w-[90%] items-center fixed bg-[#ecebd3] py-2">
          <p className="font-bold text-xl">TableName</p>
          <div className="flex items-center gap-2 border-2 p-1 w-1/2">
            <Search></Search>
            <input type="text"></input>
          </div>

          <div>
            <button
              type="button"
              onClick={() => createDocument()}
              className="border-2 p-2 rounded-2xl hover:p-3 transition-all"
            >
              Create Document
            </button>
          </div>
        </div>
        <TableComponent
          headerContent={[
            "ID",
            "Title",
            "Type",
            "Date Sent",
            "Deadline",
            "Status",
            "Response",
          ]}
          bodyContent={mockDocuments}
        ></TableComponent>
      </div>
    </div>
  );
}
