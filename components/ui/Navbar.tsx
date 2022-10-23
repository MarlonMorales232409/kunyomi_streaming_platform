import React from 'react'
import NextLink from 'next/link'
import { Button, Card, Container, Grid, Input, Navbar, Radio, Spacer, Text, User, Link } from '@nextui-org/react'
import { NavbarCollapse } from './'

export const NavbarComponent = () => {
    return (

        <Navbar variant={"sticky"} css={{ flexDirection: "column", width: "100vw" }}>

            <Navbar.Brand >
                <NextLink href='/' passHref>
                    <Link>
                        <Text h1 size={"$3xl"} color='white'>KUNYOMI</Text>
                    </Link>
                </NextLink>
            </Navbar.Brand>
            <Spacer />
            <Input
                css={{ flex: 1 }}
                rounded
                bordered
                placeholder="What would you like to watch?"
                color="warning"
                width='100%'
            />
            <Spacer />
            <Navbar.Content hideIn="xs" >
                <NextLink href="/favorites">
                    <Navbar.Link>Favorites</Navbar.Link>
                </NextLink>
                <NextLink href="/news">
                    <Navbar.Link>
                        News
                    </Navbar.Link>
                </NextLink>

                <Navbar.Item >
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name="Ariana Wattson"
                        size='lg'
                    />
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Toggle showIn="xs" />
            <NavbarCollapse />

        </Navbar>
    )
}
