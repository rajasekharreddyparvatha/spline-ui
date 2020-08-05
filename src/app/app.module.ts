/*
 * Copyright (c) 2020 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core'
import { environment } from '@env/environment'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { MetaReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storeFreeze } from 'ngrx-store-freeze'
import { SplineApiExecutionEventModule } from 'spline-api'
import { SplineLayoutModule, SplineSearchBoxModule, SplineTranslateCoreModule } from 'spline-common'
import { SplineApiConfigModule } from 'spline-shared'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'


export const metaReducers: MetaReducer<any>[] =
    !environment.production
        ? [storeFreeze]
        : []

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SplineTranslateCoreModule,
        AppRoutingModule,
        // NGRX store
        StoreModule.forRoot(
            {}, { metaReducers },
        ),
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 100 }) : [],
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
        }),
        SplineLayoutModule,
        SplineSearchBoxModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        MatAutocompleteModule,
        SplineApiConfigModule,
        SplineApiExecutionEventModule,
        MatProgressBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
