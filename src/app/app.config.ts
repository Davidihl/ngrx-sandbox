import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { booksReducer } from './book-list/books.reducer';
import { collectionReducer } from './book-list/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ books: booksReducer, collection: collectionReducer }),
    provideHttpClient(withFetch()),
  ],
};
