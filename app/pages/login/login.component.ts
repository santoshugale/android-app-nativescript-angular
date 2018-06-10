import { Page } from "ui/page";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { View } from "ui/core/view";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: "./pages/login/login.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    private user: User;
    private isLoggingIn = true;
    @ViewChild("container") public container: ElementRef;
    public constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    public ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

    public submit(): void {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    public toggleDisplay(): void {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }

    private login(): void {
        // if (this.user.email === "" || this.user.password === "") {
        //     alert("Please Enter Valid Input");
        //     return;
        // }
        if (this.userService.authenticate(this.user)) {
            this.router.navigate(['/fullpage']);
        } else {
            alert("Please enter valid credentials.");
        }
    }

    public signUp(): void {
        if (this.user.email === "" || this.user.password === "") {
            alert("Please Enter Valid Input");
            return;
        }
        this.userService.register(this.user)
            .then(() => {
                alert("Your account was successfully created.");
                this.toggleDisplay();
            })
            .catch(() => alert("Unfortunately we were unable to create your account."));
    }
}