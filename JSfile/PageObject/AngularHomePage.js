"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHomePage {
    constructor() {
        this.angularlink = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.searchBox = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.AngularHomePage = AngularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdC9Bbmd1bGFySG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxlQUFlO0lBT3hCO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztDQUNKO0FBYkQsMENBYUMifQ==