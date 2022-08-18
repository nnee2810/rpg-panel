import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { formatCurrency } from "utils/format"
import { IVehicle } from "../interfaces"

export default function useTableVehicles(data: IVehicle[] = []) {
  const columns = useMemo<ColumnDef<IVehicle>[]>(
    () => [
      {
        header: "Model",
        cell: ({
          row: {
            original: { Model },
          },
        }) => (
          <LazyLoadImage
            alt="vehicle"
            src={`https://panel.b-hood.ro/assets/images/vehicles/Vehicle_${Model}.jpg`}
            className="w-32 aspect-[4/3] rounded-md"
          />
        ),
      },
      {
        header: "Odometer",
        accessorFn: ({ KM }) => `${KM.toFixed(2)} km`,
      },
      {
        header: "Điểm bảo hiểm",
        accessorFn: ({ Points }) => `${Points}/10`,
      },
      {
        header: "Phí bảo hiểm",
        accessorFn: ({ Tax }) => formatCurrency(Tax),
      },
      {
        header: "Neon",
        accessorFn: ({ Neon }) => (Neon ? "Có" : "Không"),
      },
    ],
    []
  )

  const { getHeaderGroups, getRowModel } = useReactTable<IVehicle>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return {
    getHeaderGroups,
    getRowModel,
  }
}
