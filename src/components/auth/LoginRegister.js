import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function LoginRegister() {
    const [tabSelected, setTabSelected] = useState("/home");

    const handleTabChange = (event) => {
        setTabSelected(event.target.id);
    };

    useEffect(() => {
        const activeTab = document.getElementById(tabSelected);
        activeTab.scrollIntoView({ behavior: "smooth" });
    }, [tabSelected]);

    return (
        <Tabs
            defaultActiveKey="/home"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="/home" title="Home">
                <Home />
            </Tab>
            <Tab eventKey="/about" title="Profile">
                <About />
            </Tab>
        </Tabs>
    );
}

const Home = () => {
    return (
        <section className="hero">
            <h1>Welcome To Home Page</h1>
        </section>
    )
}

const About = () => {
    return (
        <section className="hero">
            <h1>Welcome To About Page</h1>
        </section>
    )
}

export default LoginRegister;
