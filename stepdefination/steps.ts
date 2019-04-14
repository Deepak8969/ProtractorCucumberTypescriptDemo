import { Given, When,Then } from "cucumber";
import { browser } from "protractor";
import {calculator} from "../PageObject/calculator";
import {AngularHomePage} from "../PageObject/AngularHomePage";
import chai from "chai";

let obj = new calculator();
let obj1 = new AngularHomePage();
var expect = chai.expect;





  Given('I will navigate to {string} Site', async (string) => {
    if(string =="Calc"){
      await browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs"){
      await browser.get('https://angularjs.org/');
    }

  });


  When('I add two numbers {string} and {string}', async(string, string2) => {
    await obj.firstBox.sendKeys(string);
    await obj.secondBox.sendKeys(string2);
  });

  Then('the output displayed should be {string}', async(string) => {
    await obj.goButton.click();
    await obj.result.getText().then(function(text) {
      expect(text).to.equal(string);
    })
  });


  When('I clicked on header link', async () =>{
    
    await obj1.angularlink.click();
    
  });

  When('you will navigate to angular page', async () =>{
    console.log("Navigated to Angular page")
  });

  Then('you will enter {string} in search box', async (string) =>{
    await obj1.searchBox.sendKeys(string);
  });


  