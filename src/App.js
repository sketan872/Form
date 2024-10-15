import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favcar: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function SubmitHandler(event) {
    event.preventDefault();
    console.log("Finally printed all the data");
    console.log(formData);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={SubmitHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <input 
          type='text' 
          name='firstName' 
          placeholder='Enter your First name' 
          onChange={changeHandler}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        
        <input 
          type='text' 
          name='lastName' 
          placeholder='Enter your Last name' 
          onChange={changeHandler}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        
        <input 
          type='email' 
          placeholder='Enter your email' 
          onChange={changeHandler} 
          name='email' 
          value={formData.email} 
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        
        <textarea 
          placeholder='Enter your comments' 
          onChange={changeHandler} 
          name='comments' 
          value={formData.comments} 
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />

        <div className="flex items-center mb-4">
          <input 
            type='checkbox'
            name='isVisible'
            onChange={changeHandler}
            id='isVisible'
            checked={formData.isVisible}
            className="mr-2"
          />
          <label htmlFor='isVisible' className="text-gray-700">Am I Visible?</label>
        </div>

        <fieldset className="mb-4">
          <legend className="text-gray-700 mb-2">Mode:</legend>
          <div className="flex items-center">
            <input 
              type='radio'
              onChange={changeHandler} 
              id='online-mode'
              name='mode'
              value='online-mode'
              checked={formData.mode === 'online-mode'}
              className="mr-2"
            />
            <label htmlFor='online-mode' className="text-gray-700">Online Mode</label>
          </div>
          <div className="flex items-center mt-2">
            <input 
              type='radio'
              onChange={changeHandler} 
              id='offline-mode'
              name='mode'
              value='offline-mode'
              checked={formData.mode === 'offline-mode'}
              className="mr-2"
            />
            <label htmlFor='offline-mode' className="text-gray-700">Offline Mode</label>
          </div>
        </fieldset>

        <label htmlFor='favcar' className="block text-gray-700 mb-2">Select your favourite car:</label>
        <select 
          name='favcar'
          onChange={changeHandler}
          value={formData.favcar}
          id='favcar'
          className="border border-gray-300 p-2 rounded w-full mb-4"
        >
          <option value='Fortuner'>Fortuner</option>
          <option value='Endevour'>Endevour</option>
          <option value='Scorpio'>Scorpio</option>
          <option value='Seltos'>Seltos</option>
          <option value='Creta'>Creta</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
