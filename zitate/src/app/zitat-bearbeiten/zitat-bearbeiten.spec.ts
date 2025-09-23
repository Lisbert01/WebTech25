import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitatBearbeiten } from './zitat-bearbeiten';

describe('ZitatBearbeiten', () => {
  let component: ZitatBearbeiten;
  let fixture: ComponentFixture<ZitatBearbeiten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitatBearbeiten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitatBearbeiten);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
