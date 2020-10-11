import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'p1',
            data: 'post1',
          },
          {
            id: 'p2',
            data: 'post2',
          },
        ]);
      }, 1000);
    });
  }

  @Get(':id')
  getDataDetail(@Param() { id }: { id: string }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            p1: {
              content: 'page example for Page1',
            },
            p2: {
              content: 'page example for Page2',
            },
          }[id] || reject(Error('No Id Found'))
        );
      }, 1000);
    });
  }
}
