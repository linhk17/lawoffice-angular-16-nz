import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface Table {
    column: ColumnItem;
    dataSource: object[];
}

export interface ColumnItem {
    name: string;
    sortOrder?: NzTableSortOrder | null;
    sortFn?: NzTableSortFn<any> | null;
    listOfFilter: NzTableFilterList;
    filterFn?: NzTableFilterFn<any> | null;
    filterMultiple?: boolean | null;
    sortDirections?: NzTableSortOrder[];
  }
