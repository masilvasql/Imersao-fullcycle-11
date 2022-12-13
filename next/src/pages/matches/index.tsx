import { Box, Button } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MatchResult } from '../../components/MatchResult'
import { Page } from '../../components/Page'


const ListMatchesPage: NextPage = () => {
    return (
        <Page>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: (theme) => theme.spacing(3),
                flexDirection: "column"
            }}>
                <MatchResult match={{ team_a: "Brasil", team_b: "Argentina" }} />
                <MatchResult match={{ team_a: "Brasil", team_b: "Argentina" }} />
                <MatchResult match={{ team_a: "Brasil", team_b: "Argentina" }} />
            </Box>
        </Page>
    )
}

export default ListMatchesPage