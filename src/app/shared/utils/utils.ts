import { Component, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

export class Utils {
    private renderer2: Renderer2;
    constructor(
        private rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private _document
    ) {
        this.renderer2 = rendererFactory.createRenderer(null, null);
    }

    public initJS(url) {
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = url;
        s.text = ``;
        this.renderer2.appendChild(this._document.body, s);
    }

    public isLocal(): boolean {
        if (window.location.hostname.indexOf('localhost') > -1) {
            return true;
        } else {
            return false;
        }
    }

}
