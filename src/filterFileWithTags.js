const TAGS = require("./constants/tags");
const MDParseLine = require("./utils/mdParseLine");

const filterFileWithTags = (fileData) => {
  const fileByTags = {
    IGNORE: false,
    CODEALL: false,
    MDLINES: [],
    NOTAGSRESULT: [],
  };

  const fileLinesInArray = fileData.split(/\r?\n/);

  const FLAGS = {
    isCodeBlockAll: false,
    isCodeBlock: false,
    isRenderReturnBlock: false,
    parentesisGroupCount: 1,
    hasOtherTag: false,
  };

  if (fileLinesInArray[0].includes(TAGS.IGNORE)) {
    fileByTags.IGNORE = true;
    return fileByTags;
  }

  if (fileLinesInArray[0].includes(TAGS.CBALL)) {
    fileByTags.CODEALL = true;
    FLAGS.isCodeBlockAll = true;
    fileByTags.MDLINES.push(MDParseLine.getCodeBlockStart());
  }

  fileLinesInArray.forEach((line) => {
    if (isToCodeBlockAll(FLAGS, line)) {
      FLAGS.hasOtherTag = true;
      line = MDParseLine.escapeJSCaracthersInLIne(line);
      fileByTags.MDLINES.push(MDParseLine.lineAsCode(line));
    } else if (isLineWithCodeBlockStartFlag(line)) {
      FLAGS.isCodeBlock = true;
      FLAGS.hasOtherTag = true;
      fileByTags.MDLINES.push(MDParseLine.getCodeBlockStart());
    } else if (isLineWithCodeBlockEndFlag(line)) {
      FLAGS.isCodeBlock = false;
      fileByTags.MDLINES.push(MDParseLine.getCodeBlockEnd());
    } else if (isLineWithCommentsInFirstPosition(line)) {
      fileByTags.NOTAGSRESULT.push(MDParseLine.lineAsMarkdown(line));
      fileByTags.MDLINES.push(MDParseLine.lineAsMarkdown(line));
    } else if (isLineInsideCodeBlock(FLAGS, line)) {
      line = MDParseLine.escapeJSCaracthersInLIne(line);
      fileByTags.MDLINES.push(MDParseLine.lineAsCode(line));
    } else if (fileHasNoOtherTag(FLAGS, line)) {
      line = MDParseLine.escapeJSCaracthersInLIne(line);
      fileByTags.NOTAGSRESULT.push(MDParseLine.lineAsCode(line));
    }
  });

  if (FLAGS.hasOtherTag) {
    fileByTags.NOTAGSRESULT = [];
  } else {
    fileByTags.NOTAGSRESULT.unshift(MDParseLine.getCodeBlockStart());
    fileByTags.NOTAGSRESULT.push(MDParseLine.getCodeBlockEnd());
  }

  if (fileByTags.CODEALL) {
    fileByTags.MDLINES.push(MDParseLine.getCodeBlockEnd());
  }

  const fileByTagsWithout = removeLastAddCharIfExists(fileByTags);

  return fileByTagsWithout;
};

const isToCodeBlockAll = (FLAGS, line) => {
  return FLAGS.isCodeBlockAll && line !== "" && !line.includes(TAGS.CBALL);
};

const isLineWithCodeBlockStartFlag = (line) => {
  return line.includes(TAGS.CBSTART);
};

const isLineWithCodeBlockEndFlag = (line) => {
  return line.includes(TAGS.CBEND);
};

const isLineInsideCodeBlock = (FLAGS, line) => {
  return FLAGS.isCodeBlock && line !== "";
};

const isLineWithCommentsInFirstPosition = (line) => {
  const commentsRegex = RegExp(/^\s*\/\//);

  if (commentsRegex.test(line)) {
    return !isTagLine(line);
  }

  return false;
};

const isTagLine = (line) => {
  return (
    TAGS[line.replace("//", "").replace("@", "").toUpperCase()] !== undefined
  );
};

const fileHasNoOtherTag = (FLAGS, line) => {
  return (
    !FLAGS.hasOtherTag &&
    !FLAGS.isCodeBlockAll &&
    !isLineWithCodeBlockStartFlag(line) &&
    !isLineWithCodeBlockEndFlag(line) &&
    !isLineWithCommentsInFirstPosition(line) &&
    !isLineInsideCodeBlock(FLAGS, line) &&
    !FLAGS.isCodeBlock &&
    line !== ""
  );
};

const removeLastAddCharIfExists = (fileByTags) => {
  const localArrayFilesByTag = { ...fileByTags };
  const { MDLINES, NOTAGSRESULT } = localArrayFilesByTag;

  if (MDLINES && MDLINES.length > 0) {
    MDLINES[MDLINES.length - 1] = MDLINES[MDLINES.length - 1].replace(
      /\+\s*$/,
      ""
    );
  }

  if (NOTAGSRESULT && NOTAGSRESULT.length > 0) {
    NOTAGSRESULT[NOTAGSRESULT.length - 1] = NOTAGSRESULT[
      NOTAGSRESULT.length - 1
    ].replace(/\+\s*$/, "");
  }

  return localArrayFilesByTag;
};

module.exports = filterFileWithTags;
