# BMO-3550

To use this folder, unzip or clone the root into your working directory.

## Top Level Folders:

### Cloudant
This folder contains the sample JSON data file that gets uploaded into your Cloudant database instance.

### MFF
This is the MobileFirst Foundation code folder. This contains the working final version of the **empApp** application.

#### /adapters
Contains the *employeeAdapter* code that accesses the API from APIConnect.  There is also a *UserLogin* adapter, but that is not used in this version of the app.

#### /empApp
This is the Ionic/Angular v2 mobile application code.  It does not contain the MobileFirst SDK, nor the Cordova mobile platforms.
Enter the following commands to prep the application for deployment:

```bash
  cd empApp
  
  mfpdev server add  /* register your Bluemix instance of Mobile Foundation.
    					Make this the default MFF server. */
  
  cordova platform remove ios
  cordova platform add ios   /* to get the latest version */
  cordova platform add android
  cordova plugin add cordova-plugin-mfp
  
  mfpdev app register  /* registers the app to Bluemix */
  
  cordova prepare  
```
 
### /snippets
There are three subfolders with code snippets:
 
#### /APIC
This contains two Swagger (OpenAPI) .yml files - one for the EmployeeDirectory API and one for the EmployeeAPIs product.
 
#### /Cloudant
This contains the two Javascript functions to create the Cloudant views.
 
#### /MFF
**/adapters** folder contains the adapter.xml and employeeAdapter-impl.js files for the employeeAdapter.
 
**/empApp.v1** is a working Ionic2/Angular2 application that does NOT use any of the Bluemix services. The data comes from a hard-coded JSON file. This can be used as a design guide to explore the Ionic interface.
 
 