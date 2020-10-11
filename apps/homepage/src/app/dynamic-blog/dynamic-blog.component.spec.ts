import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBlogComponent } from './dynamic-blog.component';

describe('DynamicBlogComponent', () => {
  let component: DynamicBlogComponent;
  let fixture: ComponentFixture<DynamicBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicBlogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
