'use client'

import styles from './SettingsNavbar.module.css'

interface SettingsNavbarProps {
  onSelect: (section: string) => void;
  selected: string;
}

export default function SettingsNavbar({ onSelect, selected }: SettingsNavbarProps) {
  const navItems = [
    {
      id: 'personal-info',
      label: 'Personal Info',
    },
    {
      id: 'goals-accounts',
      label: 'Manage Goals/Accounts',
    },
  ]

  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => {
        const isActive = selected === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
