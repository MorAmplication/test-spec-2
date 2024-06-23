import { Muly as TMuly } from "../api/muly/Muly";

export const MULY_TITLE_FIELD = "name";

export const MulyTitle = (record: TMuly): string => {
  return record.name?.toString() || String(record.id);
};
