import React from 'react';
import './Faq.css'; // Import your CSS file for the header

export function Faq() {
    return (
        <>
            {/* Header Section */}
            <section className="header">
                <h1>We’ll Be Glad To Assist You!!</h1>
                <button className="faq-button">FAQs</button>
            </section>

            {/* FAQ Section */}
            <section className="faq">
                <h2>Frequently asked questions</h2>
                <p>This page provides solutions to the queries raised by the service users/citizens and other information about the functioning and working of the Nagarik Mobile App.</p>

                <div className="faq-item">
                    <h3>What is Nagarik Mobile App?</h3>
                    <p>Nagarik Mobile App is a software system that runs services on mobile and tablets. The Nagarik Mobile App is the beginning of a new era of digital Nepal. If the government continues to make this app more effective in the coming days, the era of paper documentation in Nepal will come to an end.</p>
                </div>

                <div className="faq-item">
                    <h3>How to Register on Nagarik Mobile App?</h3>
                    <p>To register, simply download the app from the Play Store or App Store. Then, click on "Register" and fill in your details, including your name, phone number, and citizenship ID. After verification, you will be successfully registered and able to use the services.</p>
                </div>

                <div className="faq-item">
                    <h3>What Services Does the Nagarik Mobile App Provide?</h3>
                    <p>The Nagarik Mobile App offers several government services, such as applying for a citizenship certificate, vehicle registration, utility bill payments, and tracking the status of documents.</p>
                </div>

                <div className="faq-item">
                    <h3>Is Nagarik Mobile App Secure?</h3>
                    <p>Yes, the Nagarik Mobile App uses state-of-the-art encryption to protect your personal information. It is regularly updated to ensure compliance with the latest security standards, ensuring that your data remains safe and private.</p>
                </div>

                <div className="faq-item">
                    <h3>Can I Pay Bills through the Nagarik Mobile App?</h3>
                    <p>Yes, the app allows users to pay utility bills, such as electricity, water, and telephone bills. The app connects to local banking systems to facilitate smooth and secure payment options.</p>
                </div>
            </section>
        </>
    );
}
