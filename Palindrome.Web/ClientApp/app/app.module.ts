import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { CheckPalindrome } from './home/checkPalindrome.component';
import { History } from './history/history.component'
import { PersistedItems } from './history/persistedItems.component';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { DataService } from "./shared/dataService"

let routes = [
    { path: "", component: Home },
    { path: "history", component: History },
];

@NgModule({
    declarations: [
        AppComponent,
        Home, 
        CheckPalindrome,
        PersistedItems,
        History
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false // for Debugging of the Routes
        })
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
