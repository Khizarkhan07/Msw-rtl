import { List, Avatar, Spin } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "./Users.service";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {!users.length ? (
        <Spin
          data-testid="loader"
          size="large"
          style={{ marginTop: "20%", marginLeft: "50%" }}
        />
      ) : (
        <div style={{ padding: "25px" }}>
          <List
            itemLayout="horizontal"
            dataSource={users.length ? users : []}
            renderItem={(item: any) => (
              <List.Item data-testid="list-item">
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{ marginTop: "10px" }}
                      size={50}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  }
                  title={<p> {item.name}</p>}
                  description={<p> {item.createdAt}</p>}
                />
              </List.Item>
            )}
          />
        </div>
      )}
      ,
    </div>
  );
};
export default Users;
