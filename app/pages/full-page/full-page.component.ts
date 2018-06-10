import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "full-page",
    moduleId: module.id,
    templateUrl: "./full-page.component.html",
    styleUrls: ["./full-page.component.css"],
})
export class FullPageComponent implements OnInit {
    private isMenuBarVisible: boolean = true;
    private actionBarTitle: string;
    public constructor(private router: Router) {
    }

    public ngOnInit(): void {
    }

    public onBookingFormClick(): void {
        this.actionBarTitle = "Booking";
        this.isMenuBarVisible = false;
        this.router.navigate(["/fullpage/bookingForm"]);
    }

    public onCreateBatchFormClick(): void {
        this.actionBarTitle = "Create Batch";
        this.isMenuBarVisible = false;
        this.router.navigate(["/fullpage/createBatchForm"]);
    }
    
    public onBookingListClick(): void {
        this.actionBarTitle = "Booking List";
        this.isMenuBarVisible = false;
        this.router.navigate(["/fullpage/bookingListForm"]);
    }
    
    public onBatchListClick(): void {
        this.actionBarTitle = "Batch List";
        this.isMenuBarVisible = false;
        this.router.navigate(["/fullpage/batchListForm"]);
    }

    public onMenuBarClick() {
        this.isMenuBarVisible = !this.isMenuBarVisible;
    }
    
    public onCropMasterFormClick() {
        this.actionBarTitle = "Crop Master";
        this.isMenuBarVisible = false;
        this.router.navigate(["/fullpage/cropMasterForm"]);
    } 
}