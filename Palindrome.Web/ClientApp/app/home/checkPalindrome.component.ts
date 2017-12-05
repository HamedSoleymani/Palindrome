import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";

@Component({
  selector: "check-palindrome",
  templateUrl: "checkPalindrome.component.html"
})
export class CheckPalindrome {

  constructor(private data: DataService, private router: Router) { }

  errorMessage: string = "";
  result: string = "";

  public entry = "";

  onCheckPalindrome() {
    this.data.checkPalindrome(this.entry)
      .subscribe(success => {
        if (!!success) {
            this.result = "Is Palindrome !!";

            // insert the entry into persisted list
            
            this.data.AddEntryToPersistedList(this.entry)
                  .subscribe(success => {
                    if (success) {
                    }
                  }, err => this.errorMessage = "Failed to Save the Palindrome entry into persisted items.");

        } else {
            this.result = "Is NOT Palindrome.";
        }
      }, err => this.errorMessage = "Failed to check wheather entry is Palindrome or not");
  }
}