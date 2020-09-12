# NgxReadTime

## Usage

```bash
npm i --save ngx-read-time
#OR
yarn add -S ngx-read-time
```

Add the module into your app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxReadTimeModule } from 'projects/ngx-read-time/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxReadTimeModule // <---- here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

See the [demo project](https://github.com/AhsanAyaz/ngx-read-time/blob/master/projects/demo/src/app/app.component.html) for an example.
