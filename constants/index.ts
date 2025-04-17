export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card",
  "National Identity Card",
  "Passport",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Youssef Benjelloun",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Amina El Hachimi",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Samira Fassi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Rachid Moumen",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Idriss Alami",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
