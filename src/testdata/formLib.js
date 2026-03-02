export const contactForm = {
  title: "Contact Information",
  fields: [
    {
      id: "fullName",
      type: "text",
      label: "Full Name",
      required: true,
    },
    {
      id: "email",
      type: "text",
      label: "Email Address",
      required: true,
    },
    {
      id: "message",
      type: "textarea",
      label: "Message",
    },
  ],
};

export const documentRequestForm = {
  title: "Document Request",
  fields: [
    {
      id: "requesterName",
      type: "text",
      label: "Requester Name",
      required: true,
    },
    {
      id: "documentType",
      type: "select",
      label: "Document Type",
      required: true,
      options: [
        { value: "clearance", label: "Barangay Clearance" },
        { value: "residency", label: "Certificate of Residency" },
        { value: "indigency", label: "Certificate of Indigency" },
      ],
    },
    {
      id: "pickupDate",
      type: "date",
      label: "Preferred Pickup Date",
    },
  ],
};
export const travelAuthorizationForm = {
  title: "Travel Authorization",
  fields: [
    {
      id: "intro",
      type: "paragraph",
      text: "Please complete this form accurately. False information may delay processing.",
    },
    {
      id: "applicantName",
      type: "text",
      label: "Applicant Full Name",
      required: true,
    },
    {
      id: "travelDate",
      type: "date",
      label: "Date of Travel",
      required: true,
    },
    {
      id: "destination",
      type: "text",
      label: "Destination",
    },
    {
      id: "notes",
      type: "textarea",
      label: "Additional Notes",
    },
  ],
};


export const customForm = {
  id: "151ed8c7-935a-4c99-a393-f2367da2df96",
  title: "Mock form",
  fields: [
    {
      id: "ba8a4f1d-4646-4b6a-ab8c-0640838614b7",
      type: "text",
      label: "Text Question ?",
      options: [
        {
          id: "c4ddcbfc-02df-483b-8cbf-ceb54026ca7c",
          text: ""
        }
      ],
      required: true
    },
    {
      id: "37a7492f-0078-4a2d-827b-beaeb20e3f25",
      type: "radio",
      label: "Radio Question",
      options: [
        {
          id: "808e08da-c5f9-4d02-a9aa-b3815bb22f9d",
          text: "dadada"
        },
        {
          id: "cbc0bc89-75b6-4805-9fd8-f5e4eb053f45",
          text: "asdada"
        }
      ],
      required: true
    },
    {
      id: "7bb39c10-3cb4-4919-9376-bcd5170e815f",
      type: "date",
      label: "date question ",
      options: [],
      required: true
    }
  ],
  responses: []
};

const reconstructedForm = {
  id: "c4a7e1c4-89c1-46c6-8116-f885f08e7f7a",
  title: "Test Document",
  fields: [
    {
      QuestionText: "What is your name?",
      Type: "text",
      Required: true,
      created_at: "2026-03-02T13:49:25.159496+00:00",
      id: "e6d641d5-e320-4fa0-ba02-b9d49475888a",
      FormId: "c4a7e1c4-89c1-46c6-8116-f885f08e7f7a",
      options: [
        {
          OptionText: "",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "e6d641d5-e320-4fa0-ba02-b9d49475888a",
          id: "b6cb02cb-5b08-41ba-b28b-b773b245ef79"
        }
      ]
    },
    {
      QuestionText: "Choose a pokemon",
      Type: "radio",
      Required: true,
      created_at: "2026-03-02T13:49:25.159496+00:00",
      id: "c8cb26a3-3082-4380-acef-dce547c2ed34",
      FormId: "c4a7e1c4-89c1-46c6-8116-f885f08e7f7a",
      options: [
        {
          OptionText: "Snorlax",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "c8cb26a3-3082-4380-acef-dce547c2ed34",
          id: "48382af2-32cc-4594-9e23-9f26bbe6dc98"
        },
        {
          OptionText: "Pikachu",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "c8cb26a3-3082-4380-acef-dce547c2ed34",
          id: "14c88d89-2c0a-43fa-b3c9-58ca1b9d017d"
        },
        {
          OptionText: "Gengar",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "c8cb26a3-3082-4380-acef-dce547c2ed34",
          id: "d98a61ac-fda5-4840-8940-98b0cc0b7b29"
        }
      ]
    },
    {
      QuestionText: "Pick one",
      Type: "radio",
      Required: true,
      created_at: "2026-03-02T13:49:25.159496+00:00",
      id: "6ae31706-030a-4d9f-8155-8d13dc50c0af",
      FormId: "c4a7e1c4-89c1-46c6-8116-f885f08e7f7a",
      options: [
        {
          OptionText: "Breakfast",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "6ae31706-030a-4d9f-8155-8d13dc50c0af",
          id: "5785954f-c0f9-4f47-9e01-c809e0e438bc"
        },
        {
          OptionText: "Dinner",
          created_at: "2026-03-02T13:49:25.392156+00:00",
          QuestionId: "6ae31706-030a-4d9f-8155-8d13dc50c0af",
          id: "93335663-3dc6-4ce7-97ed-993a7731c7dd"
        }
      ]
    },
    {
      QuestionText: "When was your birthday?",
      Type: "date",
      Required: true,
      created_at: "2026-03-02T13:49:25.159496+00:00",
      id: "88653e76-f2dd-4a72-a72a-19f6d50c7933",
      FormId: "c4a7e1c4-89c1-46c6-8116-f885f08e7f7a",
      options: []
    }
  ]
}