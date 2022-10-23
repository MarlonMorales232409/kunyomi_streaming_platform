
import Head from 'next/head'
import React, { FC } from 'react'
import { NavbarComponent } from '../ui'

interface Props {
    title: string
    pageDescription: string
    image?: string
    children: React.ReactElement | React.ReactElement[]
}

export const MainLayout: FC<Props> = ({ children, title, pageDescription, image }) => {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                <meta name="og:image" content={image} />
            </Head>
            <nav>
                <NavbarComponent />
            </nav>
            <main>
                {children}

            </main>

            <footer>
                {/* Footer */}
            </footer>
        </>
    )
}
