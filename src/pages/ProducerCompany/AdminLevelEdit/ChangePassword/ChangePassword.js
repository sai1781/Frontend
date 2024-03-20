import react, {useState} from 'react';
import styled from 'styled-components';
import './ChangePassword.css'

const Changepassword = () => {
    const [formData, setFormData] = useState({
        username: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
      };
    
      const handleCancel = () => {
        // Add your cancel logic here
        console.log('Form canceled');
        // You might want to reset the form data or navigate away from the form
      };
    

return (
  

    <div className='CenteredBox'>
      <div className='FormContainer'>
        <form onSubmit={handleSubmit}>
          <div className='FormGroup'>
            <div className='Label' htmlFor="username">Username:</div>
            <input className='Input'
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className='FormGroup'>
            <div className='Label' htmlFor="oldPassword">Old Password:</div>
            <input className='Input'
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className='FormGroup'>
            <div className='Label' htmlFor="newPassword">New Password:</div>
            <input className='Input'
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className='FormGroup'>
            <div className='Label' htmlFor="confirmPassword">Confirm Password:</div>
            <input className='Input'
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className='ButtonContainer'>
            <button className='SubmitButton'>Save</button>
            <button className='CancelButton' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div> 
);
}
export default Changepassword;