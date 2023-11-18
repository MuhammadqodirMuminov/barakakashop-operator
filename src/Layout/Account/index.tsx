import { BellOutlined, LogoutOutlined } from "@ant-design/icons"
// import {Avatar, Modal, Typography} from 'antd';
import classnamesBind from "classnames/bind"
// import {authActions} from '@/store';
// import {getLocalStorage, makeFileUrl} from '@/utils';
import { Modal, Typography } from "antd"
import styles from "./account.module.scss"
import { accountDictionary } from "./dictionary"

const cn = classnamesBind.bind(styles)

export const Account = () => {
  // const dispatch = useDispatch();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const admin = ("admin")

  // const changeModal = () => setIsModalOpen(!isModalOpen);

  // const handleOk = () => dispatch(authActions.logout());

  return (
    <div className={cn("account")}>
      <BellOutlined className={cn("account__icon")} />
      <LogoutOutlined className={cn("account__icon")} onClick={() => {}} />

      {/* <Avatar src={makeFileUrl(admin?.photo)} icon={<UserOutlined />} /> */}

      <div className={cn("account__info")}>
        <Typography.Text strong>{/* {admin?.firstName} {admin?.lastName} */}</Typography.Text>

        <Typography.Text>{/* {admin?.email} */}</Typography.Text>
      </div>

      <Modal
        title={accountDictionary.exit}
        // open={isModalOpen}
        // onOk={handleOk}
        // onCancel={changeModal}
      >
        <span>{accountDictionary.logout}</span>
      </Modal>
    </div>
  )
}
