import { useNavigate, useLocation } from '@remix-run/react';

export default function redirect(option: string) {

    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    const scrollToSection = (option: string) => {
        const section = document.getElementById(option);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };

    if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
            scrollToSection(option);
        }, 1);
    } else {
        scrollToSection(option);
    };
};