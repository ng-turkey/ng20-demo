import { Directive, ElementRef, HostListener, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  readonly #elementRef = inject(ElementRef);
  readonly #originalColor = signal(this.#elementRef.nativeElement?.style.backgroundColor ?? '');

  public readonly highlightColor = input('yellow');

  @HostListener('mouseenter') onMouseEnter(): void {
    this._highlight(this.highlightColor());
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._highlight(this.#originalColor());
  }

  private _highlight(color: string): void {
    this.#elementRef.nativeElement.style.backgroundColor = color;
  }
}
