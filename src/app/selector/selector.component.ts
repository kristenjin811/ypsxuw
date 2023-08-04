import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  itemlist = [
    { id: 1, name: 'Changjinhu (2021)', checked: false },
    { id: 2, name: 'Dune (2021)', checked: false },
    { id: 3, name: 'Shang-Chi and the Legend of the Ten Rings (2021)', checked: false },
    { id: 4, name: 'Free Guy (2021)', checked: false },
    { id: 5, name: 'The Many Saints of Newark (2021)', checked: false },
    { id: 6, name: 'Finch (2021)', checked: false },
    { id: 7, name: 'Candyman (2021)', checked: false },
    { id: 8, name: 'No Time to Die (2021)', checked: false },
    { id: 9, name: 'Halloween Kills (2021)', checked: false },
  ];

  @Input() selectedItems: any[] = [];
  @Output() selectedItemsChange = new EventEmitter<any[]>();

  selectAll = false;

  toggleSelectAll() {
    for (const item of this.itemlist) {
      item.checked = this.selectAll;
    }
    this.updateSelectedItems()
  }

  updateSelectedItems() {
    const selectedItems = this.itemlist.filter((item) => item.checked);
    this.selectedItemsChange.emit(selectedItems);
  }



}
