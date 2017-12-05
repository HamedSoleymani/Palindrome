import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { PersistedEntry } from "./../model/persistedEntry";

@Component({
    selector: "persisted-items",
    templateUrl: "persistedItems.component.html"
})

export class PersistedItems implements OnInit{
    public persistedItems: PersistedEntry[] = [];

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getPersistedList()
            .subscribe(() => this.persistedItems = this.data.persistedList);
    }
}