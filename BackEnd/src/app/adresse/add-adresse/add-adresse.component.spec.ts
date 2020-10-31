import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdresseComponent } from './add-adresse.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddAdresseComponent', () => {
  let component: AddAdresseComponent;
  let fixture: ComponentFixture<AddAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdresseComponent,
                      ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
