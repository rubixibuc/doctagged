import subject from "./index";

describe("doctag", () => {
  it("should execute without error", () => {
    const variable = "variable";

    subject`DOC ${variable} TAG`(() => {});
  });

  it("should add doc.raw property to argument", () => {
    const variable = "variable";

    expect(subject`DOC ${variable} TAG`(() => {}).doc.raw).toEqual(
      "DOC variable TAG"
    );
  });
});
