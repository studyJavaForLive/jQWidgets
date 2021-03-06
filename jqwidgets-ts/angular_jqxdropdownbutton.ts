/*
jQWidgets v4.5.4 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxDropDownButton',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDropDownButtonComponent implements OnChanges
{
   @Input('animationType') attrAnimationType: any;
   @Input('arrowSize') attrArrowSize: any;
   @Input('autoOpen') attrAutoOpen: any;
   @Input('closeDelay') attrCloseDelay: any;
   @Input('disabled') attrDisabled: any;
   @Input('dropDownHorizontalAlignment') attrDropDownHorizontalAlignment: any;
   @Input('dropDownVerticalAlignment') attrDropDownVerticalAlignment: any;
   @Input('dropDownWidth') attrDropDownWidth: any;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection: any;
   @Input('initContent') attrInitContent: any;
   @Input('openDelay') attrOpenDelay: any;
   @Input('popupZIndex') attrPopupZIndex: any;
   @Input('rtl') attrRtl: any;
   @Input('template') attrTemplate: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDropDownButton;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                  this.host.jqxDropDownButton(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxDropDownButton('setOptions', options);
   }

   // jqxDropDownButtonComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('animationType', arg);
      } else {
          return this.host.jqxDropDownButton('animationType');
      }
   }

   arrowSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('arrowSize', arg);
      } else {
          return this.host.jqxDropDownButton('arrowSize');
      }
   }

   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('autoOpen', arg);
      } else {
          return this.host.jqxDropDownButton('autoOpen');
      }
   }

   closeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('closeDelay', arg);
      } else {
          return this.host.jqxDropDownButton('closeDelay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('disabled', arg);
      } else {
          return this.host.jqxDropDownButton('disabled');
      }
   }

   dropDownHorizontalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
      }
   }

   dropDownVerticalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownVerticalAlignment');
      }
   }

   dropDownWidth(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownWidth', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownWidth');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('height', arg);
      } else {
          return this.host.jqxDropDownButton('height');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('initContent', arg);
      } else {
          return this.host.jqxDropDownButton('initContent');
      }
   }

   openDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('openDelay', arg);
      } else {
          return this.host.jqxDropDownButton('openDelay');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('popupZIndex', arg);
      } else {
          return this.host.jqxDropDownButton('popupZIndex');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('rtl', arg);
      } else {
          return this.host.jqxDropDownButton('rtl');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('template', arg);
      } else {
          return this.host.jqxDropDownButton('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('theme', arg);
      } else {
          return this.host.jqxDropDownButton('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('width', arg);
      } else {
          return this.host.jqxDropDownButton('width');
      }
   }


   // jqxDropDownButtonComponent functions
   close(): void {
      this.host.jqxDropDownButton('close');
   }

   destroy(): void {
      this.host.jqxDropDownButton('destroy');
   }

   focus(): void {
      this.host.jqxDropDownButton('focus');
   }

   getContent(): any {
      return this.host.jqxDropDownButton('getContent');
   }

   isOpened(): boolean {
      return this.host.jqxDropDownButton('isOpened');
   }

   open(): void {
      this.host.jqxDropDownButton('open');
   }

   setContent(content: string): void {
      this.host.jqxDropDownButton('setContent', content);
   }


   // jqxDropDownButtonComponent events
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
   }

} //jqxDropDownButtonComponent


