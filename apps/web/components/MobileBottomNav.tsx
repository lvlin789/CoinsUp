'use client'

import { Home, Compass, Repeat, Wallet, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
    { label: '欧易', href: '/', icon: Home },
    { label: '发现', href: '/explore', icon: Compass },
    { label: '交易', href: '/trade', icon: Repeat },
    { label: '金融', href: '/finance', icon: Wallet },
    { label: '资产', href: '/assets', icon: User },
]

export default function MobileBottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-between px-2 py-1 shadow-md md:hidden">
            {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            'flex flex-col items-center justify-center px-2 py-1 text-xs text-gray-500',
                            isActive && 'text-black font-medium'
                        )}
                    >
                        <Icon className={clsx('h-5 w-5 mb-0.5', isActive ? 'stroke-[2.5]' : 'stroke-[1.5]')} />
                        <span>{item.label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}
