import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsService } from 'src/app/services/posts.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postsServiceMock: PostsService;

  beforeEach(async () => {
    postsServiceMock = jasmine.createSpyObj(['getAll']);
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: PostsService, useValue: postsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
