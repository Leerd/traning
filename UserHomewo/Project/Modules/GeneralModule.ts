import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsersComponent} from "../Components/Users/Users";
import {FormsModule} from "@angular/forms";
import {UserCard} from "../Components/UserCard/usercard";
import {StartComponent} from "../Components/StartComponent/StartComponent";
import {Routes, RouterModule} from "@angular/router";
import {UserDetails} from "../Components/UserDetails/userdetails";



const FirstRoot:Routes =[
    {path: '', component: UsersComponent},
    {path: 'user/:id', component: UserDetails},
    {path: 'user', component: UserCard},
];

@NgModule({
    declarations:[StartComponent,UsersComponent, UserCard,UserDetails],
    bootstrap:[StartComponent],
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(FirstRoot)]
})
export class GeneralModule{}