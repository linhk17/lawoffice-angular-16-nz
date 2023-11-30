import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appPlaceAutocomplete]',
})
export class PlaceAutocompleteDirective {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  element: HTMLInputElement;
  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }
  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
    });
  }
  getFormattedAddress(place: any) {
    console.log(this.element);
    const location: any = {};
    for (const _value in place.address_components) {
      const item = place.address_components[_value];
      location['formatted_address'] = place.formatted_address;
      if (item['types'].indexOf('locality') > -1) {
        location['locality'] = item['long_name'];
      } else if (item['types'].indexOf('administrative_area_level_1') > -1) {
        location['admin_area_l1'] = item['short_name'];
      } else if (item['types'].indexOf('street_number') > -1) {
        location['street_number'] = item['short_name'];
      } else if (item['types'].indexOf('route') > -1) {
        location['route'] = item['long_name'];
      } else if (item['types'].indexOf('country') > -1) {
        location['country'] = item['long_name'];
      } else if (item['types'].indexOf('postal_code') > -1) {
        location['postal_code'] = item['short_name'];
      }
    }
    return location;
  }
}
