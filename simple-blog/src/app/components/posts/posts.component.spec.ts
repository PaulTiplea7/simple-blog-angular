import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from 'src/app/services/posts.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postsServiceMock: PostsService;

  beforeEach(async () => {
    postsServiceMock = jasmine.createSpyObj(['getAll']);
    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [{ provide: PostsService, useValue: postsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
