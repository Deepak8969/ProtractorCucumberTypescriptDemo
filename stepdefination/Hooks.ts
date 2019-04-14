import { Before, After, Status } from "cucumber";
import { browser } from "protractor";
import { config } from "../cucumberconfiguration";


Before({timeout: 100 * 1000}, async () =>{
    console.log("This will run before every test");
    await browser.get(config.baseUrl);
  });


  
  Before({tags: "@CalculatorFunctionality"},  async ()=> {
    await browser.manage().window().maximize();
  });

  Before({tags: "@AngularFunctionality"}, ()=> {
    console.log("This will run before angular  test");
  });

  
  After(async function(scenario) {
      console.log("This test is complete");

      if(scenario.result.status == Status.FAILED){

        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
      }
  });
  