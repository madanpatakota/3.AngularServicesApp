import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAppComponent } from './third-comp.component';

describe('ThirdAppComponent', () => {
  let component: ThirdAppComponent;
  let fixture: ComponentFixture<ThirdAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdAppComponent]
    });
    fixture = TestBed.createComponent(ThirdAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
