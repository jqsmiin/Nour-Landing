import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../components/PageHeader';
import price1 from '../images/price1.svg'
import price2 from '../images/price2.svg'
import price3 from '../images/price3.svg'

function PricingPlan() {
    const [plan, setPlan] = useState('yearly')

    const handleState = (e) => {
        console.log(e.target.textContent)
        const target = e.target.textContent
        if (target === 'Yearly') {
            setPlan('yearly')
            e.target.classList.add('active')
            e.target.nextElementSibling.classList.remove('active')
        } else {
            setPlan('monthly')
            e.target.classList.add('active')
            e.target.previousElementSibling.classList.remove('active')
        }
    }

    const yearlyData = [
        {
            id: 1,
            icon: price1,
            plan: 'Basic',
            price: '05.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        },
        {
            id: 2,
            icon: price2,
            plan: 'Basic',
            price: '20.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        },
        {
            id: 3,
            icon: price3,
            plan: 'Basic',
            price: '100.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        }
    ]
    const monthlyData = [
        {
            id: 1,
            icon: price1,
            plan: 'Basic',
            price: '03.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        },
        {
            id: 2,
            icon: price2,
            plan: 'Basic',
            price: '08.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        },
        {
            id: 3,
            icon: price3,
            plan: 'Basic',
            price: '15.00',
            list: ['Increase traffic 50%', 'Social Media Marketing', '10 Free Optimization', '24/7 support']
        }
    ]

    return (
        <section id="pricing" className='mb-6 p-bg'>
            <Container>
                <PageHeader subtitle={'Pricing Plan'} title={'Choose Your Best Pricing Plan'} />
                <div className="button-container text-center">
                    <button className='btn-2 active' onClick={handleState}>Yearly</button>
                    <button className='btn-2' onClick={handleState}>Monthly</button>
                </div>
                <Row>
                    {plan === 'yearly' ? yearlyData.map(item => {
                        return (
                            <Col key={item.id} md={4}>
                                <div className="content">
                                    <div className="img-container-1">
                                        <img src={item.icon} alt="Icon" />
                                    </div>
                                    <h4>{item.plan}</h4>
                                    <h2>$ {item.price}</h2>
                                    <ul>
                                        {item.list.map((list, i) => {
                                            return (
                                                <li key={i}>{list}</li>
                                            )
                                        })}
                                    </ul>
                                    <button className='btn-3'>Get Started</button>
                                </div>

                            </Col>
                        )
                    }) : monthlyData.map(item => {
                        return (
                            <Col key={item.id} md={4}>
                                <div className="content">
                                    <div className="img-container-1">
                                        <img src={item.icon} alt="Icon" />
                                    </div>
                                    <h4>{item.plan}</h4>
                                    <h2>$ {item.price}</h2>
                                    <ul>
                                        {item.list.map((list, i) => {
                                            return (
                                                <li key={i}>{list}</li>
                                            )
                                        })}
                                    </ul>
                                    <button className='btn-0'>Get Started</button>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default PricingPlan
