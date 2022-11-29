import { Container, Row, Col, Grid } from '@nextui-org/react'
import { ArrowLeftIcon, QueueListIcon } from "@heroicons/react/24/outline";

export const Controls = () => {
    return (
        <div>
            <Grid.Container css={{ position: "absolute", top: 20, flexDirection: "column", alignContent: "space-between", width: "100%", height: "100%" }}>
                <Grid css={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <ArrowLeftIcon width={40} />
                    <QueueListIcon width={40} />
                </Grid>
                <Grid>
                    <p>Play / Pause</p>
                </Grid>
            </Grid.Container>
        </div>
    )
}

