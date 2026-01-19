import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'notes', component: NotesListComponent},
  {path: 'notes/create', component: NoteCreateComponent},
  {path: 'notes/edit/:id', component: NoteEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
