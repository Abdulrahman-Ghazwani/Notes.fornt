import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Note } from './notes.module';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  private baseUrl = 'http://localhost:8080/api/v1/notes';


  constructor(private http: HttpClient){}
  

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(`${this.baseUrl}/fetch-notes`);
  }

  getNoteById(id: number): Observable<Note>{
    return this.http.get<Note>(`${this.baseUrl}/get-note/${id}`);
  }

  createNote(note: Note): Observable<string> {
    return this.http.post(`${this.baseUrl}/add-note`, note, {
      responseType: 'text'
    });
  }

  updateNote(id: number, note: Note): Observable<string> {
    return this.http.put(`${this.baseUrl}/update-note/${id}`, note, {
      responseType: 'text'
    });
  }

  deleteNote(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete-note/${id}`, {
      responseType: 'text'
    });
  }
   


}
