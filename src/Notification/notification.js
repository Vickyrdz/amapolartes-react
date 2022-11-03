import { useState, createContext } from "react";

const Notification = ({ message, severity }) => {
  const notificationStyle = { 
    
    position: 'initial',
    top: 100,
    right: 10,
    width: 'auto',
    height: 'auto',
    backgroundColor: severity === 'success' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px 10px 20px'
    
  };

  if(message === '') return undefined

  return (
    <div style={notificationStyle} className={severity === 'success' ? 'greenClass' : 'redClass'}>
      {message}
    </div>
  )
};

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (severity, message) => {
    setSeverity(severity)
    setMessage(message)

    setTimeout(() => {
        setMessage('')
    }, 3000)
  }

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification  severity={severity} message={message}/>
      { children }
    </NotificationContext.Provider>
  )
}
