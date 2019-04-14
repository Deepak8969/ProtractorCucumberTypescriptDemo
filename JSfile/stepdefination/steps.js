"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../PageObject/calculator");
const AngularHomePage_1 = require("../PageObject/AngularHomePage");
const chai_1 = __importDefault(require("chai"));
let obj = new calculator_1.calculator();
let obj1 = new AngularHomePage_1.AngularHomePage();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield obj.firstBox.sendKeys(string);
    yield obj.secondBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield obj.goButton.click();
    yield obj.result.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('I clicked on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield obj1.angularlink.click();
}));
cucumber_1.When('you will navigate to angular page', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Navigated to Angular page");
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield obj1.searchBox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5hdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDJDQUFxQztBQUNyQyx5REFBb0Q7QUFDcEQsbUVBQThEO0FBQzlELGdEQUF3QjtBQUV4QixJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNqQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBTXZCLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN6RCxJQUFHLE1BQU0sSUFBRyxNQUFNLEVBQUM7UUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2hFO1NBQ0ksSUFBSSxNQUFNLElBQUksV0FBVyxFQUFDO1FBQzdCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3QztBQUVILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsRUFBRTtJQUM5RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVMsRUFBRTtJQUUxQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM3RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==