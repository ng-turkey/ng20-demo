import { describe, beforeEach, it, expect } from 'vitest';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `
    <div id="default" highlight>Test with default color</div>
    <div id="custom" highlight highlightColor="blue">Test with custom color</div>
  `,
  imports: [HighlightDirective],
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.queryAll(By.directive(HighlightDirective))[0];
    expect(directive).toBeTruthy();
  });

  it('should apply default color on mouseenter', () => {
    const defaultElement = fixture.debugElement.query(By.css('#default'));
    defaultElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(defaultElement.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should apply custom highlight color on mouseenter', () => {
    const customElement = fixture.debugElement.query(By.css('#custom'));
    customElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(customElement.nativeElement.style.backgroundColor).toBe('blue');
  });

  it('should revert to original or default color on mouseleave', () => {
    const customElement = fixture.debugElement.query(By.css('#custom'));

    fixture.detectChanges();

    const initial = customElement.nativeElement.style.backgroundColor;

    // First trigger mouseenter
    customElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(customElement.nativeElement.style.backgroundColor).toBe('blue');

    // Then trigger mouseleave
    customElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(customElement.nativeElement.style.backgroundColor).toBe(initial);
  });
});
