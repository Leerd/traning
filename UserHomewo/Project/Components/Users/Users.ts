import { Component } from '@angular/core';
import {User} from "../../Essence/user";

@Component({
    selector:'users',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 1px;}
        input.ng-touched.ng-valid {border:solid green 1px;}
        input{margin-top: 10px}
    `],
    template: require('./UsersHTML.html')
})

export class UsersComponent {
    user: User = new User(1,"","","");
    Users: User[] = [];

    addUser(){
        this.Users.push(new User(this.Users.length,this.user.Name,this.user.Surname,this.user.Patronymic));
        console.log(this.Users)
    }
}