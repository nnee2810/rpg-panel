import { AlertMessage, BasicTable, Empty, Table } from "components/basic"
import { Loading } from "components/core"
import { formatCurrency } from "utils/format"
import { useGetUserProperties, useTableVehicles } from "../hooks"

interface ProfilePropertiesProps {
  name: string
}

export default function ProfileProperties({ name }: ProfilePropertiesProps) {
  const { data, isLoading } = useGetUserProperties(name)
  const { getHeaderGroups, getRowModel } = useTableVehicles(data?.vehicles)

  if (isLoading) return <Loading />

  return data ? (
    <div className="bg-gray-800 rounded-md">
      <div className="p-4 font-bold border-b border-gray-700">Phương tiện</div>
      {data.vehicles.length ? (
        <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
      ) : (
        <div className="p-4">
          <AlertMessage scheme="error">Không có phương tiện</AlertMessage>
        </div>
      )}
      <div className="p-4 font-bold border-b border-gray-700">Bất động sản</div>
      <div className="p-4 grid grid-cols-2 gap-4 items-start">
        {data?.house ? (
          <BasicTable>
            <tbody>
              <tr>
                <td>House #{data.house.ID}</td>
                <td className="text-emerald-500">{data.house.Discription}</td>
              </tr>
              <tr>
                <td>Đang bán</td>
                <td>
                  {data.house.Value
                    ? formatCurrency(data.house.Value)
                    : "Không"}
                </td>
              </tr>
              <tr>
                <td>Cho thuê</td>
                <td>
                  {data.house.Rentabil
                    ? formatCurrency(data.house.Rent)
                    : "Không"}
                </td>
              </tr>
              <tr>
                <td>Trạng thái</td>
                <td>
                  {data.house.Lockk ? (
                    <span className="text-red-500">Khóa</span>
                  ) : (
                    <span className="text-emerald-500">Mở</span>
                  )}
                </td>
              </tr>
            </tbody>
          </BasicTable>
        ) : (
          <AlertMessage scheme="error">Không có house</AlertMessage>
        )}
        {data?.bizz ? (
          <BasicTable>
            <tbody>
              <tr>
                <td>Bizz #{data.bizz.ID}</td>
                <td className="text-emerald-500">{data.bizz.Message}</td>
              </tr>
              <tr>
                <td>Đang bán</td>
                <td>
                  {data.bizz.BuyPrice
                    ? formatCurrency(data.bizz.BuyPrice)
                    : "Không"}
                </td>
              </tr>
              <tr>
                <td>Giá vào cửa</td>
                <td>{formatCurrency(data.bizz.EntranceCost)}</td>
              </tr>
              <tr>
                <td>Trạng thái</td>
                <td>
                  {data.bizz.Locked ? (
                    <span className="text-red-500">Khóa</span>
                  ) : (
                    <span className="text-emerald-500">Mở</span>
                  )}
                </td>
              </tr>
            </tbody>
          </BasicTable>
        ) : (
          <AlertMessage scheme="error">Không có bizz</AlertMessage>
        )}
      </div>
    </div>
  ) : (
    <Empty />
  )
}
