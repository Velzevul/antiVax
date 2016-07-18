import React from 'react'

const baseline = 0.750
import styles from './ModalWindow.css'
import {Flex} from '../../Layouts'

const ModalWindow = ({
  children,
  multipliers = {
    width: 40
  }
}) => {
  const style = {
    width: `${multipliers.width * baseline}rem`
  }

  return (
    <div className={styles.Modal}>
      <Flex alignItems="center" justifyContent="center">
        <section style={style} className={styles.ModalWindow}>
          {children}
        </section>
      </Flex>
    </div>
  )
}

const ModalWindowHeader = ({
  children,
  multipliers = {
    padding: {
      vertical: 2,
      horizontal: 2
    }
  }
}) => {
  const style = {
    padding: `${multipliers.padding.vertical * baseline}rem ${multipliers.padding.horizontal * baseline}rem`
  }

  return (
    <header style={style} className={styles.ModalWindow__header}>
      {children}
    </header>
  )
}

const ModalWindowBody = ({
  children,
  multipliers = {
    padding: {
      vertical: 3,
      horizontal: 2
    }
  }
}) => {
  const style = {
    padding: `${multipliers.padding.vertical * baseline}rem ${multipliers.padding.horizontal * baseline}rem`
  }

  return (
    <main style={style} className={styles.ModalWindow__body}>
      {children}
    </main>
  )
}

const ModalWindowFooter = ({
  children,
  multipliers = {
    padding: {
      vertical: 1,
      horizontal: 2
    }
  }
}) => {
  const style = {
    padding: `${multipliers.padding.vertical * baseline}rem ${multipliers.padding.horizontal * baseline}rem`
  }

  return (
    <footer style={style} className={styles.ModalWindow__footer}>
      {children}
    </footer>
  )
}

export {ModalWindow, ModalWindowBody, ModalWindowHeader, ModalWindowFooter}
