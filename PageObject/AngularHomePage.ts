import { ElementFinder,element,by } from "protractor";

export class AngularHomePage {

    angularlink:ElementFinder;
    searchBox:ElementFinder;
    


    constructor(){

        this.angularlink = element(by.linkText("angular.io"));
        this.searchBox = element(by.css("input[type='search']"));
        
    }
}