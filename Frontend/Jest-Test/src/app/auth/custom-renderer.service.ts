import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomRendererService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  
  public setElementStyle(el: HTMLElement, style: string, value: string): void {
    this.renderer.setStyle(el, style, value);
  }
}
