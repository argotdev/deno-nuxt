import { defineCachedEventHandler } from "#imports";
import data from "./dinosaurs.json";

export default defineCachedEventHandler(() => {
  return data;
});
