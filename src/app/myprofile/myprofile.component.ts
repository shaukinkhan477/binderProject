import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {


  profile: any = {
    displayName: '',
    firstName: '',
    lastName: '',
    aboutYourself: '',
    areaOfInterest: [],
    userType: '',
    experience: '',
    expertise: {
      backend: false,
      frontend: false
    }
  }

  saveProfile() {
    // Implement logic to save the profile data (e.g., send it to a server)
    // console.log('Profile saved:', this.profile);
  }
}
