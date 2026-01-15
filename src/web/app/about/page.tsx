import React from 'react';
import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: "About | Flattened English",
    description: "About the research project measuring invisible linguistic labor and compliance costs.",
};

export default function Page() {
    return <AboutContent />;
}
