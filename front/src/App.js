import { useCallback, useEffect, useState } from "react";
import "./App.css";
import fetchData, { deleteById } from "./api/api";

import CardList from "./components/CardList/CardList";
import EditModal from "./components/EditModal/EditModal";
import ModalPortal from "./components/ModalPortal/ModalPortal";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdateRequired] = useState(Date.now());
  const [editedData, setEditedData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchData()
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error setting data:", error);
      });
  }, [update]);

  const handleDelete = useCallback(async (event) => {
    const _id = event.target.getAttribute("data-key");
    deleteById(_id);
    setUpdateRequired(Date.now());
    fetchData()
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error setting data:", error);
      });
  }, []);

  const handleEdit = (data) => {
    console.log(data);
    setEditedData(data);

    setIsEditModalOpen(true);
  };
  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div className="App">
      <header className="App-header">Superheroes</header>
      {data.length > 0 ? (
        <CardList
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No data available</p>
      )}

      {isEditModalOpen && (
        <EditModal
          editedData={editedData}
          isEditModalOpen={isEditModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
