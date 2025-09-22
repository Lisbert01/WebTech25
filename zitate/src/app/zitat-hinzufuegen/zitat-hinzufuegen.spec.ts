import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitatHinzufuegen } from './zitat-hinzufuegen';

describe('ZitatHinzufuegen', () => {
  let component: ZitatHinzufuegen;
  let fixture: ComponentFixture<ZitatHinzufuegen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitatHinzufuegen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitatHinzufuegen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
