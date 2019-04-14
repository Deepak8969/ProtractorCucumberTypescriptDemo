"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const cucumberconfiguration_1 = require("../cucumberconfiguration");
cucumber_1.Before({ timeout: 100 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    console.log("This will run before every test");
    yield protractor_1.browser.get(cucumberconfiguration_1.config.baseUrl);
}));
cucumber_1.Before({ tags: "@CalculatorFunctionality" }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.Before({ tags: "@AngularFunctionality" }, () => {
    console.log("This will run before angular  test");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("This test is complete");
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5hdGlvbi9Ib29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQWlEO0FBQ2pELDJDQUFxQztBQUNyQyxvRUFBa0Q7QUFHbEQsaUJBQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFDLEVBQUUsR0FBUyxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUMvQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDhCQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUMsRUFBRyxHQUFRLEVBQUU7SUFDcEQsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFDLEVBQUUsR0FBRSxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsVUFBZSxRQUFROztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckMsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxpQkFBTSxDQUFDLE1BQU0sRUFBQztZQUV6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=