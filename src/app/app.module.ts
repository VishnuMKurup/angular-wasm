// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';
import { AppComponent } from './app.component';
import { WasmService } from 'src/assets/wasm/wasm.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [WasmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
