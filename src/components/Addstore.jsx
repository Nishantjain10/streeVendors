import React from 'react';
import Modal from 'react-modal';
import Input from './Input';
import stores from '../backend/stores';
import { useState, useEffect } from "react";
import './styles.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const INITIAL_STATE = {
    id: 0,
    name: "",
    category: "",
    address: "",
    phone: ""
};



// Modal.setAppElement('#StoreCard');

function AddStore() {

  const [user, setUser] = useState(INITIAL_STATE);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      stores.push(user);
      console.log("this is new arr ");
      console.log(stores);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="button-wrapper mt-20 mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all" onClick={openModal}>
            Add a Store🤩
          </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className='flex flex-row justify-between px-2 my-2'>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Store</h2>
        <button onClick={closeModal}>❌</button>
        </div>
        <div>Store Name:</div>
        <form onSubmit={handleSubmit}>
            <Input 
              className ="profile-name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
              name="title"
              type="text"
              // value={}
              placeholder={"Enter title"}
              handleInput={handleInput}
            />
            <br />
            
            <Input
              name="description"
              type="text"
              value={user.description}
              placeholder={"Enter description"}
              handleInput={handleInput}
            />
            <br/>
            <Input
              name="images"
              type="file"
              value={user.images}
              placeholder={"Upload image"}
              handleInput={handleInput}
            />
            <br/>
            <Input
              name="banner"
              type="file"
              value={user.banner}
              placeholder={"Upload banner"}
              handleInput={handleInput}
            />
            <br/>
            {/* <Input
              name="address"
              type="address"
              value={user.address}
              placeholder={"Enter address"}
              handleInput={handleInput}
            /> */}
            <br />
            {/* <input type="submit" value="Update" onClick={closeModal}/> */}
            <button type="submit" onClick={closeModal}>Save</button>
          </form>
      </Modal>
    </div>
  );
}

export default AddStore;