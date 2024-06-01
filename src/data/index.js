import { generatePrefixedID } from "../utils/index.js";

const STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
};

const notes = [
  {
    _id: generatePrefixedID(),
    name: "Yasir el Bouazzati",
    description: "Go to the school",
    important: false,
    status: STATUS.PENDING,
    due_date: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
];

export default notes;
