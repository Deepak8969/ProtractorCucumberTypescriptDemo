import { ElementFinder,element,by } from "protractor";

export class calculator{

firstBox:ElementFinder;
secondBox:ElementFinder;
goButton:ElementFinder;
result:ElementFinder;

constructor()
{

    this.firstBox = element(by.model("first"));
    this.secondBox = element(by.model("second"));
    this.goButton = element(by.id("gobutton"));
    this.result = element(by.css("h2[class='ng-binding']"));

}



}