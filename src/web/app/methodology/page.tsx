import React from 'react';
import { Metadata } from 'next';
import MethodologyContent from './MethodologyContent';

export const metadata: Metadata = {
    title: "Methodology | Flattened English",
    description: "Technical framework and methodology for auditing linguistic labor in AI platforms.",
};

export default function Page() {
    return <MethodologyContent />;
}
