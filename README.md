# publishing-packages-npm
This repo contains working required to publish your code as package to npm. It also contains testing of this packages by installing them and importing them. Necessary steps are mentioned in this repo

## Benefits of Publishing Packages:
By publishing packages to npm, one can saves time and focus on its work by using code written by other. Similarly people can do live coding in a sense that they can directly use teammates code by installing  his publish package

## Scope Packages:
Installing packages within working environment only

### Creating Package:

1. Create account on npm
2. Create folder with package name
3. Inside that folder, run -> npm init --scope=@my-username

* Example:

  npm init --scope=@muneebwaseem78 (create package.json file)

4. Create some index.ts file and write any function
5. npm i @types/node (optional)
6. tsc index.ts

###  Publishing Package:

1.	npm adduser
2.	npm publish --access public  (package will be created with @username/foldername)

### Testing package in some other folder

1.	Create folder
2.	Inside that folder, run npm init first to get package.json
3.	Install package (npm i @muneebwaseem78/muneeb-npm-package@1.0.0 (version optional as only first version))
4.	Import function from package 


* Example: 

  @muneebwaseem78/muneeb-npm-package@1.0.0

## Global Package (CLI):
It is intalled globally in your system and can be access from anywhere within the system and RUN using CLI

1.	Create folder (muneeb-npm-global)
2.	npm init
3.	npm i @types/node
4.	create folder names ‘lib’ and make files in it (greet.ts). Make sure function and filename should be same
5.	first do tsc in lib folder to generate .js files (tsc lib/greet.ts)
6.	create another bin folder at root
7.	In bin folder, create index.ts file and call function in that file 

Now till now this cannot be run from cmd, for that we use npm package process
So bin index.ts file will be:


**Make sure to add below command at first line of index.ts in bin folder** 
* #!/usr/bin/env node

now time to compile it:
tsc bin/index.ts
node bin/index.js a b   (it will return [‘a’, ‘b’])

8.	Now to tell system to run index.ts file under bin directory, we need to do some changes in package.json file (we need to update path of main and add bin key.
9.	Make sure to compile index.ts file in bin folder before publishing (node bin/index.ts)
10.	Now publish package (npm publish --access public)
11.	After that install package globally in your system with –g 

* Example:

  npm i muneeb-package-global@1.0.0 –g

12.	Now Run CLI with name passed in bin under package.json file 

### To Update Package:

1.	Update your work in either lib folder (make sure to do tsc lib/index.ts) or in bin folder in index.ts file (make sure to do compile tsc bin/index.ts)
2.	Make sure to compile both files
3.	Now in package.json, update version under version key like 1.0.1.
4.	Now publish package again (npm publish --access public)
5.	Again install package 

* Example:

  npm i muneeb-package-global@1.0.1 –g


