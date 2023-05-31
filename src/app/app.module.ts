import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchComponent } from './pipes/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes-search/filter.pipe';
import { ViewanimationmoviesComponent } from './viewanimationmovies/viewanimationmovies.component';
import { LoginComponent } from './login/login.component';
import { ShowHidePasswordDirective } from './show-hide-password.directive';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { FacebookModule } from 'ngx-sharebuttons/facebook';
// import { DownloadService } from './download.service';
// import { saveAs } from './path/to/file-saver';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LibraryComponent } from './library/library.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { saveAs } from 'file-saver';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FileSaverModule } from 'ngx-filesaver';
// import { FileSaverModule } from 'ngx-filesaver';

// import { saveAs } from 'file-saver';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AnimationListComponent,
    TableComponent,
    NavbarComponent,
    HomeComponent,
    AdminPageComponent,
    SearchComponent,
    SearchPipe,
    FilterPipe,
    ViewanimationmoviesComponent,
    LoginComponent,
    ShowHidePasswordDirective,
    EditcomponentComponent,
    MyaccountComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    BrowserAnimationsModule,
    // saveAs
    MatSnackBarModule,
    FileSaverModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
