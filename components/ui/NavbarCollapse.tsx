import NextLink from 'next/link'
import { Input, Link, Navbar, User } from "@nextui-org/react"

export const NavbarCollapse = () => {
    return (
        <>
            <Navbar.Collapse >

                <Navbar.CollapseItem>
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name="Ariana Wattson"
                        size='lg'
                    />
                </Navbar.CollapseItem>

                <Navbar.CollapseItem>
                    <NextLink href={'/'} passHref>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                        >
                            Home
                        </Link>
                    </NextLink>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <NextLink href={'/'} passHref>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                        >
                            Favorites
                        </Link>
                    </NextLink>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <NextLink href={'/'} passHref>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                        >
                            News
                        </Link>
                    </NextLink>
                </Navbar.CollapseItem>

            </Navbar.Collapse>

        </>
    )
}
