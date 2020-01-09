import parsed from "../parsed";

export default (strings, ...values) => about => {
  about.doc = {
    raw: String.raw(strings, ...values)
    // TODO: implement parsing
    // parsed: parsed(String.raw(strings, ...values))
  };
  return about;
};
