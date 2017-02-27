import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsersComponent} from "../Components/Users/Users";
import {FormsModule} from "@angular/forms";
import {UserCard} from "../Components/UserCard/usercard";

@NgModule({
    declarations:[UsersComponent, UserCard],
    bootstrap:[UsersComponent],
    imports:[BrowserModule, FormsModule]
})
export class GeneralModule{}