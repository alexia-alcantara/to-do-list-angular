import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDAllComponent } from './todo-button-dall.component';

describe('TodoButtonDAllComponent', () => {
  let component: TodoButtonDAllComponent;
  let fixture: ComponentFixture<TodoButtonDAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButtonDAllComponent]
    });
    fixture = TestBed.createComponent(TodoButtonDAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
