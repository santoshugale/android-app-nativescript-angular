export class BookingListFormModel {
    public bookingList: BookingListItem[] = [];
 }
 export class BookingListItem {
     public cropName: string = "";
     public bookingNumber: number;
     public cropQuantity: number;
 }