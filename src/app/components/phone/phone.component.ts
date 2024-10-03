import { Component } from '@angular/core';


interface Contact {
  name: string;
  phoneNumber: string;

}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  contactList: Contact[] = [
    { name: "Jerome Beriso", phoneNumber: "123-456-7890" },
    { name: "Je rome", phoneNumber: "987-654-3210" }
  ];
  name: string = '';
  phoneNumber: string = '';

  addContact() {
    const newContact: Contact = { name: this.name, phoneNumber: this.phoneNumber };
    this.contactList.push(newContact);
    this.name = '';
    this.phoneNumber = '';
  }

  deleteContact(index: number) {
    this.contactList.splice(index, 1);
  }
}
