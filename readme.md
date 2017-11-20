# ext-angular-generator

## PreRequisites:

* Node.js - https://nodejs.org/  (choose current)
* Angular CLI - npm install -g @angular/cli@latest
* Licenced copy of Sencha Ext JS 6.5.2 Premium

## Running Example:

http://se.sencha.com/ExtAngularExample

## Instructions on how to get the sample running (run in terminal window)

* mkdir ext-angular-examples
* cd ext-angular-examples
* git clone https://github.com/mgusmano/ext-angular-generator
* npm install -g @angular/cli@latest

For Classic:
* ng new Classic --minimal
* cp -R ext-angular-generator/ext-angular/classic/src/* Classic/src

For Modern:
* ng new Modern --minimal
* cp -R ext-angular-generator/ext-angular/modern/src/* Modern/src

For Modern or Classic:
* cd to either Modern or Classic
* npm install --save bootstrap@latest
* copy the Ext JS 6.5.2 framework to a folder named src/ext-6.5.2
	- get the Ext JS 6.5.2 framework from https://support.sencha.com
	- also get the Ext Premium Addons and copy them to the packages folder of the framework
	- only need the build and packages folders
* replace these sections in .angular-cli.json

		"assets": [
			"ext-6.5.2",
			"assets",
			"favicon.ico"
		],

		"styles": [
			"../node_modules/bootstrap/dist/css/bootstrap.css",
			"styles.css"
		],

* ng serve
