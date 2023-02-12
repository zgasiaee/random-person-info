import React, { useEffect, useState } from 'react'

//style
import styles from '../styles/Style.module.css'

//api
import { getData } from '../services/api'

//icon
import { ReactComponent as Name } from '../assets/name.svg'
import { ReactComponent as Email } from '../assets/email.svg'
import { ReactComponent as Age } from '../assets/age.svg'
import { ReactComponent as Street } from '../assets/street.svg'
import { ReactComponent as Phone } from '../assets/phone.svg'
import { ReactComponent as Password } from '../assets/password.svg'

const Card = () => {

  const [data, setData] = useState({})
  const [next, setNext] = useState(false)
  const [icon, setIcon] = useState('name')
  const value = typeof data.picture != 'undefined' && {
    name: data.name.first + ' ' + data.name.last,
    email: data.email,
    age: data.registered.age,
    street: data.location.street.name,
    phone: data.phone,
    password: data.login.password,
  }

  useEffect(() => {
    const fetch = async () => {
      setData(await getData())
    }
    fetch()
  }, [next])

  return (
    <>
      {typeof data.picture != 'undefined' && (
       <div className={styles.container}>
           <div className={styles.card}>
          <img src={data.picture.large} alt="profile" className={styles.img} />
          <p className={styles.titel}>My {icon} is</p>
          <span className={styles.text}>{value[icon]}</span>
          <div className={styles.iconContainer}>
            <Name className={styles.icon} onMouseMove={() => setIcon('name')} />
            <Email
              className={styles.icon}
              onMouseMove={() => setIcon('email')}
            />
            <Age className={styles.icon} onMouseMove={() => setIcon('age')} />
            <Street
              className={styles.icon}
              onMouseMove={() => setIcon('street')}
            />
            <Phone
              className={styles.icon}
              onMouseMove={() => setIcon('phone')}
            />
            <Password
              className={styles.icon}
              onMouseMove={() => setIcon('password')}
            />
          </div>
          <button className={styles.button} onClick={() => setNext(!next)}>
            RANDOM USER
          </button>
        </div> 
       </div>
      )}
    </>
  )
}

export default Card
