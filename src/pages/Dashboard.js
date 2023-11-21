import React, { useEffect, useState } from "react";
import { TopNav } from "../components/TopNav";
import { TransForm } from "../components/TransForm";
import { Button, Container } from "react-bootstrap";
import { TransTable } from "../components/TransTable";
import { getTrans } from "../heper/axiosHelper";
import { CustomModal } from "../components/CustomModal";

const Dashboard = () => {
  const [transList, setTransList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getAllTrans();
  }, []);

  const getAllTrans = async () => {
    const { status, transList } = await getTrans();
    status === "success" && setTransList(transList);
  };

  return (
    <div>
      <></>

      {/* navbar  */}
      <TopNav />
      <Container fluid>
        {/* form */}

        <CustomModal show={modalShow} onHide={() => setModalShow(false)}>
          <TransForm getAllTrans={getAllTrans} />
        </CustomModal>

        <div className="text-end mt-5">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add New Transaction
          </Button>
        </div>
        {/* table */}
        <TransTable transList={transList} getAllTrans={getAllTrans} />
      </Container>
    </div>
  );
};

export default Dashboard;
