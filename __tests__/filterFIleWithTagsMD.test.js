/** Mock for: File with @CBAll tag at beginning */
const mockFileWithCBAllTag = require("./mocks/mockFileWithCBAllTag");
const mockFileWithCBAllTagResult = require("./mocks/mockFileWithCBAllTagResult_MD");
/** Mock for: File with @CBStart and @CBEnd tags */
const mockFileWithCBsTag = require("./mocks/mockFileWithCBsTags");
const mockFileWithCBsTagResult = require("./mocks/mockFileWithCBsTagsResult_MD");
/** Mock for: ile with @ignore tag at beginning */
const mockFileWithIgnoreTag = require("./mocks/mockFileWithIgnoreTag");
/** Mock for: ile with @ignore tag at beginning */
const mockFileWithoutTags = require("./mocks/mockFileWithoutTags");
const mockFileWithoutTagsResult_MD = require("./mocks/mockFileWithoutTagsResult_MD");
const filterFileWithTags = require("../src/filterFileWithTags");

global.globalConfiguration = {
  outputJsMarkdown: false,
};

describe("Markdown - Testing FilterFileWithTags function...", () => {
  it("File with @ignore tag at beginning", () => {
    const resultObject = filterFileWithTags(mockFileWithIgnoreTag);
    expect(resultObject.IGNORE).toEqual(true);
    expect(resultObject.MDLINES).toEqual([]);
    expect(resultObject.NOTAGSRESULT).toEqual([]);
  });
  it("File with @CBAll tag at beginning", () => {
    const resultObject = filterFileWithTags(mockFileWithCBAllTag);
    expect(resultObject.IGNORE).toEqual(false);
    expect(resultObject.MDLINES).toEqual(mockFileWithCBAllTagResult);
    expect(resultObject.NOTAGSRESULT).toEqual([]);
  });
  it("File with @CBStart and @CBEnd tags", () => {
    const resultObject = filterFileWithTags(mockFileWithCBsTag);
    expect(resultObject.IGNORE).toEqual(false);
    expect(resultObject.MDLINES).toEqual(mockFileWithCBsTagResult);
    expect(resultObject.NOTAGSRESULT).toEqual([]);
  });
  it("File with NO tags", () => {
    const resultObject = filterFileWithTags(mockFileWithoutTags);
    expect(resultObject.IGNORE).toEqual(false);
    expect(resultObject.MDLINES).toEqual([
      "Testing the comments in a no tag file\n\n",
    ]);
    expect(resultObject.NOTAGSRESULT).toEqual(mockFileWithoutTagsResult_MD);
  });
});
