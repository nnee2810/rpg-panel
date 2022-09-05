import {
  BasicTable,
  Button,
  Empty,
  Loading,
  PageHeader,
  StatusMessage,
} from "components"
import { vnpResponseMessage } from "configs/constants"
import moment from "moment"
import { BsCheckCircleFill, BsXCircle } from "react-icons/bs"
import { useNavigate, useParams } from "react-router-dom"
import { formatCurrency } from "utils/format"
import { useGetTxn } from "../hooks"

export default function TxnResult() {
  const navigate = useNavigate()
  const { txnRef } = useParams()
  const { data, isLoading } = useGetTxn(txnRef || "")

  return (
    <div className="space-y-4">
      <PageHeader>Kết quả giao dịch</PageHeader>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div className="max-w-lg mx-auto py-4 space-y-4 ">
          <div
            className={
              data.responseCode === "00" ? "text-emerald-500" : "text-red-500"
            }
          >
            <StatusMessage
              icon={
                data.responseCode === "00" ? (
                  <BsCheckCircleFill />
                ) : (
                  <BsXCircle />
                )
              }
              description={
                vnpResponseMessage[
                  data.responseCode as keyof typeof vnpResponseMessage
                ]
              }
            />
          </div>
          <BasicTable className="mt-4">
            <tbody>
              <tr>
                <td>Mã giao dịch</td>
                <td>{data.transactionNo !== "0" ? data.transactionNo : "-"}</td>
              </tr>
              <tr>
                <td>Mã tham chiếu</td>
                <td>{data.txnRef}</td>
              </tr>
              <tr>
                <td>Đơn giá</td>
                <td>{formatCurrency(data.amount, "")}</td>
              </tr>
              {data.responseCode === "00" && (
                <>
                  <tr>
                    <td>Xu nhận được</td>
                    <td>{data.received}</td>
                  </tr>
                  <tr>
                    <td>Số xu mới</td>
                    <td>{data.newBalance}</td>
                  </tr>
                </>
              )}
              <tr>
                <td>Ngày giao dịch</td>
                <td>{moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
              </tr>
            </tbody>
          </BasicTable>
          <div className="text-red-500 text-center">
            Hãy chụp lại giao dịch để có thể hỗ trợ khi cần thiết
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button scheme="primary" onClick={() => navigate("/topup")}>
              Giao dịch mới
            </Button>
            <Button onClick={() => navigate("/topup/txn")}>
              Lịch sử giao dịch
            </Button>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  )
}
