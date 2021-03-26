import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
=======
platformBrowserDynamic()
  .bootstrapModule(AppModule)
>>>>>>> 187b8624a77749b3165207ceed9d04399a4502e5
  .catch(err => console.error(err));
