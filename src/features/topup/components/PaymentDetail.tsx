import { BasicTable, Button } from "components"
import { formatCurrency } from "utils/format"
import { CreatePaymentDto } from "../dto"

interface PaymentDetailProps {
  data: CreatePaymentDto
  isLoading?: boolean
}

export default function PaymentDetail({ data, isLoading }: PaymentDetailProps) {
  return (
    <div className="space-y-2">
      <div className="font-medium">Chi tiết giao dịch</div>
      <BasicTable className="mt-1">
        <tbody>
          <tr>
            <td>Gói nạp</td>
            <td>{data.amount ? formatCurrency(data.amount, "") : "-"}</td>
          </tr>
          <tr>
            <td>Phương thức thanh toán</td>
            <td>VNPay</td>
          </tr>
          <tr>
            <td>Tổng tiền</td>
            <td>{data.amount ? formatCurrency(data.amount, "") : "-"}</td>
          </tr>
        </tbody>
      </BasicTable>
      <div className="text-red-500">Hãy thoát game trước khi thanh toán</div>
      <Button
        type="submit"
        scheme="primary"
        isLoading={isLoading}
        className="w-full"
      >
        Thanh toán
      </Button>
    </div>
  )
}
