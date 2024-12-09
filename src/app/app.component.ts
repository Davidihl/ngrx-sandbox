import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { GoogleBooksService } from './book-list/books.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BookListComponent, BookCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-sandbox';
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
