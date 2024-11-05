# Configure TypeScript

## 1. Generate a Configuration File for TypeScript
To initialize a TypeScript configuration file, open the terminal and run the following command:

```bash
tsc --init


## Set Up a Root Directory for the TypeScript Compiler

Open the tsconfig.json file, locate the "rootDir" option, uncomment it, and set the value to the desired directory path where your TypeScript source files are located. Example : "rootDir": "./src"


### Set Up an Output Directory for the TypeScript Compiler

In tsconfig.json, find the "outDir" option, uncomment it, and set the value to the directory where you want the compiled JavaScript files to be output. Example :
"outDir": "./dist"


## Set the JavaScript Version of Output Files

To specify the JavaScript version for the compiled files, locate the "target" option in tsconfig.json and set it to your desired JavaScript version.
