import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicBlogComponent } from './dynamic-blog.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: ':id', component: DynamicBlogComponent }];

@NgModule({
  declarations: [DynamicBlogComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class DynamicBlogModule {}
