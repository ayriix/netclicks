import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { MainComponent } from './component/main/main.component';
import { CategoriesComponent } from './component/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    MainComponent,
    CategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
