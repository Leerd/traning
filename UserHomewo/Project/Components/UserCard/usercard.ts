import { Component, Input } from "@angular/core";
import {User} from "../../Essence/user";

@Component({
    selector: 'usercard',
    template: require('./usercardHTML.html'),
    styles: [`
    .person{ border: 1px solid black; background-color: gray; width:10% ; margin:10px 10px; float:left;}
    `],
})
export class UserCard{
    @Input() UsersCarts:User[];
}