import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import {ItemEventData} from "ui/list-view";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { BookingListFormModel, BookingListItem } from "./booking-list-form-model";
@Component({
    selector: "booking-list-form",
    moduleId: module.id,
    templateUrl: "./booking-list-form.component.html",
    styleUrls: ["./booking-list-form.component.css"],
})
export class BookingListFormComponent implements OnInit {
    public bookingListFormModel: BookingListFormModel;
    public ngOnInit(): void {
        this.bookingListFormModel = new BookingListFormModel();
        this.bookingListFormModel.bookingList = [];
        let abcd = new BookingListItem();
        abcd.bookingNumber = 12345;
        abcd.cropName = "Brinjal";
        abcd.cropQuantity = 100;
        this.bookingListFormModel.bookingList.push(abcd);
        this.bookingListFormModel.bookingList.push(abcd);
        this.bookingListFormModel.bookingList.push(abcd);
        this.bookingListFormModel.bookingList.push(abcd);
    }
    public onItemLoading(args: ItemEventData) {
        if (args.ios) {
            // args.ios is instance of UITableViewCell
            args.ios.accessoryType = 1; // UITableViewCellAccessoryDisclosureIndicator
        }
     }
}