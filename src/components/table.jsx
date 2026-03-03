import { Link2, Search, SendHorizonal, Trash } from "lucide-react";
export default function TableComponent({ headerContent, bodyContent}) {

 
  return (
    <div className="w-full relative">
     

      <table className="border-2 mt-20">
        <thead className="bg-red-900 text-yellow-50 sticky">
          <tr>
            {headerContent.map((header) => (
              <th className="p-2">{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bodyContent.map((data) => (
            <tr>
              {Object.values(data).map((cell) => (
                <td className="p-4 border-2">{cell}</td>
              ))}
              <td className="p-4 border-2">
                <div className="flex gap-2">
                  <Trash></Trash>
                  <Link2></Link2>
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
