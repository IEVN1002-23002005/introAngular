import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';

@NgModule({
  declarations: [App, HeroesList],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
