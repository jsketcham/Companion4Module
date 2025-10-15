companion-module-wb-aledoc is 72mb, these are the source files that will change 
it is possible that new dependencies and libraries will be added
for now, we have copies of companion-module-wb-aledoc on 2 machines in my office, 
this is a way to keep them in sync. 

Here are the notes so far on setting up a companion 4 project. 


AI Overview
To provide ESLint for a project, follow these steps:
Initialize your project (if not already done):
If you are working in a Node.js project, ensure you have a package.json file. You can create one by running:
Code

    npm init -y
    
install eslint.
Install ESLint as a development dependency in your project:
Code

    npm install eslint --save-dev
    
Or, if using Yarn:
Code

    yarn add eslint --dev

///////////
Checking for ESLint involves verifying its installation, configuration, and operation within your project or environment.
1. Checking for ESLint Installation and Version:
Locally (recommended): Navigate to your project's root directory in the terminal and run:
Code

    npm list eslint
    # or
    yarn list eslint
    # or
    pnpm list eslint
    
    
////// 9/27/25 got generic stopwatch from github ///////

1) stopwatch stable version is available
2) used github to get dev version, yarn, yarn add eslint --dev (to get version right)
3) 'refresh modules list' in Companion GUI, 'dev' version appears as a selection
4) remove folder, restart Companion, 'dev' version is gone
    
'stopwatch' appears in the manifest, we must update the manifest if we want to use an existing module as a starting point
we haven't found out how to change the name to 'jim-foo' and have it show up after 'refresh modules list'

////// build from scratch /////

1) create folder companion-module-jim-foo
2) npm init -y
3) create and edit index.js, prints 'hello world'
4) copy stopwatch/companion/manifest.json to /foo/companion/manifest.json (made the /companion folder)
5) edit manifest.json to replace 'generic' with 'jim', 'stopwatch' with 'foo'. kept all entries, but changed url strings to empty strings.
6) yarn
7) 'refresh modules list' in Companion GUI, shows up as Jim:foo
8) we see that there are no files yet in foo/node_modules, while stopwatch/node_modules has many items

TODO: flesh out files in /src, find out how /node_modules gets its files (yarn, dependencies?)

//// 9/28/25

1) got companion-module-template-js for comparison purposes
2) in directory companion-module-jim-foo:
    copied package.json dependencies,devDependencies from companion-module-template-js package.json
    npm install @companion-module/base -T
    npm install @companion-module/tools
    yarn add eslint --dev
    yarn list --pattern "eslint"
    yarn
    
//// 9/29/25

We tried to modify foo (which has a /src dir) from companion-module-generic-tcp-udp, which doesn't have a /src dir. It did not work.
So, we will go back to creating it from scratch, copying the .js files, and completing a few missing items

1) create directory companion-module-jim-bar
2) in that directory:
    npm init -y
    npm install @companion-module/base -T
    npm install @companion-module/tools
    npm install lodash --save   (lodash has useful utilities, like intersection of two arrays)
    npm install jquery  (trying to get presets to evaluate changes in button text)
    yarn companion-generate-manifest (note that it uses "type": "node22", which does work)
    edit /companion/manifest.json to add
        "manufacturer": "Jim",
        "products": ["Bar"],
    yarn
3) Jim:Bar appears in the list of modules (i.e. is from manifest.json, manufacturer,products)
4) copied .js files from udp
    yarn
5) we do get the config page, and a tcp connection, button works
6) make src directory, move actions.js, config.js to src/, edit index.js to correct the paths, button works
7) added txMidi button, does work
8) 10/6/25: sample preset, action work, but we aren't passing the preset options, so 'trkLE' does not work yet

From AI: In Bitfocus Companion 4, the $(instancename:variablename) syntax, often referred to as the $() function or variable system, is used to access and display the value of a variable within a module's instance.

    





    

