import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './comp/create-customer/create-customer.component';
import { CreateEmployeeComponent } from './comp/create-employee/create-employee.component';
import { CreateUserComponent } from './comp/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserListComponent } from './comp/user-list/user-list.component';
import { TicketComponent } from './comp/ticket/ticket.component';
import { TicketListComponent } from './comp/ticket-list/ticket-list.component';
import { LoginComponent } from './comp/login/login.component';
import { CoreComponent } from './comp/core/core.component';
import { TicketCustomerComponent } from './comp/ticket-customer/ticket-customer.component';
import { TicketEditComponent } from './comp/ticket-edit/ticket-edit.component';
import { AssignEngineerComponent } from './comp/assign-engineer/ae.component';
import { FeedbackComponent } from './comp/feedback/feedback.component';



const routes:Routes=[
  {path:'home',component:TicketListComponent},
  {path:"ticket",component:TicketComponent},
  {path:"ticket-list",component:TicketListComponent},
  {path:"create",component:CreateUserComponent},
  {path:"users/:role",component:UserListComponent},
  {path:"editUser/:id/:role",component:CreateUserComponent},
  {path:"login",component:LoginComponent},
  {path:"viewTicket/:id",component:TicketComponent},
  {path:"feedback/:ticketId", component:FeedbackComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateUserComponent,
    UserListComponent,
    TicketComponent,
    TicketListComponent,
    LoginComponent,
    CoreComponent,
    TicketCustomerComponent,
    TicketEditComponent,
    AssignEngineerComponent,
    FeedbackComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
