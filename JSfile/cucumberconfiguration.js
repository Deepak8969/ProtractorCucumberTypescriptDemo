"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Feature/demo.feature'],
    baseUrl: "https://angularjs.org/",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        // require step definitions
        //tags:"@CalculatorFunctionality",
        format: "json:./report/cucumberreportgenerate.json",
        require: [
            './stepdefination/*.js' // accepts a glob
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './report/cucumberreportgenerate.json',
            output: './report/cucumberreport.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLGlFQUFtRDtBQUl4QyxRQUFBLE1BQU0sR0FBVztJQUUxQixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELEtBQUssRUFBRSxDQUFFLHlCQUF5QixDQUFFO0lBRXBDLE9BQU8sRUFBRSx3QkFBd0I7SUFFakMsa0RBQWtEO0lBRWxELGFBQWEsRUFBQyxJQUFJO0lBRWxCLFNBQVMsRUFBRSxRQUFRO0lBRW5CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixrQ0FBa0M7UUFDbEMsTUFBTSxFQUFDLDJDQUEyQztRQUNsRCxPQUFPLEVBQUU7WUFDUCx1QkFBdUIsQ0FBQyxpQkFBaUI7U0FDMUM7S0FDRjtJQUVELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsTUFBTSxFQUFFLDhCQUE4QjtZQUN0QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNCLENBQUM7Q0FFRixDQUFDIn0=