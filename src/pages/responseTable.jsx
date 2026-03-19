import { Table } from "lucide-react";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import TableComponent from "../components/table";
export default function ResponsesTable() {
  const [responseData, setResponseData] = useState();
  const [questions, setQuestions] = useState();
  const { formId } = useParams();

  useEffect(() => {
    async function getResponses() {
      try {
        const { error, data } = await supabase
          .from("Responses")
          .select("*")
          .eq("FormId", formId);

        if (error) {
          throw error;
        }

        const { error: qRetrieveError, data: qData } = await supabase
          .from("Questions")
          .select("*")
          .eq("FormId", formId);

        if (qRetrieveError) {
          throw qRetrieveError;
        }

        console.log(data);
        console.log(qData);

        setQuestions(qData);

        const responselist = Object.groupBy(
          data,
          ({ ResponderId }) => ResponderId,
        );

        function returnQuestion(questionId) {
          const targetQuestion = qData.find(
            (question) => question.id === questionId,
          );

          return targetQuestion ? targetQuestion.QuestionText : "";
        }

        const finalFormat = Object.entries(responselist).map(
          ([responderId, responderResponses]) => ({
            responder: responderId,
            answers: Object.fromEntries(
              responderResponses.map((response) => [
                returnQuestion(response.QuestionId),
                response.ResponseValue,
              ]),
            ),
          }),
        );

        const finalResponseData = finalFormat.map((respondent) => ({
          responder: respondent.responder,
          ...respondent.answers,
        }));

        console.log(finalResponseData);

        setResponseData(finalResponseData);
      } catch (error) {
        console.log(error);
      }
    }

    getResponses();
  }, []);

  return (
    <>
      <div className="mt-15 p-4 w-full items-center flex justify-center">
        <p className="font-bold font-mono text-3xl text-black">
          Responses for form:{formId}
        </p>
      </div>

      <div className="text-black p-4">
        {responseData && responseData.length > 0 && (
          <TableComponent
            headerContent={Object.keys(responseData[0])}
            bodyContent={Object.values(responseData)}
          ></TableComponent>
        )}
      </div>
    </>
  );
}
