import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Acgtividades } from './acgtividades';

describe('Acgtividades', () => {
  let component: Acgtividades;
  let fixture: ComponentFixture<Acgtividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acgtividades],
    }).compileComponents();

    fixture = TestBed.createComponent(Acgtividades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
