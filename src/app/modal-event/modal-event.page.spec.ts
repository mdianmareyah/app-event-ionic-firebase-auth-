import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEventPage } from './modal-event.page';

describe('ModalEventPage', () => {
  let component: ModalEventPage;
  let fixture: ComponentFixture<ModalEventPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
