import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-delete/:id', component: ProductDeleteComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Asegúrate de haber creado este componente
];