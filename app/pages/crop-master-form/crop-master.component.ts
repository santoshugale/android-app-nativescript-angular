import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CropMasterModel } from "./crop-master-model";
@Component({
    selector: "crop-master",
    moduleId: module.id,
    templateUrl: "./crop-master.component.html",
    styleUrls: ["./crop-master.component.css"],
})
export class CropMasterComponent implements OnInit {
    public cropMasterModel: CropMasterModel;
    @ViewChild('myfilter') myfilter: ElementRef;

    public listitems: string[] = ["Gabbage", "Chilly", "Brinjal"];

    public cancelFilterableList(): void {
        console.log('canceled');
    }

    public itemTapped(args): void {
        this.cropMasterModel.cropName = args.selectedItem;
    }

    public showPicker(): void {
        this.myfilter.nativeElement.visibility = "visible";
        this.myfilter.nativeElement.show();
    }

    public ngOnInit(): void {
        this.cropMasterModel = new CropMasterModel();
    }

    public onSubmitClick(): void {

    }

    public onCheckAvailabilityClick(): void {

    }
}