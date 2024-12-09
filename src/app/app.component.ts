import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-sandbox';
}
