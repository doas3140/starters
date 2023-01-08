import styles from './button.module.css'
import * as React from 'react'
import {Button as AButton} from 'antd'

export type ButtonProps = {
  name: string
}

export const ButtonDefaultProps: ButtonProps = {
  name: 'name',
}

export const Button = (props: ButtonProps = ButtonDefaultProps) => {
  return <AButton className={styles.button}>{props.name}</AButton>
}
