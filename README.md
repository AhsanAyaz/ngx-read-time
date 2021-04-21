# NgxReadTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Demo

[https://ahsanayaz.github.io/ngx-read-time/demo](https://ahsanayaz.github.io/ngx-read-time/demo)

## Docs

[https://ahsanayaz.github.io/ngx-read-time](https://ahsanayaz.github.io/ngx-read-time)

## Installation

To install this library, run:
```bash
`npm install ngx-read-time --save`
```

In your component where you want to use:

```typescript
import { Component } from '@angular/core';
import { ReadTimeConfig, TimeUnit } from 'ngx-read-time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  readTime: string;
  rtConfig: ReadTimeConfig = {
    wordsPerMinute: 250,
    timeUnit: TimeUnit.MINUTES
  }
}

```

In your HTML file:

```html
<article nrtReadTime [options]="rtConfig" (timeCalculated)="readTime = $event.minutes">
    <h1>Understanding Discriminated Unions in Typescript
      <span>
        <a href="https://dev.to/ahsanayaz/understanding-discriminated-unions-in-typescript-5cd">
          (Source)
        </a>
      </span>
    </h1>

    // Here will the description of the article
  </article>
``` 

Also add `NgxReadTimeModule` Module in your AppModule or the Module in which you are using this library.

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxReadTimeModule } from 'ngx-read-time';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxReadTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
