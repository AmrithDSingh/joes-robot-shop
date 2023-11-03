import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteHeaderComponent } from '_course-resources/site-header/site-header.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; // how angular finds the component

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent, // how angular finds the component
    SiteHeaderComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
