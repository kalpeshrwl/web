import 'core-js';

import { ToasterModule } from 'angular2-toaster';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';

import { AvatarComponent } from './components/avatar.component';

import { FooterComponent } from './layouts/footer.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout.component';
import { NavbarComponent } from './layouts/navbar.component';
import { OrganizationLayoutComponent } from './layouts/organization-layout.component';
import { UserLayoutComponent } from './layouts/user-layout.component';

import { HintComponent } from './accounts/hint.component';
import { LockComponent } from './accounts/lock.component';
import { LoginComponent } from './accounts/login.component';
import { RegisterComponent } from './accounts/register.component';
import { TwoFactorOptionsComponent } from './accounts/two-factor-options.component';
import { TwoFactorComponent } from './accounts/two-factor.component';

import { AccountComponent } from './settings/account.component';
import { ProfileComponent } from './settings/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { ExportComponent } from './tools/export.component';
import { ImportComponent } from './tools/import.component';
import { PasswordGeneratorHistoryComponent } from './tools/password-generator-history.component';
import { PasswordGeneratorComponent } from './tools/password-generator.component';
import { ToolsComponent } from './tools/tools.component';

import { AddEditComponent } from './vault/add-edit.component';
import { AttachmentsComponent } from './vault/attachments.component';
import { BulkDeleteComponent } from './vault/bulk-delete.component';
import { BulkMoveComponent } from './vault/bulk-move.component';
import { BulkShareComponent } from './vault/bulk-share.component';
import { CiphersComponent } from './vault/ciphers.component';
import { CollectionsComponent } from './vault/collections.component';
import { FolderAddEditComponent } from './vault/folder-add-edit.component';
import { GroupingsComponent } from './vault/groupings.component';
import { OrganizationsComponent } from './vault/organizations.component';
import { ShareComponent } from './vault/share.component';
import { VaultComponent } from './vault/vault.component';

import { IconComponent } from 'jslib/angular/components/icon.component';

import { ApiActionDirective } from 'jslib/angular/directives/api-action.directive';
import { AutofocusDirective } from 'jslib/angular/directives/autofocus.directive';
import { BlurClickDirective } from 'jslib/angular/directives/blur-click.directive';
import { BoxRowDirective } from 'jslib/angular/directives/box-row.directive';
import { FallbackSrcDirective } from 'jslib/angular/directives/fallback-src.directive';
import { InputVerbatimDirective } from 'jslib/angular/directives/input-verbatim.directive';
import { StopClickDirective } from 'jslib/angular/directives/stop-click.directive';
import { StopPropDirective } from 'jslib/angular/directives/stop-prop.directive';
import { TrueFalseValueDirective } from 'jslib/angular/directives/true-false-value.directive';

import { I18nPipe } from 'jslib/angular/pipes/i18n.pipe';
import { SearchCiphersPipe } from 'jslib/angular/pipes/search-ciphers.pipe';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ServicesModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics], {
            pageTracking: {
                clearQueryParams: true,
            },
        }),
        ToasterModule,
    ],
    declarations: [
        AccountComponent,
        AddEditComponent,
        ApiActionDirective,
        AppComponent,
        AttachmentsComponent,
        AutofocusDirective,
        AvatarComponent,
        BlurClickDirective,
        BoxRowDirective,
        BulkDeleteComponent,
        BulkMoveComponent,
        BulkShareComponent,
        CiphersComponent,
        CollectionsComponent,
        ExportComponent,
        FallbackSrcDirective,
        FolderAddEditComponent,
        FooterComponent,
        FrontendLayoutComponent,
        GroupingsComponent,
        HintComponent,
        IconComponent,
        I18nPipe,
        ImportComponent,
        InputVerbatimDirective,
        LockComponent,
        LoginComponent,
        ModalComponent,
        NavbarComponent,
        OrganizationsComponent,
        OrganizationLayoutComponent,
        PasswordGeneratorComponent,
        PasswordGeneratorHistoryComponent,
        ProfileComponent,
        RegisterComponent,
        SearchCiphersPipe,
        SettingsComponent,
        ShareComponent,
        StopClickDirective,
        StopPropDirective,
        ToolsComponent,
        TrueFalseValueDirective,
        TwoFactorComponent,
        TwoFactorOptionsComponent,
        UserLayoutComponent,
        VaultComponent,
    ],
    entryComponents: [
        AddEditComponent,
        AttachmentsComponent,
        BulkDeleteComponent,
        BulkMoveComponent,
        BulkShareComponent,
        CollectionsComponent,
        FolderAddEditComponent,
        ModalComponent,
        PasswordGeneratorHistoryComponent,
        ShareComponent,
        TwoFactorOptionsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
