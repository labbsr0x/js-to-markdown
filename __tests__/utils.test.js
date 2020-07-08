//const Utils = require('../src/utils');
const CommonUtils = require("../src/utils/common");
const ConfigUtils = require("../src/utils/configValidation");
const PropTypeParse = require("../src/propTypesToTable");
const mockPropType = require("./mocks/mockPropTypes");
const mockPropTypeResult = require("./mocks/mockPropTypesResult");
const { italic } = require("colors");

global.globalConfiguration = {
  input: "./mocks",
  output: "./mocks/",
};

describe("Testing Utils functions", () => {
  it("Test function isValidDirectoriesProps with invalid input directory", () => {
    globalConfiguration.input = "./notExistDir";
    const result = ConfigUtils.isValidDirectoriesProps();
    expect(result).toEqual(false);
  });
  it("Test function isValidDirectoriesProps with invalid output directory", () => {
    globalConfiguration.input = "./__tests__"; //valid directory
    globalConfiguration.output = "./notExistDir";
    const result = ConfigUtils.isValidDirectoriesProps();
    expect(result).toEqual(false);
  });
  it("Test function isValidDirectoriesProps with valid directories", () => {
    globalConfiguration.input = "./__tests__";
    globalConfiguration.output = "./__tests__/";
    const result = ConfigUtils.isValidDirectoriesProps();
    expect(result).toEqual(true);
  });

  it("Test function createIndexFilePath", () => {
    const result = CommonUtils.createIndexFilePath();
    expect(result).toEqual(globalConfiguration.output + "index.js");
  });

  it("Test function createMDFilePath", () => {
    globalConfiguration.output = "./__tests__/";
    const resultCase1 = CommonUtils.createMDFilePath("Welcome");
    expect(resultCase1).toEqual(globalConfiguration.output + "Welcome.md");

    globalConfiguration.outputJsMarkdown = true;

    const resultCase2 = CommonUtils.createMDFilePath("Welcome");
    expect(resultCase2).toEqual(globalConfiguration.output + "Welcome.md.js");
  });

  it("Test function treatConfigurationProps", () => {
    let configuration = {
      input: "./__tests__",
      output: "./__tests__/",
    };

    const resultCase1 = ConfigUtils.treatConfigurationProps(configuration);
    expect(resultCase1.input).toEqual("./__tests__/");
    expect(resultCase1.output).toEqual("./__tests__/");
    expect(resultCase1.subfolders).toEqual(true); //default value
    expect(resultCase1.outputJsMarkdown).toEqual(false); //default value

    configuration = {
      input: "./__tests__/",
      output: "./__tests__",
      subfolders: false,
      outputJsMarkdown: true,
    };

    const resultCase2 = ConfigUtils.treatConfigurationProps(configuration);
    expect(resultCase2.input).toEqual("./__tests__/");
    expect(resultCase2.output).toEqual("./__tests__/");
    expect(resultCase2.subfolders).toEqual(false);
    expect(resultCase2.outputJsMarkdown).toEqual(true);
  });

  it("Test Generating proptypes table", () => {
    const resultObject = PropTypeParse.parseProptypeToMDTable(mockPropType);

    const resultAsString = resultObject
      .join("")
      .replace(/ /g, "")
      .replace(/ /g, "");
    const mockResultAsString = mockPropTypeResult
      .join("")
      .replace(/ /g, "")
      .replace(/ /g, "");
    expect(resultObject.length).toEqual(mockPropTypeResult.length);
    expect(resultAsString).toMatch(mockResultAsString);
  });

  it("Test the getComponentNameWithRegex function", () => {
    const declarations = [
      "function ComponentName",
      "class ComponentName",
      "export function ComponentName",
      "export default function ComponentName",
      "export class ComponentName",
      "export default class ComponentName",
    ];

    declarations.forEach((declaration) => {
      expect(CommonUtils.getComponentNameWithRegex(declaration)).toEqual(
        "ComponentName"
      );
    });

    expect(CommonUtils.getComponentNameWithRegex(undefined)).toEqual(undefined);
    expect(CommonUtils.getComponentNameWithRegex("")).toEqual(undefined);
  });
});
