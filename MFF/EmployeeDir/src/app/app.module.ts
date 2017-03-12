import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EmployeeListPage } from '../pages/employee-list/employee-list';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    EmployeeListPage,
    FavoritesPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmployeeListPage,
    FavoritesPage,
    AboutPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
