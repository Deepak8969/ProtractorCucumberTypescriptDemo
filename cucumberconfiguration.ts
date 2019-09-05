import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';



export let config: Config = {
  
  capabilities: {
    browserName: 'chrome'
  },

  specs: [ '../Feature/demo.feature' ],

  baseUrl: "https://angularjs.org/",

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect:true,

  framework: 'custom',
  
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    // require step definitions
    tags:"@CalculatorFunctionality",
    format:"json:./report/cucumberreportgenerate.json",
    require: [
      './stepdefination/*.js' // accepts a glob
    ]
  },

  onComplete: () =>{
    var options = {
      theme: 'bootstrap',
      jsonFile: './report/cucumberreportgenerate.json',
      output: './report/cucumberreport.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };

  reporter.generate(options);
    

  }
  
};
