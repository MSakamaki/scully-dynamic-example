import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'blog',
          loadChildren: () =>
            import('./blog/blog.module').then((m) => m.BlogModule),
        },
        {
          path: 'db',
          loadChildren: () =>
            import('./dynamic-blog/dynamic-blog.module').then(
              (m) => m.DynamicBlogModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
