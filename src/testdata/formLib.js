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
