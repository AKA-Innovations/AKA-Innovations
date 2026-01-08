import { FC } from "react";

export const HealthFooter: FC = () => {
    return (
        <section className="bg-(--color-health-navy) border-t border-(--color-health-slate-dark) py-6">
            <div className="container mx-auto px-6 lg:px-12">
                <p className="text-[14px] font-inter text-(--color-health-slate) text-center">
                    © 2025 AKA Innovations. All rights reserved.
                </p>
            </div>
        </section>
    );
};
