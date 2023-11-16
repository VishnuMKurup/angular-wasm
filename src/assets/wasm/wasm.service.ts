import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WasmService {
  private module: any;

  loadWebAssemblyModule(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fetch('assets/wasm/main.wasm') // Adjust the path based on your project structure
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.instantiate(buffer, {}))
        .then(obj => {
          this.module = obj.instance.exports;
          console.log(this.module,'mm')
          resolve();
        })
        .catch(error => {
          console.error('Failed to initialize WebAssembly module:', error);
          reject(error);
        });
    });
  }

  add(a: number, b: number): number {
    // Check if module or _add function is not available
    if (!this.module || !this.module.add) {
      throw new Error('WebAssembly module or _add function not available.');
    }
    return this.module.add(a, b);
  }

  
}
