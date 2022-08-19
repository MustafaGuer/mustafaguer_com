import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingAreaComponent } from './greeting-area.component';

describe('GreetingAreaComponent', () => {
  let component: GreetingAreaComponent;
  let fixture: ComponentFixture<GreetingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
