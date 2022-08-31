import { useQueryClient } from "@tanstack/react-query"
import { AlertMessage, Empty, Menu, Tooltip } from "components/basic"
import { Loading, PageHeader } from "components/core"
import { getAxiosMessageError } from "helpers"
import { useAppSelector } from "hooks"
import toast from "react-hot-toast"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { useParams } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import {
  TicketComments,
  TicketCreateComment,
  TicketOverview,
} from "../components"
import { useGetTicket, useUpdateTicket } from "../hooks"
import { TicketStatus } from "../interfaces"

export default function TicketDetail() {
  const { id = "" } = useParams()
  const { profile } = useAppSelector(userSelector)
  const queryClient = useQueryClient()
  const { data: ticket, isLoading: isGettingTicket } = useGetTicket(id)
  const { mutateAsync: updateTicket, isLoading: isUpdatingTicket } =
    useUpdateTicket()

  const handleTicketStatus = () => {
    if (!ticket || isUpdatingTicket) return
    toast.promise(
      updateTicket({
        id: ticket.id,
        status:
          ticket.status === TicketStatus.OPEN
            ? TicketStatus.CLOSE
            : TicketStatus.OPEN,
      }),
      {
        loading: "Đang cập nhật phiếu...",
        success(ticket) {
          queryClient.setQueryData(["get-ticket", id], ticket)
          return "Đã cập nhật phiếu"
        },
        error: (error) => getAxiosMessageError(error),
      }
    )
  }

  if (isGettingTicket) return <Loading />

  return ticket ? (
    <div className="space-y-4">
      <PageHeader
        actions={
          !!profile?.Admin && (
            <Menu
              button={
                <Tooltip content="Hành động" placement="left">
                  <div className="p-2 text-xl bg-gray-800 rounded-md cursor-pointer">
                    <MdOutlineMoreHoriz />
                  </div>
                </Tooltip>
              }
            >
              <div onClick={handleTicketStatus}>
                {ticket.status === TicketStatus.OPEN ? "Đóng" : "Mở"} phiếu
              </div>
            </Menu>
          )
        }
      >
        Phiếu hỗ trợ #{id}
      </PageHeader>
      <div className="grid grid-cols-2 items-start gap-4">
        <TicketOverview data={ticket} />
        <div className="p-4 space-y-4 bg-gray-800 rounded-md">
          <TicketComments id={id} />
          {ticket.status === TicketStatus.OPEN ? (
            <TicketCreateComment id={id} />
          ) : (
            <AlertMessage scheme="error">Phiếu đã đóng</AlertMessage>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  )
}
