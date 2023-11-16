// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { WasmService } from 'src/assets/wasm/wasm.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  result: number = 0;

  constructor(private wasmService: WasmService) {}

  async ngOnInit() {
// Assuming this is part of some method in your component
this.wasmService.loadWebAssemblyModule().then(() => {
    this.result = this.wasmService.add(2, 3);
    console.log(this.result);
  });

  }
}
