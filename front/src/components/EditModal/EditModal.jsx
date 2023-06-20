import React, { useState } from "react";
import css from "./EditModal.module.css";

const EditModal = ({ editedData, isEditModalOpen, onClose }) => {
  const [formData, setFormData] = useState(editedData);
  console.log(editedData);
  console.log(formData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // save data
    console.log("Обновленные данные:", formData);
    onClose();
  };

  if (!isEditModalOpen) {
    return null;
  }

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>Edit superhero</h2>
        <form>
          <label>
            Nickname:
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Real name:
            <input
              type="text"
              name="realname"
              value={formData.real_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Catch_phrase:
            <input
              type="text"
              name="catch_phrase"
              value={formData.catch_phrase}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Оrigin_description:
            <textarea
              name="origin_description"
              value={formData.origin_description}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label> 
            Superpowers: 
            <textarea 
              name="superpowers" 
              value={formData.superpowers} 
              onChange={handleInputChange} 
            ></textarea> 
          </label>
          <div className={css.buttonContainer}>
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
