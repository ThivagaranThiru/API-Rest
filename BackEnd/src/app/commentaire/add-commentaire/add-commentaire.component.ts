import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Commentaire } from 'src/app/model/commentaire-module';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { Router } from '@angular/router';
import { SaveTokenService } from 'src/app/auth/save-token.service';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {
  editForm: FormGroup;
  commentaire: Commentaire;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private token: SaveTokenService, private commentaireService: CommentaireService) { }

  ngOnInit() {

    const commentaireId = window.localStorage.getItem('editCommentaire');

    if (!this.token.getToken) {
      this.router.navigateByUrl('home');
      return;
    }

    if (!commentaireId) {
      this.router.navigateByUrl('commentaire');
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      commentaire: ['', Validators.required],
      note: ['', Validators.required],
    });

    this.commentaireService.getCommentaireById(+commentaireId).subscribe (
      data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.commentaireService.updateCommentaire(this.editForm.value).subscribe (
      data => {
        this.commentaire = data;
        window.localStorage.removeItem('editCommentaire');
        this.router.navigateByUrl('commentaire');

      }
    );
  }
}
