import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { QuestPage } from '../pages/quest/quest';
import { QuestFormPage } from '../pages/quest_form/quest_form';
import { TabsPage } from '../pages/tabs/tabs';
import { Ng2MapModule } from 'ng2-map';
import { LocationTracker } from '../providers/location-tracker';


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    QuestFormPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ng2MapModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    RegisterPage,
    QuestPage,
    QuestFormPage,
    TabsPage
  ],
  providers: [LocationTracker, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
