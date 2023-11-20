import { LogoutOutlined } from "@ant-design/icons"
import classnamesBind from "classnames/bind"
// import {authActions} from '@/store';
// import {getLocalStorage, makeFileUrl} from '@/utils';
import { useActions } from "@/hooks"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Modal } from "antd"
import { useState } from "react"
import styles from "./account.module.scss"
import { accountDictionary } from "./dictionary"

const cn = classnamesBind.bind(styles)

export const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const changeModal = () => setIsModalOpen(!isModalOpen)

  const { logout } = useActions()

  const handleOk = () => logout()

  return (
    <div className={cn("account")}>
      <LogoutOutlined className={cn("account__icon")} onClick={changeModal} />

      <Avatar src={""} icon={<UserOutlined />} />

      <Modal
        title={accountDictionary.exit}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={changeModal}
      >
        <span>{accountDictionary.logout}</span>
      </Modal>
    </div>
  )
}
