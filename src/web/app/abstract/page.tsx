import React from 'react';
import { Metadata } from 'next';
import AbstractContent from './AbstractContent';

export const metadata: Metadata = {
    title: "Abstract | Flattened English",
    description: "Research abstract on measuring linguistic labor in AI-mediated knowledge work.",
};

export default function Page() {
    return <AbstractContent />;
}
