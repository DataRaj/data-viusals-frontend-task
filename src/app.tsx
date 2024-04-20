import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';

type StatsTableType = {
  measure: string
  class1: string;
  class2: string;
  class3: string;

};

//nested data is ok, see accessorKeys in ColumnDef below


const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<StatsTableType>[]>(
    () => [
      {
        accessorKey: 'measure', //access nested data with dot notation
        header: 'Measure',
      },
      {
        accessorKey: 'class1',
        header: 'Class 1',
      },
      {
        accessorKey: 'class2',
        header: 'Class 2',
      },
      {
        accessorKey: 'class3',
        header: 'Class 3',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MantineReactTable table={table} />;
};

export default Example;