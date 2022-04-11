import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";


export default observer(function HomePage() {

    const { userStore } = useStore();

    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as="h1" inverted>
                    <Image size="massive" src="/assets/booksLogo.png" alt="logo"
                    style={{marginBottom: 12}}/>
                    Book Club
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as="h2" inverted content="Welcome to The Book Club!"/>
                        <Button as={Link} to="/activities" size="huge" inverted>
                            Let's see some books!
                        </Button>
                    </>
                ) : (
                    <Button as={Link} to="/login" size="huge" inverted>
                            Login
                    </Button>
                )}
            </Container>
        </Segment>
    )
})