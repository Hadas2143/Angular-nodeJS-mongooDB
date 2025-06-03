import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuvComponent } from './nuv.component';

describe('NuvComponent', () => {
  let component: NuvComponent;
  let fixture: ComponentFixture<NuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
