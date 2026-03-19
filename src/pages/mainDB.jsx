import { Link2, Search, X } from "lucide-react";
import TableComponent from "../components/table";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

export default function MainTablePage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [currentLink, setCurrentLink] = useState();
  const [formlist, setFormList] = useState();

  function createDocument() {
    navigate("/DocBuilder");
  }

  async function copyToClip(link) {
    try {
      await navigator.clipboard.writeText(link);
      window.alert("Link Copied");
    } catch (error) {
      window.alert(error);
    }
  }

  useEffect(() => {
    async function getForms() {
      const { error, data } = await supabase.from("Forms").select("*");

      if (error) {
        console.log(error);
        return;
      }

      setFormList(data);
    }

    getForms();
  }, []);

  console.log(formlist);

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
        {modal && (
          <div className="fixed z-100 border-2 bg-white place-self-center top-100 w-[60%]">
            <div className="flex items-center bg-red-900 justify-between p-2">
              <p className="bg-red-900 text-amber-50">Share this Document</p>
              <X className="text-amber-50" onClick={() => setModal(false)}></X>
            </div>

            <div className="flex items-center justify-between p-2">
              <p>{currentLink}</p>
              <Link2 onClick={() => copyToClip(currentLink)}></Link2>
            </div>
          </div>
        )}
        {formlist && (
          <TableComponent
            setModal={setModal}
            setCurrentLink={setCurrentLink}
            headerContent={Object.keys(formlist[0]).map(
              (headerCells) => headerCells,
            )}
            bodyContent={formlist}
          ></TableComponent>
        )}
      </div>
    </div>
  );
}
