import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { PersistedEntry } from "./../model/persistedEntry";

@Injectable()
export class DataService {

    constructor(private http: Http) {

    }

    public persistedList: PersistedEntry[] = [];
    public isPalindrome: boolean = false;

    public getPersistedList(): Observable<PersistedEntry[]> {
        return this.http.get("/api/history")
            .map((result: Response) => this.persistedList = result.json());
    }

    public checkPalindrome(entry: string): Observable<boolean> {
        return this.http.get("/api/palindrome/check", entry)
            .map((result: Response) => this.isPalindrome = result.json());
    }

    public AddEntryToPersistedList(entry: string) {

        return this.http.post("/api/palindrome", entry)
            .map(response => {
                return true;
            });
    }
}