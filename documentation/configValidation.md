 # Config property validation

 # treatConfigurationProps

 Treat the configuration properties defined by user.

 This function sets the default values to props that were not defined by user on cfg file.

 It receives a configuration object, copy it to a local variable, treat values and return a new object with final configuration props.

 ⚠️ This is the only place in the program where you can set the value to a cfg property.

```
exports.treatConfigurationProps = (configuration) => {
  const treatedConfigProps = { ...configuration };
 subfolders default value is true

  if (treatedConfigProps && treatedConfigProps.subfolders === undefined) {
    treatedConfigProps.subfolders = true;
  }
 outputJsMarkdown default value is false

  if (treatedConfigProps && treatedConfigProps.outputJsMarkdown === undefined) {
    treatedConfigProps.outputJsMarkdown = false;
  }
 propTypesToTable default value is false

  if (treatedConfigProps && treatedConfigProps.propTypesToTable === undefined) {
    treatedConfigProps.propTypesToTable = false;
  }
 validate if the input path has '/' in the end

  if (
    treatedConfigProps.input.charAt(treatedConfigProps.input.length - 1) !== "/"
  ) {
    treatedConfigProps.input = treatedConfigProps.input + "/";
  }
 validate if the output path has '/' in the end

  if (
    treatedConfigProps.output.charAt(treatedConfigProps.output.length - 1) !==
    "/"
  ) {
    treatedConfigProps.output = treatedConfigProps.output + "/";
  }
  return treatedConfigProps;
};
```
---

 ## isValideDirectoriesProps

 Validates if the directory set in `input` and `output` configuration properties exists

```
exports.isValideDirectoriesProps = () => {
  if (
    !globalConfiguration.input ||
    globalConfiguration.input === "" ||
    !fs.existsSync(globalConfiguration.input)
  ) {
    commonUtils.logError(
      \`Input directory in config file does not exist (\${globalConfiguration.input}).\`
    );
    return false;
  }
  if (
    !globalConfiguration.output ||
    globalConfiguration.output === "" ||
    !fs.existsSync(globalConfiguration.output)
  ) {
    commonUtils.logError(
      \`Output directory in config file does not exist (\${globalConfiguration.output}).\`
    );
    return false;
  }
  return true;
};
```