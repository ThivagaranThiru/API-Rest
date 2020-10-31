import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user-model';
import { Adresse } from 'src/app/model/adresse-model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AdresseService } from 'src/app/services/adresse.service';
import { SaveTokenService } from 'src/app/auth/save-token.service';

@Component({
  selector: 'app-add-adresse',
  templateUrl: './add-adresse.component.html',
  styleUrls: ['./add-adresse.component.css']
})
export class AddAdresseComponent implements OnInit {

  editForm: FormGroup;
  user: User;
  adresse: Adresse;
  public button: string;
  public userId: string;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private token: SaveTokenService, private userService: UserService, private adresseService: AdresseService ) { }

  ngOnInit() {

    const adresseId = window.localStorage.getItem('editAdresse');

    if (!this.token.getToken) {
      this.router.navigateByUrl('home');
      return;
    }

    this.userId = this.token.getId();

    this.userService.getUserById(+this.userId).subscribe (
      data => {
        this.user = data;
      });

    this.editForm = this.formBuilder.group({
      id: [''],
      rue: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      user: [this.user, Validators.required],
    });

    if (adresseId) {
      this.button = 'edit';
      this.adresseService.getAdresseById(+adresseId).subscribe (
        data => {
          this.editForm.setValue(data);
        }
      );
    } else {
      this.button = 'add';
    }

  }

  onSubmit() {

    if (this.button === 'add') {
     this.adresseService.createAdresse(this.editForm.value).subscribe(
        data => {
          this.adresse = data;
          this.router.navigateByUrl('adresse');
        });
    } else if (this.button === 'edit') {
         this.adresseService.updateAdresse(this.editForm.value).subscribe(
        data => {
          this.adresse = data;
          window.localStorage.removeItem('editAdresse');
          this.router.navigateByUrl('adresse');
        });
    }
  }
}
