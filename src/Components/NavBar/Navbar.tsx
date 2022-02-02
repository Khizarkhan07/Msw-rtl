import { Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [current, setCurrent] = useState("users");
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    setCurrent(e.key)
  };

    return (
      <Menu style={{background: '#d4d4d4'}} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item style={{color: '#000000' }} key="users" icon={<UserOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item style={{color: '#000000', marginLeft: '85%' }} key="logout" onClick={() => { localStorage.removeItem("is-authenticated"); navigate('/', { replace: true }) }} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
        
      </Menu>
    );

}
export default Navbar