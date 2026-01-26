import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private baseUrl = 'http://localhost:8080/api/v1/users';

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/get-all`);
    }

    getUserById(id: number){
        return this.http.get<User>(`${this.baseUrl}/find-user/${id}`);
    }

    createUser(user: User): Observable<string> {
        return this.http.post(`${this.baseUrl}/add-user`, user, {
            responseType: 'text'
        });
    }

    updateUser(id: number, user: User): Observable<string> {
        return this.http.put(`${this.baseUrl}/edit-user/${id}`, user, {
            responseType: 'text'
        });
    }

    deleteUser(id: number): Observable<string> {
        return this.http.delete(`${this.baseUrl}/delete-user/${id}`,{
            responseType:'text'
        });
    }



}