import {
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
// import { environment } from '../../Users/otabek_coding/Desktop/Najot Ta'lim/Front-End/Angular/identity-client/src/environments/environment';

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['en', 'uz', 'ru'],
          defaultLang: 'en',
          reRenderOnLangChange: true,
          prodMode: false,
        },
        loader: TranslocoHttpLoader
      }),
  ],
})
export class TranslocoRootModule {}
