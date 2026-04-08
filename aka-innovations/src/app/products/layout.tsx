import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products | AKA Innovations',
    description: 'Explore AKA Innovations flagship products including School ERP and Health Connect systems.',
    alternates: { canonical: '/products' },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
