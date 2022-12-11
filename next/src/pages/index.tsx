import { Button, Divider, Grid, styled } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { Page } from '../components/Page'
import GroupsIcon from '@mui/icons-material/Groups'
import { TeamLogo } from '../components/TeamLogo'
import { Section } from '../components/Section'
import { Label } from '../components/Label'

const BudgetContainer = styled(Section)(({ theme }) => ({
    width: '800px',
    height: '300px',
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center"
}))

const CustomGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: theme.spacing(3)
}))

const CustomGridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}))


const HomePage: NextPage = () => {
    return (
        <Page>
            <CustomGrid container >
                <Grid item>
                    <TeamLogo sx={{ position: 'absolute', left: 0, right: 0, m: "auto" }} />
                    <BudgetContainer>
                        <Grid container>
                            <CustomGridItem item xs={5}>
                                <Label>Última Pontuação</Label>
                                <Label>99.04</Label>
                            </CustomGridItem>
                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: "center" }}>
                                <Divider orientation="vertical" sx={{ height: "auto" }} />
                            </Grid>
                            <CustomGridItem item xs={5}>
                                <Label>Patrimônio</Label>
                                <Label>300</Label>
                            </CustomGridItem>

                        </Grid>
                    </BudgetContainer>
                </Grid>
                <Grid item>
                    <Button
                        component={Link}
                        href='/players'
                        variant='contained'
                        startIcon={<GroupsIcon />}
                    >
                        Escalar Jogadores
                    </Button>
                </Grid>
            </CustomGrid>
        </Page>
    )
}

export default HomePage