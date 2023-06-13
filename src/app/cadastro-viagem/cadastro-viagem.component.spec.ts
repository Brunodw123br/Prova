import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroViagemComponent } from './cadastro-viagem.component';

describe('CadastroViagemComponent', () => {
  let component: CadastroViagemComponent;
  let fixture: ComponentFixture<CadastroViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
