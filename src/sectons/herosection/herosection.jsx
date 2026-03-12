import './herosection.css';
import { Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const items = [
    {
        key: "1",
        label: "Edit",
    },
    {
        key: "2",
        label: "Delete",
    },
    {
        key: "3",
        label: "View",
    },
];

function HeroSection() {
    return (
        <>
            <div className="hero-section">
                <img src="../public/img/hero-section.jpg" alt="herosection" />

                <div className='hero-section-text'>
                    <h4>#1 Energy provider in the world</h4>
                    <h1>New Energy for the Future</h1>

                    <div className='hero-section-tags'>
                        <a href="">Get in touch ↗</a>
                        <a href="">Our services ↗</a>
                    </div>
                </div>

                <div className='hero-section-tags-right'>
                    <img src="../public/img/fan1.jpg" alt="fan" />
                    <div className='hero-section-arrow'>
                        <a href="">↗</a>
                    </div>

                    <p>Discover Our <br /> Recent Project</p>

                    <div className='hero-section-dropdown'>
                        <Dropdown
                            menu={{ items }}
                            trigger={["click"]}
                            placement="bottomRight"
                        >
                            <MoreOutlined />
                        </Dropdown>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state-card-text">
                        <h1>6 mil</h1>
                        <p>The compney's <br />annual net income</p>
                    </div>
                    <div className="state-card-text">
                        <h1>315</h1>
                        <p>Projects complate <br />worldwide</p>
                    </div>
                    <div className="state-card-text">
                        <h1>120k</h1>
                        <p>Employess work in all <br />parts of the world</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;