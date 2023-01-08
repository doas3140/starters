import styles from './button.module.css'
import * as React from 'react'
import {Button as AButton} from 'antd'

type ButtonProps = {
  name: string
  onClick?: () => void
}

export const ButtonDefaultProps: ButtonProps = {
  name: 'name',
}

export const Button = (props: ButtonProps = ButtonDefaultProps) => {
  return <AButton onClick={props.onClick} className={styles.button}>{props.name}</AButton>
}
