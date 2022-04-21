import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewphotosComponent } from './newphotos.component';

describe('NewphotosComponent', () => {
  let component: NewphotosComponent;
  let fixture: ComponentFixture<NewphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
